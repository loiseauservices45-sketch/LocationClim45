import type { Metadata } from "next";
import AvisClients from "@/components/AvisClients";
import ZoneLivraison from "@/components/ZoneLivraison";
import {
  PageGivre, DuoBoutons, Confiance, CartePhoto, TitreSection, CartesIcones, RAISONS,
  CartesModeles, Forfaits, NOTE_TARIFS, BandePro, Etapes, FAQ, FAQ_GENERALE, AppelFinal,
} from "@/components/Sections";

export const metadata: Metadata = {
  title: "Location Climatiseur Orléans & Loiret — Installation incluse",
  description: "Location de climatiseur mobile à Orléans et dans le Loiret, pour particuliers et professionnels. Installation et mise en service incluses, livraison sur devis.",
};

export default function Home() {
  return (
    <PageGivre givre>
      {/* ===== 1. ACCUEIL ===== */}
      <section className="lc-section lc-hero">
        <div className="lc-hero-grille">
          <div>
            <p className="lc-pastille-lieu"><span />Orléans &amp; Loiret (45)</p>
            <h1 className="lc-h1">La fraîcheur,<br /><span style={{ color: "#BAE6FD" }}>livrée chez vous</span><br />en 24 h.</h1>
            <p className="lc-intro">Location de climatiseurs mobiles, livrés, installés et récupérés chez vous. Pour les particuliers et les professionnels.</p>
            <DuoBoutons />
            <Confiance />
          </div>
          <div className="lc-hero-photo"><CartePhoto /></div>
        </div>
      </section>

      {/* ===== 2. POURQUOI NOUS + 2 AVIS ===== */}
      <section className="lc-section">
        <div className="lc-conteneur">
          <TitreSection etiquette="Pourquoi LocationClim45" titre="Simple. Rapide. Fiable." chapeau="Vous n'avez rien à porter, rien à installer, rien à bricoler." />
          <CartesIcones cartes={RAISONS} />
          <div style={{ marginTop: 64 }}>
            <AvisClients debut={0} fin={2} etiquette="Ce que nos clients en disent" />
          </div>
        </div>
      </section>

      {/* ===== 3. CLIMATISEURS + TARIFS (destination du bouton fraîcheur) ===== */}
      <section id="tarifs" className="lc-section">
        <div className="lc-conteneur lc-etroit">
          <TitreSection etiquette="Nos climatiseurs et nos forfaits" titre="Des tarifs clairs, sans surprise." chapeau="Deux modèles, un seul prix. Nous vous conseillons le bon selon la taille de votre pièce." />
          <CartesModeles />
          <Forfaits />
          <p className="lc-note">{NOTE_TARIFS}</p>
          <BandePro />
        </div>
      </section>

      {/* ===== 4. COMMENT ÇA MARCHE ===== */}
      <Etapes />

      {/* ===== 5. ZONE DE LIVRAISON ===== */}
      <ZoneLivraison fond="transparent" />

      {/* ===== 6. AVIS (2 suivants) ===== */}
      <section className="lc-section">
        <div className="lc-conteneur lc-etroit">
          <h2 className="lc-h2 lc-h2-moyen" style={{ textAlign: "center", marginBottom: 40 }}>Ils nous font confiance</h2>
          <AvisClients debut={2} fin={4} lienGoogle />
        </div>
      </section>

      {/* ===== 7. QUESTIONS FRÉQUENTES ===== */}
      <FAQ items={FAQ_GENERALE} />

      {/* ===== 8. APPEL FINAL ===== */}
      <AppelFinal />
    </PageGivre>
  );
}
