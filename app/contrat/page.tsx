"use client";
import { useState } from "react";
import SignaturePad from "@/components/SignaturePad";
import { CLIMATISEURS } from "@/lib/catalogue";
import { SITE } from "@/lib/site";
import { CONDITIONS, genererContratPdf, type DonneesContrat, type Signature } from "@/lib/contratPdf";

// ─────────────────────────────────────────────────────────────
// CONTRAT DE LOCATION À SIGNER SUR TÉLÉPHONE
// Adresse privée : locationclim45.fr/contrat (non indexée).
// Le client remplit, coche, signe au doigt → un PDF est créé sur
// le téléphone, à partager (WhatsApp, e-mail…) ou télécharger.
// Une copie texte horodatée est envoyée au loueur par e-mail.
// ─────────────────────────────────────────────────────────────

const MODELES = CLIMATISEURS.map(m => `${m.nom} ${m.puissance}`);
const ETATS = ["Appareil testé et fonctionnel", "Appareil propre, sans dommage visible", "Accessoires complets", "Photos prises"];
const CAUTION_PAR_APPAREIL = 150;

const nombre = (s: string) => {
  const n = parseFloat(s.replace(",", "."));
  return isNaN(n) ? 0 : n;
};
const euros = (n: number) => (Math.round(n * 100) / 100).toString().replace(".", ",");
const dateFr = (iso: string) => (iso ? iso.split("-").reverse().join("/") : "");

