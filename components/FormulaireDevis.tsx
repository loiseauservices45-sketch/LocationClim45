"use client";
import { useState } from "react";
import { SITE } from "@/lib/site";

// Formulaire de demande de devis.
// - Envoi direct en un clic via Web3Forms (si la clé est renseignée dans lib/site.ts)
// - Anti-spam : champ piège invisible (les robots le remplissent, pas les humains)
// - Vérification des champs avec messages clairs sous chaque champ
// - Le message « Demande envoyée » ne s'affiche que si l'envoi a réellement réussi

type Champs = { nom: string; phone: string; email: string; commune: string; profil: string; date: string; message: string };
type Erreurs = Partial<Record<keyof Champs, string>>;
type Etat = "saisie" | "envoi" | "envoye" | "messagerie" | "erreur";

const DUREES = ["Week-end (3j)", "1 semaine", "1 mois", "Plus long / sur devis"];

function verifier(c: Champs): Erreurs {
  const e: Erreurs = {};
  if (c.nom.trim().length < 2) e.nom = "Indiquez votre nom.";
  const chiffres = c.phone.replace(/[\s.\-()]/g, "");
  if (!/^(\+33|0033|0)[1-9]\d{8}$/.test(chiffres)) e.phone = "Numéro invalide (ex. 06 12 34 56 78).";
  if (c.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c.email.trim())) e.email = "Adresse e-mail invalide.";
  if (c.commune.trim().length < 2) e.commune = "Indiquez votre commune.";
  if (!c.profil) e.profil = "Choisissez une option.";
  return e;
}

