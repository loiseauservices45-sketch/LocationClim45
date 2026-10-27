import type { Metadata } from "next";
import AvisClients from "@/components/AvisClients";
import { PageGivre, EntetePage, DuoBoutons, Confiance, CartePhoto, TitreSection, CartesIcones, CartesModeles, Forfaits, NOTE_TARIFS, Etapes, FAQ, FAQ_GENERALE, AppelFinal } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Location Climatiseur Particuliers — Orléans & Loiret",
  description: "Location climatiseur mobile pour particuliers à Orléans. Livraison à domicile sous 24h, installation incluse, sans travaux. Idéal canicule.",
};

export default function Particuliers() {
  return (
    <PageGivre givre bandeau="Particuliers · Livraison à domicile, Orléans & Loiret">
      <EntetePage
        etiquette="Pour les particuliers · Orléans & Loiret"
        titre={<>Retrouvez la fraîcheur<br /><span style={{ color: "#BAE6FD" }}>chez vous, dès demain.</span></>}
        intro="Pas d'achat, pas de travaux. On livre, on installe, on récupère. Vous profitez de la fraîcheur, c'est tout."
        aside={<CartePhoto src="/images/climatiseur-garvee-9000btu.webp" alt="Climatiseur mobile Garvee installé chez un particulier, en location à Orléans" />}
      >
        <DuoBoutons />
        <Confiance elements={["Maison & appartement", "Sans travaux"]} />
      </EntetePage>

      {/* SITUATIONS */}
      <section className="lc-section">
        <div className="lc-conteneur lc-etroit">
          <TitreSection etiquette="Vous vous reconnaissez ?" titre="La chaleur gâche votre quotidien." />
          <CartesIcones colonnes={3} cartes={[
            { icone: "thermometre", titre: "Appartement étouffant", texte: "Sous les toits ou exposé plein sud, dormir devient un défi dès que les 30 °C sont dépassés." },
            { icone: "ordinateur", titre: "Télétravail inconfortable", texte: "Impossible de se concentrer quand il fait 35 °C dans votre bureau à la maison." },
            { icone: "lune", titre: "Nuits impossibles", texte: "La chambre accumule la chaleur, les enfants sont agités, le sommeil est haché." },
            { icone: "famille", titre: "Famille à protéger", texte: "Bébés, personnes âgées : certains membres du foyer supportent très mal la chaleur." },
            { icone: "maison", titre: "Maison sous les combles", texte: "La chaleur s'accumule toute la journée et reste la nuit." },
            { icone: "coeur", titre: "Personnes fragiles", texte: "Pendant les canicules, une pièce rafraîchie aide à mieux traverser les fortes chaleurs." },
          ]} />
        </div>
      </section>

      {/* LA SOLUTION + AVIS */}
      <section className="lc-section">
        <div className="lc-conteneur lc-etroit">
          <TitreSection etiquette="La solution" titre="Un appel. Le lendemain, vous êtes au frais." />
          <CartesIcones colonnes={3} cartes={[
            { icone: "eclair", titre: "Rapide", texte: "Livraison possible sous 24 h selon les disponibilités. En canicule, chaque heure compte." },
            { icone: "cle", titre: "Simple", texte: "On installe, on vous explique, on repart. Vous n'avez rien à faire." },
            { icone: "euro", titre: "Économique", texte: "Pas d'appareil à acheter : vous payez seulement la durée dont vous avez besoin." },
          ]} />
          <div style={{ marginTop: 64 }}>
            <AvisClients debut={0} fin={2} etiquette="Ce que nos clients en disent" lienGoogle />
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="lc-section">
        <div className="lc-conteneur lc-etroit">
          <TitreSection etiquette="Nos climatiseurs et nos forfaits" titre="Des tarifs clairs, sans surprise." chapeau="Deux modèles, un seul prix. Nous vous conseillons le bon selon la taille de votre pièce." />
          <CartesModeles />
          <Forfaits />
          <p className="lc-note">{NOTE_TARIFS}</p>
        </div>
      </section>

      <Etapes etiquette="En 4 étapes" titre="Simple comme un appel." />
      <FAQ items={FAQ_GENERALE.slice(0, 5)} />
      <AppelFinal titre="Prêt à retrouver la fraîcheur chez vous ?" />
    </PageGivre>
  );
}