export default function PageContrat() {
  const [type, setType] = useState<"Particulier" | "Professionnel">("Particulier");
  const [appareils, setAppareils] = useState([{ numero: "", modele: MODELES[0] ?? "" }]);
  const [prix, setPrix] = useState({ location: "", livraison: "", arrhes: "" });
  const [paiement, setPaiement] = useState("Virement instantané");
  const [cautionMode, setCautionMode] = useState<"cheque" | "stripe">("cheque");
  const [etats, setEtats] = useState<string[]>([]);
  const [sigLocataire, setSigLocataire] = useState<Signature | null>(null);
  const [sigLoueur, setSigLoueur] = useState<Signature | null>(null);
  const [erreur, setErreur] = useState("");
  const [fichier, setFichier] = useState<File | null>(null);
  const [envoi, setEnvoi] = useState(false);

  const reste = nombre(prix.location) + nombre(prix.livraison) - nombre(prix.arrhes);

  function soumettre(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const f = new FormData(ev.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();

    const manquants: string[] = [];
    if (!v("nom")) manquants.push("nom");
    if (!v("prenom")) manquants.push("prénom");
    if (!v("adresse")) manquants.push("adresse");
    if (!v("telephone")) manquants.push("téléphone");
    if (!v("dateLivraison")) manquants.push("date de livraison");
    if (!v("dateRecuperation")) manquants.push("date de récupération");
    if (!prix.location) manquants.push("prix de la location");
    if (type === "Professionnel" && !v("societe")) manquants.push("société");
    if (!f.get("cgv")) manquants.push("acceptation des CGV");
    if (!sigLocataire) manquants.push("signature du locataire");
    if (manquants.length) {
      setErreur(`À compléter : ${manquants.join(", ")}.`);
      return;
    }
    setErreur("");
    setEnvoi(true);

    const maintenant = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    const numero = `LC45-${maintenant.getFullYear()}${pad(maintenant.getMonth() + 1)}${pad(maintenant.getDate())}-${pad(maintenant.getHours())}${pad(maintenant.getMinutes())}`;
    const signeLe = `${pad(maintenant.getDate())}/${pad(maintenant.getMonth() + 1)}/${maintenant.getFullYear()} à ${pad(maintenant.getHours())}:${pad(maintenant.getMinutes())}`;
    const montantCaution = CAUTION_PAR_APPAREIL * appareils.length;

    const d: DonneesContrat = {
      numero,
      signeLe,
      type,
      societe: v("societe"),
      siretClient: v("siretClient"),
      nom: v("nom"),
      prenom: v("prenom"),
      adresse: v("adresse"),
      telephone: v("telephone"),
      email: v("email"),
      appareils,
      dateLivraison: dateFr(v("dateLivraison")),
      dateRecuperation: dateFr(v("dateRecuperation")),
      prixLocation: euros(nombre(prix.location)),
      prixLivraison: euros(nombre(prix.livraison)),
      arrhes: euros(nombre(prix.arrhes)),
      resteAPayer: euros(reste),
      modePaiement: paiement,
      caution: cautionMode === "cheque"
        ? `Chèque non encaissé n° ${v("chequeNumero") || "—"} (${montantCaution} €)`
        : `Carte bancaire via Stripe (${montantCaution} €), débitée puis remboursée après récupération`,
      demandeExecution: type === "Particulier" && !!f.get("execution"),
      etatLivraison: etats,
      observations: v("observations"),
      lieu: v("lieu"),
      signatureLocataire: sigLocataire as Signature,
      signatureLoueur: sigLoueur ?? undefined,
    };

    try {
      const pdf = genererContratPdf(d);
      const nomFichier = `Contrat-${numero}-${d.nom.replace(/[^A-Za-zÀ-ÿ-]/g, "")}.pdf`;
      setFichier(new File([pdf.blob()], nomFichier, { type: "application/pdf" }));
    } catch {
      setErreur("Le PDF n'a pas pu être créé sur ce téléphone. Utilisez le contrat papier et prévenez le loueur.");
      setEnvoi(false);
      return;
    }

    // Copie texte horodatée envoyée au loueur (sans bloquer l'affichage)
    if (SITE.web3formsCle) {
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: SITE.web3formsCle,
          subject: `Contrat signé ${numero} — ${d.prenom} ${d.nom}`,
          from_name: "Contrat LocationClim45",
          "N° contrat": numero,
          "Signé le": signeLe,
          Locataire: `${d.prenom} ${d.nom} (${d.type}${d.societe ? ` — ${d.societe}` : ""})`,
          Adresse: d.adresse,
          Téléphone: d.telephone,
          "E-mail": d.email || "—",
          Appareils: appareils.map(a => `${a.numero || "?"} : ${a.modele}`).join(" / "),
          Période: `du ${d.dateLivraison} au ${d.dateRecuperation}`,
          Prix: `location ${d.prixLocation} € + livraison ${d.prixLivraison} € − arrhes ${d.arrhes} € = ${d.resteAPayer} € (${d.modePaiement})`,
          Caution: d.caution,
          "Demande d'exécution immédiate": d.type === "Particulier" ? (d.demandeExecution ? "oui" : "non") : "sans objet",
          "État à la livraison": etats.join(", ") || "—",
          Observations: d.observations || "—",
        }),
      }).catch(() => {});
    }
    setEnvoi(false);
  }

  async function partager() {
    if (!fichier) return;
    const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
    if (nav.canShare && nav.canShare({ files: [fichier] })) {
      try { await nav.share({ files: [fichier], title: "Contrat de location LocationClim45" }); } catch { /* partage annulé */ }
    } else telecharger();
  }

  function telecharger() {
    if (!fichier) return;
    const url = URL.createObjectURL(fichier);
    const a = document.createElement("a");
    a.href = url;
    a.download = fichier.name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  // ── Styles
  const carte: React.CSSProperties = { background: "#fff", borderRadius: 18, padding: "22px 18px", marginBottom: 16, border: "1px solid #E2E8F0" };
  const titre: React.CSSProperties = { fontSize: 13, fontWeight: 800, color: "#1E40AF", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 14 };
  const lbl: React.CSSProperties = { fontSize: 13, fontWeight: 700, color: "#1E293B", display: "block", marginBottom: 5 };
  const inp: React.CSSProperties = { width: "100%", padding: "12px 14px", border: "1.5px solid #CBD5E1", borderRadius: 10, fontSize: 16, fontFamily: "inherit", color: "#0F172A", background: "#fff", marginBottom: 12 };
  const choix = (actif: boolean): React.CSSProperties => ({ padding: "10px 14px", borderRadius: 50, border: actif ? "2px solid #2563EB" : "1.5px solid #CBD5E1", background: actif ? "#2563EB" : "#fff", color: actif ? "#fff" : "#334155", fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: "inherit" });
  const caseLigne: React.CSSProperties = { display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "#334155", marginBottom: 10, lineHeight: 1.45 };

  if (fichier) {
    return (
      <main style={{ minHeight: "100vh", background: "#F1F5F9", padding: "40px 16px" }}>
        <div style={{ ...carte, maxWidth: 560, margin: "0 auto", textAlign: "center", padding: "36px 22px" }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>✅</div>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: "#0F172A", marginBottom: 8 }}>Contrat signé</h1>
          <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.6, marginBottom: 24 }}>
            Le contrat <strong>{fichier.name}</strong> est prêt. Envoyez-le au client et gardez-en une copie.
          </p>
          <button type="button" onClick={partager} style={{ width: "100%", padding: 16, borderRadius: 50, border: "none", background: "linear-gradient(135deg,#2563EB,#1E40AF)", color: "#fff", fontSize: 16, fontWeight: 800, marginBottom: 12, cursor: "pointer", fontFamily: "inherit" }}>
            📤 Partager le contrat (WhatsApp, e-mail…)
          </button>
          <button type="button" onClick={telecharger} style={{ width: "100%", padding: 14, borderRadius: 50, border: "2px solid #2563EB", background: "#fff", color: "#1D4ED8", fontSize: 15, fontWeight: 800, cursor: "pointer", fontFamily: "inherit" }}>
            ⬇️ Télécharger le PDF
          </button>
          <p style={{ fontSize: 12.5, color: "#64748B", marginTop: 18 }}>
            Ne fermez pas cette page avant d&apos;avoir partagé ou téléchargé le contrat.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "#F1F5F9", padding: "0 0 40px" }}>
      <div style={{ background: "#090E1A", color: "#fff", padding: "22px 18px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{ fontSize: 20, fontWeight: 800 }}>Location<span style={{ color: "#38BDF8" }}>Clim</span><span style={{ color: "#94A3B8" }}>45</span></div>
          <h1 style={{ fontSize: 22, fontWeight: 800, marginTop: 10 }}>Contrat de location</h1>
          <p style={{ fontSize: 13, color: "#CBD5E1", marginTop: 4 }}>{SITE.exploitant} — EI · SIRET {SITE.siret} · {SITE.telephoneAffiche}</p>
        </div>
      </div>

      <form onSubmit={soumettre} noValidate style={{ maxWidth: 640, margin: "0 auto", padding: "18px 14px 0" }}>
        {/* 1. Locataire */}
        <section style={carte}>
          <div style={titre}>1. Locataire</div>
          <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
            {(["Particulier", "Professionnel"] as const).map(t => (
              <button key={t} type="button" onClick={() => setType(t)} style={choix(type === t)} aria-pressed={type === t}>{t}</button>
            ))}
          </div>
          {type === "Professionnel" && (
            <>
              <label style={lbl} htmlFor="societe">Société *</label><input style={inp} id="societe" name="societe" autoComplete="organization" />
              <label style={lbl} htmlFor="siretClient">SIRET</label><input style={inp} id="siretClient" name="siretClient" inputMode="numeric" />
            </>
          )}
          <label style={lbl} htmlFor="nom">Nom *</label><input style={inp} id="nom" name="nom" autoComplete="family-name" />
          <label style={lbl} htmlFor="prenom">Prénom *</label><input style={inp} id="prenom" name="prenom" autoComplete="given-name" />
          <label style={lbl} htmlFor="adresse">Adresse *</label><input style={inp} id="adresse" name="adresse" autoComplete="street-address" />
          <label style={lbl} htmlFor="telephone">Téléphone *</label><input style={inp} id="telephone" name="telephone" type="tel" inputMode="tel" autoComplete="tel" />
          <label style={lbl} htmlFor="email">E-mail (facultatif)</label><input style={{ ...inp, marginBottom: 0 }} id="email" name="email" type="email" autoComplete="email" />
        </section>

        {/* 2. Matériel */}
        <section style={carte}>
          <div style={titre}>2. Matériel loué</div>
          {appareils.map((a, i) => (
            <div key={i} style={{ display: "flex", gap: 10 }}>
              <div style={{ width: 100, flexShrink: 0 }}>
                <label style={lbl} htmlFor={`num${i}`}>N° appareil</label>
                <input style={inp} id={`num${i}`} value={a.numero} placeholder="C1" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAppareils(appareils.map((x, j) => j === i ? { ...x, numero: e.target.value } : x))} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <label style={lbl} htmlFor={`mod${i}`}>Modèle</label>
                <select style={inp} id={`mod${i}`} value={a.modele} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAppareils(appareils.map((x, j) => j === i ? { ...x, modele: e.target.value } : x))}>
                  {MODELES.map(m => <option key={m}>{m}</option>)}
                </select>
              </div>
            </div>
          ))}
          <div style={{ display: "flex", gap: 14 }}>
            <button type="button" onClick={() => setAppareils([...appareils, { numero: "", modele: MODELES[0] ?? "" }])} style={{ background: "none", border: "none", color: "#1D4ED8", fontWeight: 700, fontSize: 14, cursor: "pointer", padding: 0, fontFamily: "inherit" }}>+ Ajouter un appareil</button>
            {appareils.length > 1 && <button type="button" onClick={() => setAppareils(appareils.slice(0, -1))} style={{ background: "none", border: "none", color: "#B91C1C", fontWeight: 700, fontSize: 14, cursor: "pointer", padding: 0, fontFamily: "inherit" }}>− Retirer</button>}
          </div>
        </section>

        {/* 3. Durée */}
        <section style={carte}>
          <div style={titre}>3. Durée</div>
          <label style={lbl} htmlFor="dateLivraison">Livraison le *</label><input style={inp} id="dateLivraison" name="dateLivraison" type="date" />
          <label style={lbl} htmlFor="dateRecuperation">Récupération prévue le *</label><input style={{ ...inp, marginBottom: 6 }} id="dateRecuperation" name="dateRecuperation" type="date" />
          <p style={{ fontSize: 12.5, color: "#64748B" }}>Minimum 3 jours. Toute journée commencée est due.</p>
        </section>

        {/* 4. Prix */}
        <section style={carte}>
          <div style={titre}>4. Prix et paiement</div>
          <label style={lbl} htmlFor="pl">Location, installation incluse (€) *</label>
          <input style={inp} id="pl" inputMode="decimal" placeholder="74 · 134 · 384 par appareil" value={prix.location} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrix({ ...prix, location: e.target.value })} />
          <label style={lbl} htmlFor="pv">Livraison et récupération (€)</label>
          <input style={inp} id="pv" inputMode="decimal" value={prix.livraison} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrix({ ...prix, livraison: e.target.value })} />
          <label style={lbl} htmlFor="pa">Arrhes déjà versées (€)</label>
          <input style={inp} id="pa" inputMode="decimal" placeholder="0" value={prix.arrhes} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrix({ ...prix, arrhes: e.target.value })} />
          <div style={{ background: "#F1F5F9", borderRadius: 10, padding: "12px 14px", fontSize: 15, fontWeight: 800, color: "#0F172A", marginBottom: 14 }}>Reste à payer : {euros(reste)} €</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Chèque", "Virement instantané", "Sur facture (professionnel)"].map(m => (
              <button key={m} type="button" onClick={() => setPaiement(m)} style={choix(paiement === m)} aria-pressed={paiement === m}>{m}</button>
            ))}
          </div>
        </section>

        {/* 5. Caution */}
        <section style={carte}>
          <div style={titre}>5. Caution — {CAUTION_PAR_APPAREIL * appareils.length} €</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            <button type="button" onClick={() => setCautionMode("cheque")} style={choix(cautionMode === "cheque")} aria-pressed={cautionMode === "cheque"}>Chèque non encaissé</button>
            <button type="button" onClick={() => setCautionMode("stripe")} style={choix(cautionMode === "stripe")} aria-pressed={cautionMode === "stripe"}>Carte (Stripe)</button>
          </div>
          {cautionMode === "cheque"
            ? <><label style={lbl} htmlFor="chequeNumero">N° du chèque</label><input style={{ ...inp, marginBottom: 0 }} id="chequeNumero" name="chequeNumero" inputMode="numeric" /></>
            : <p style={{ fontSize: 13, color: "#475569" }}>Montant débité puis remboursé après récupération (délai bancaire de 5 à 10 jours ouvrés).</p>}
        </section>

        {/* 6. Conditions */}
        <section style={carte}>
          <div style={titre}>6. Conditions essentielles</div>
          {CONDITIONS.map(([t, c]) => (
            <p key={t} style={{ fontSize: 13.5, color: "#334155", lineHeight: 1.55, marginBottom: 10 }}><strong style={{ color: "#0F172A" }}>{t}.</strong> {c}</p>
          ))}
          <p style={{ fontSize: 13.5 }}>Conditions complètes : <a href="/cgv" target="_blank" rel="noopener" style={{ color: "#1D4ED8", fontWeight: 700 }}>locationclim45.fr/cgv</a></p>
        </section>

        {/* 7. Rétractation */}
        {type === "Particulier" && (
          <section style={carte}>
            <div style={titre}>7. Droit de rétractation</div>
            <p style={{ fontSize: 13.5, color: "#334155", lineHeight: 1.55, marginBottom: 12 }}>Le contrat étant conclu à distance ou à domicile, vous disposez de 14 jours pour vous rétracter (formulaire disponible dans les CGV, ou par e-mail à {SITE.email}).</p>
            <label style={caseLigne}><input type="checkbox" name="execution" style={{ width: 20, height: 20, flexShrink: 0, marginTop: 1 }} /><span><strong>Je demande que la location commence dès la livraison</strong>, avant la fin du délai de 14 jours. En cas de rétractation, je paierai la part de location déjà effectuée.</span></label>
          </section>
        )}

        {/* 8. État des lieux */}
        <section style={carte}>
          <div style={titre}>8. État des lieux à la livraison</div>
          {ETATS.map(e => (
            <label key={e} style={caseLigne}>
              <input type="checkbox" checked={etats.includes(e)} onChange={() => setEtats(etats.includes(e) ? etats.filter(x => x !== e) : [...etats, e])} style={{ width: 20, height: 20, flexShrink: 0 }} />
              <span>{e}</span>
            </label>
          ))}
          <label style={lbl} htmlFor="observations">Observations</label>
          <textarea style={{ ...inp, minHeight: 70, marginBottom: 0 }} id="observations" name="observations" />
        </section>

        {/* 9. Signatures */}
        <section style={carte}>
          <div style={titre}>9. Signatures</div>
          <label style={lbl} htmlFor="lieu">Fait à</label><input style={inp} id="lieu" name="lieu" placeholder="Commune" />
          <label style={{ ...caseLigne, marginBottom: 16 }}>
            <input type="checkbox" name="cgv" style={{ width: 20, height: 20, flexShrink: 0, marginTop: 1 }} />
            <span>J&apos;ai pris connaissance des <a href="/cgv" target="_blank" rel="noopener" style={{ color: "#1D4ED8", fontWeight: 700 }}>conditions générales de vente</a> et je les accepte. Lu et approuvé. *</span>
          </label>
          <div style={{ marginBottom: 18 }}><SignaturePad label="Signature du locataire *" onChange={setSigLocataire} /></div>
          <SignaturePad label="Signature du loueur" onChange={setSigLoueur} />
        </section>

        {erreur && <div role="alert" style={{ background: "#FEF2F2", border: "1px solid #FECACA", color: "#991B1B", borderRadius: 12, padding: "12px 14px", fontSize: 14, marginBottom: 14 }}>{erreur}</div>}

        <button type="submit" disabled={envoi} style={{ width: "100%", padding: 17, borderRadius: 50, border: "none", background: "linear-gradient(135deg,#2563EB,#1E40AF)", color: "#fff", fontSize: 16, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 20px rgba(37,99,235,0.35)", fontFamily: "inherit" }}>
          {envoi ? "Création du contrat…" : "✍️ Signer et créer le contrat"}
        </button>
        <p style={{ fontSize: 12, color: "#64748B", textAlign: "center", marginTop: 12 }}>Un PDF du contrat est créé sur ce téléphone, à partager avec le client.</p>
      </form>
    </main>
  );
}
