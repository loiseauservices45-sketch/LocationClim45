import FormulaireDevis from "@/components/FormulaireDevis";
import Icone from "@/components/Icones";
import { PageGivre, EntetePage, CartesIcones } from "@/components/Sections";
import { SITE } from "@/lib/site";

export default function Contact() {
  const moyens = [
    { icone: "telephone" as const, label: "Téléphone", valeur: SITE.telephoneAffiche, lien: SITE.telephoneLien, sous: "Le plus rapide · 7j/7 de 8 h à 20 h" },
    { icone: "message" as const, label: "WhatsApp", valeur: "Écrire sur WhatsApp", lien: SITE.whatsappLien, sous: "Devis écrit · réponse rapide" },
    { icone: "mail" as const, label: "E-mail", valeur: SITE.email, lien: `mailto:${SITE.email}`, sous: "Réponse dans la journée" },
    { icone: "epingle" as const, label: "Zone d'intervention", valeur: "Orléans & Loiret (45)", lien: null, sous: "Basé à La Ferté-Saint-Aubin" },
  ];
  return (
    <PageGivre bandeau="Ouvert 7j/7 de 8 h à 20 h · Devis gratuit · Installation incluse">
      <EntetePage
        etiquette="Devis gratuit · sans engagement"
        titre={<>Obtenez votre devis<br /><span style={{ color: "#BAE6FD" }}>en quelques minutes.</span></>}
        intro="Le plus rapide : appelez-nous. Vous pouvez aussi remplir le formulaire, nous vous rappelons."
      >
        <div className="lc-g2 lc-duo" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <a href={SITE.telephoneLien} className="lc-gros-bouton lc-gros-appel">
            <span className="lc-gros-titre"><Icone nom="telephone" taille={22} epaisseur={2.2} />Nous appeler</span>
            <span className="lc-gros-sous">{SITE.telephoneAffiche}</span>
          </a>
          <a href="#formulaire" className="lc-gros-bouton lc-gros-fraicheur">
            <span className="lc-gros-titre"><Icone nom="document" taille={22} couleur="#0369A1" epaisseur={2.1} />Remplir le formulaire</span>
            <span className="lc-gros-sous" style={{ color: "#0369A1" }}>En 60 secondes ↓</span>
          </a>
        </div>
      </EntetePage>

      <section id="formulaire" className="lc-section" style={{ paddingTop: 30 }}>
        <div className="lc-contact-grille">
          <div className="lc-glace lc-contact-form"><FormulaireDevis /></div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="lc-carte-nuit">
              <p className="lc-etiquette" style={{ marginBottom: 20 }}>Nous contacter</p>
              {moyens.map(m => (
                <div key={m.label} className="lc-moyen">
                  <span className="lc-moyen-icone"><Icone nom={m.icone} taille={20} couleur="#7DD3FC" /></span>
                  <div>
                    <div className="lc-moyen-label">{m.label}</div>
                    {m.lien ? <a href={m.lien} target={m.lien.startsWith("http") ? "_blank" : undefined} rel="noopener" className="lc-moyen-valeur">{m.valeur}</a> : <div className="lc-moyen-valeur">{m.valeur}</div>}
                    <div className="lc-moyen-sous">{m.sous}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lc-glace" style={{ borderRadius: 22, padding: 26 }}>
              <p className="lc-mini-etiquette" style={{ marginBottom: 14 }}>Horaires</p>
              {[["Lundi — Vendredi", "8 h – 20 h"], ["Samedi", "8 h – 20 h"], ["Dimanche", "8 h – 20 h"]].map(([j, h]) => (
                <div key={j} className="lc-horaire"><span>{j}</span><strong>{h}</strong></div>
              ))}
            </div>

            <div className="lc-carte-nuit">
              <p style={{ fontSize: 17, fontWeight: 800, color: "#F8FAFC", marginBottom: 14 }}>Réservation, paiement et caution</p>
              <ol className="lc-liste-num">
                {["Vous confirmez votre réservation par téléphone", "Nous livrons, installons et mettons en service l'appareil", "Paiement à la livraison et caution de 150 € par appareil (chèque non encaissé ou virement)", "Caution rendue après récupération de l'appareil en bon état"].map((t, i) => (
                  <li key={i}><span>{i + 1}</span>{t}</li>
                ))}
              </ol>
              <p style={{ fontSize: 13.5, color: "#CBD5E1", paddingTop: 12, marginTop: 12, borderTop: "1px solid rgba(186,230,253,.15)" }}>Un contrat de location écrit est signé pour chaque location.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lc-section">
        <div className="lc-conteneur lc-etroit">
          <CartesIcones cartes={[
            { icone: "eclair", titre: "Réponse rapide", texte: "On vous rappelle pour confirmer votre devis." },
            { icone: "camion", titre: "Livraison sous 24 h", texte: "Selon les disponibilités, sur Orléans et le Loiret." },
            { icone: "document", titre: "Contrat clair", texte: "Contrat écrit, caution rendue après récupération." },
            { icone: "epingle", titre: "Prestataire local", texte: "Basé à La Ferté-Saint-Aubin, vous parlez au responsable." },
          ]} />
        </div>
      </section>
    </PageGivre>
  );
}