export default function FormulaireDevis() {
  const [duree, setDuree] = useState("1 semaine");
  const [etat, setEtat] = useState<Etat>("saisie");
  const [erreurs, setErreurs] = useState<Erreurs>({});

  async function envoyer(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const f = new FormData(ev.currentTarget);
    const c: Champs = {
      nom: String(f.get("nom") ?? ""),
      phone: String(f.get("phone") ?? ""),
      email: String(f.get("email") ?? ""),
      commune: String(f.get("commune") ?? ""),
      profil: String(f.get("profil") ?? ""),
      date: String(f.get("date") ?? ""),
      message: String(f.get("message") ?? ""),
    };
    const e = verifier(c);
    setErreurs(e);
    if (Object.keys(e).length > 0) {
      const premier = ev.currentTarget.querySelector<HTMLElement>(`#${Object.keys(e)[0]}`);
      premier?.focus();
      return;
    }

    // Champ piège rempli = robot : on fait semblant d'avoir réussi, sans rien envoyer.
    if (f.get("botcheck")) { setEtat("envoye"); return; }

    const recap = [
      `Nom : ${c.nom}`,
      `Téléphone : ${c.phone}`,
      `E-mail : ${c.email || "—"}`,
      `Commune : ${c.commune}`,
      `Profil : ${c.profil}`,
      `Durée : ${duree}`,
      `Date souhaitée : ${c.date || "—"}`,
      `Message : ${c.message || "—"}`,
    ].join("\n");

    // Sans clé Web3Forms : ancien fonctionnement (messagerie du visiteur).
    if (!SITE.web3formsCle) {
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(`Devis LocationClim45 — ${c.nom}`)}&body=${encodeURIComponent(recap)}`;
      setEtat("messagerie");
      return;
    }

    setEtat("envoi");
    try {
      const rep = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: SITE.web3formsCle,
          subject: `Demande de devis — ${c.nom} (${c.commune})`,
          from_name: "Site LocationClim45",
          replyto: c.email || undefined,
          Nom: c.nom,
          Téléphone: c.phone,
          "E-mail": c.email || "—",
          Commune: c.commune,
          Profil: c.profil,
          Durée: duree,
          "Date souhaitée": c.date || "—",
          Message: c.message || "—",
        }),
      });
      const json = await rep.json().catch(() => ({}));
      setEtat(rep.ok && json.success !== false ? "envoye" : "erreur");
    } catch {
      setEtat("erreur");
    }
  }

  const inp = (champ: keyof Champs): React.CSSProperties => ({
    width: "100%", padding: "13px 16px", border: erreurs[champ] ? "1.5px solid #DC2626" : "1.5px solid rgba(37,99,235,0.18)",
    borderRadius: 12, fontFamily: "inherit", fontSize: 16, color: "#1E293B", background: "#fff", outline: "none", transition: "all .2s",
  });
  const lbl: React.CSSProperties = { fontSize: 13, fontWeight: 700, color: "#1E293B", display: "block", marginBottom: 6 };
  const err = (champ: keyof Champs) => erreurs[champ] ? <p id={`${champ}-err`} role="alert" style={{ color: "#B91C1C", fontSize: 12.5, fontWeight: 600, marginTop: 6 }}>{erreurs[champ]}</p> : null;
  const aria = (champ: keyof Champs) => ({ "aria-invalid": !!erreurs[champ], "aria-describedby": erreurs[champ] ? `${champ}-err` : undefined });

  if (etat === "envoye" || etat === "messagerie") {
    return (
      <div style={{ textAlign: "center", padding: "48px 24px" }} aria-live="polite">
        <div aria-hidden="true" style={{ width: 72, height: 72, margin: "0 auto 20px", borderRadius: "50%", background: "#E0F2FE", color: "#0369A1", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34, fontWeight: 800 }}>{etat === "envoye" ? "✓" : "@"}</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#1E293B", marginBottom: 10 }}>
          {etat === "envoye" ? "Demande envoyée !" : "Votre messagerie s'est ouverte"}
        </div>
        <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7, marginBottom: 24 }}>
          {etat === "envoye"
            ? <>Nous vous rappelons rapidement pour confirmer votre devis.<br />Besoin d'une réponse immédiate ?</>
            : <>Pensez à appuyer sur <strong>Envoyer</strong> dans votre messagerie pour que votre demande nous parvienne.<br />Le plus simple reste de nous appeler :</>}
        </p>
        <a href={SITE.telephoneLien} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#2563EB,#1E40AF)", color: "#fff", padding: "14px 28px", borderRadius: 50, fontWeight: 700, fontSize: 15, boxShadow: "0 4px 20px rgba(37,99,235,0.4)" }}>Appeler le {SITE.telephoneAffiche}</a>
      </div>
    );
  }

  return (
    <>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1E293B", letterSpacing: "-0.7px", marginBottom: 6 }}>Demande de devis gratuit</h2>
      <p style={{ fontSize: 14, color: "#475569", marginBottom: 32, lineHeight: 1.6 }}>Remplissez ce formulaire en 60 secondes. Nous vous rappelons rapidement.</p>
      <form onSubmit={envoyer} noValidate>
        {/* Champ piège anti-robots : invisible pour les visiteurs */}
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />

        <div className="lc-form-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div><label style={lbl} htmlFor="nom">Nom complet *</label><input style={inp("nom")} type="text" id="nom" name="nom" autoComplete="name" placeholder="Jean Dupont" {...aria("nom")} />{err("nom")}</div>
          <div><label style={lbl} htmlFor="phone">Téléphone *</label><input style={inp("phone")} type="tel" id="phone" name="phone" autoComplete="tel" inputMode="tel" placeholder="06 00 00 00 00" {...aria("phone")} />{err("phone")}</div>
        </div>
        <div style={{ marginBottom: 16 }}><label style={lbl} htmlFor="email">E-mail</label><input style={inp("email")} type="email" id="email" name="email" autoComplete="email" placeholder="votre@email.fr" {...aria("email")} />{err("email")}</div>
        <div className="lc-form-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div><label style={lbl} htmlFor="commune">Commune *</label><input style={inp("commune")} type="text" id="commune" name="commune" autoComplete="address-level2" placeholder="Ex : Orléans" {...aria("commune")} />{err("commune")}</div>
          <div>
            <label style={lbl} htmlFor="profil">Vous êtes *</label>
            <select defaultValue="" style={{ ...inp("profil"), backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2364748B' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center", paddingRight: 40, appearance: "none" }} id="profil" name="profil" {...aria("profil")}>
              <option value="" disabled>Choisir…</option>
              <option>Particulier</option>
              <option>Professionnel</option>
            </select>
            {err("profil")}
          </div>
        </div>
        <fieldset style={{ border: "none", padding: 0, margin: "0 0 16px" }}>
          <legend style={lbl}>Durée souhaitée</legend>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {DUREES.map(d => (
              <button type="button" key={d} onClick={() => setDuree(d)} aria-pressed={d === duree} style={{ padding: "9px 18px", border: d === duree ? "2px solid #2563EB" : "1.5px solid rgba(37,99,235,0.18)", borderRadius: 50, fontFamily: "inherit", fontSize: 14, fontWeight: 600, color: d === duree ? "#fff" : "#475569", background: d === duree ? "#2563EB" : "#fff", cursor: "pointer", transition: "all .2s" }}>{d}</button>
            ))}
          </div>
        </fieldset>
        <div style={{ marginBottom: 16 }}><label style={lbl} htmlFor="date">Date de début souhaitée</label><input style={inp("date")} type="date" id="date" name="date" /></div>
        <div style={{ marginBottom: 20 }}><label style={lbl} htmlFor="message">Message (optionnel)</label><textarea style={{ ...inp("message"), resize: "vertical", minHeight: 100 }} id="message" name="message" placeholder="Taille de la pièce, nombre d'appareils, étage…" /></div>

        {etat === "erreur" && (
          <div role="alert" style={{ background: "#FEF2F2", border: "1px solid #FECACA", color: "#991B1B", borderRadius: 12, padding: "14px 16px", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
            L'envoi n'a pas abouti. Réessayez dans un instant ou appelez-nous directement au <a href={SITE.telephoneLien} style={{ fontWeight: 800, textDecoration: "underline" }}>{SITE.telephoneAffiche}</a>.
          </div>
        )}

        <button type="submit" disabled={etat === "envoi"} style={{ width: "100%", padding: 17, background: "linear-gradient(135deg,#0B3B66,#1D4ED8)", color: "#fff", border: "none", borderRadius: 50, fontFamily: "inherit", fontSize: 16, fontWeight: 800, cursor: etat === "envoi" ? "wait" : "pointer", opacity: etat === "envoi" ? 0.7 : 1, boxShadow: "0 4px 24px rgba(37,99,235,0.4)", transition: "all .2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
          <span>{etat === "envoi" ? "Envoi en cours…" : "Envoyer ma demande"}</span>
          {etat !== "envoi" && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
        </button>
        <p style={{ fontSize: 12, color: "#64748B", textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>Vos coordonnées servent uniquement à traiter votre demande et ne sont jamais revendues.</p>
      </form>
    </>
  );
}
