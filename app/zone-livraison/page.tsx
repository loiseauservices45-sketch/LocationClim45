import type { Metadata } from "next";
import ZoneLivraison from "@/components/ZoneLivraison";
import Icone from "@/components/Icones";
import { PageGivre, EntetePage, TitreSection, CartesIcones, AppelFinal } from "@/components/Sections";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zone de Livraison Climatiseur — Orléans, La Ferté-Saint-Aubin & Loiret",
  description: "Livraison climatiseur mobile à Orléans, La Ferté-Saint-Aubin, Meung-sur-Loire, Saint-Ay, Ardon, La Source et tout le Loiret. Installation incluse, livraison selon la distance.",
};

export default function PageZoneLivraison() {
  return (
    <PageGivre bandeau="Basé à La Ferté-Saint-Aubin · Orléans & tout le Loiret">
      <EntetePage
        etiquette="Basé à La Ferté-Saint-Aubin · Loiret (45)"
        titre={<>On livre la fraîcheur<br /><span style={{ color: "#BAE6FD" }}>jusqu&apos;à votre porte.</span></>}
        intro="L'installation est toujours incluse. La livraison et la récupération dépendent de la distance et de la durée : le montant exact figure dans votre devis, sans surprise."
      >
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
          <a href="#zones" className="lc-bouton-glace lc-bouton-grand">Vérifier ma commune ↓</a>
          <a href={SITE.telephoneLien} className="lc-bouton-ciel"><Icone nom="telephone" taille={20} epaisseur={2.2} />&nbsp;{SITE.telephoneAffiche}</a>
        </div>
        <div className="lc-chiffres">
          <div><strong>Incluse</strong><span>Installation et mise en service</span></div>
          <div><strong>Sous 24 h</strong><span>Selon les disponibilités</span></div>
          <div><strong>7j/7</strong><span>De 8 h à 20 h</span></div>
        </div>
      </EntetePage>

      <div id="zones"><ZoneLivraison fond="transparent" /></div>

      <section className="lc-section">
        <div className="lc-conteneur lc-etroit">
          <TitreSection etiquette="Nos engagements" titre="Ponctuel, soigné, sans surprise." />
          <CartesIcones colonnes={3} cartes={[
            { icone: "horloge", titre: "Au créneau convenu", texte: "On fixe ensemble un créneau de livraison et on s'y tient." },
            { icone: "telephone", titre: "Un seul interlocuteur", texte: "Vous parlez directement au responsable, du devis à la récupération." },
            { icone: "cle", titre: "Installation soignée", texte: "On installe proprement et on repart en laissant tout en ordre." },
          ]} />
        </div>
      </section>

      <AppelFinal titre="Votre commune n'est pas dans la liste ?" texte="Appelez-nous : nous intervenons souvent au-delà, sur devis." />
    </PageGivre>
  );
}
