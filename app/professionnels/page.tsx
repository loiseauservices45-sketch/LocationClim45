import type { Metadata } from "next";
import Link from "next/link";
import Icone from "@/components/Icones";
import { PageGivre, TitreSection, CartesIcones, CartesModeles, Forfaits, type Forfait, Etapes, FAQ, AppelFinal } from "@/components/Sections";
import { SITE, TEXTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Location Climatiseur Professionnel — Bureaux, Commerces, Événements Orléans",
  description: "Location climatiseur mobile pour professionnels à Orléans. Bureaux, commerces, restaurants, événements. Installation incluse, facture professionnelle, devis sur mesure.",
};

const FORFAITS_PRO: Forfait[] = [
  { nom: "Courte durée", prix: "74 €", duree: "3 jours minimum, par appareil", bouton: "Nous appeler", inclus: [TEXTES.installation, TEXTES.livraisonCourt, "Facture professionnelle"] },
  { nom: "Semaine pro", prix: "134 €", duree: "7 jours, par appareil", bouton: "Nous appeler", vedette: true, badge: "Le plus demandé", inclus: [TEXTES.installation, TEXTES.livraisonCourt, "Facture professionnelle", "Support 7j/7"] },
  { nom: "Longue durée", prix: "Sur devis", duree: "plusieurs appareils ou plusieurs semaines", bouton: "Demander un devis", lien: "/contact", inclus: [TEXTES.installation, "Plusieurs appareils possibles", "Facture professionnelle", "Tarif adapté à la durée"] },
];

const SECTEURS = ["Bureaux", "Commerces", "Laboratoires", "Ateliers", "Événements", "Chantiers"];

export default function Professionnels() {
  return (
    <PageGivre bandeau="Professionnels · Devis gratuit · Orléans & Loiret">
      {/* HAUT DE PAGE : le bloc professionnel complet */}
      <section className="lc-section lc-hero lc-hero-centre">
        <div className="lc-conteneur lc-etroit" style={{ textAlign: "center" }}>
          <p className="lc-pastille-lieu"><span />Professionnels · Orléans &amp; Loiret</p>
          <h1 className="lc-h1 lc-h1-page">La climatisation temporaire<br /><span style={{ color: "#BAE6FD" }}>pour vos locaux.</span></h1>
          <p className="lc-intro" style={{ margin: "0 auto 40px", maxWidth: 640 }}>Un seul interlocuteur, du devis à la récupération. Nous livrons, installons et reprenons le matériel.</p>

          <div className="lc-g3 lc-g3-cartes" style={{ textAlign: "left", marginBottom: 30 }}>
            {[
              { icone: "appareils" as const, titre: "Plusieurs appareils", texte: "Pour équiper plusieurs pièces ou tout un site, avec un seul devis et une seule livraison." },
              { icone: "document" as const, titre: "Facture professionnelle", texte: "Devis et facture au nom de votre entreprise, contrat de location écrit." },
              { icone: "calendrier" as const, titre: "Courte ou longue durée", texte: "De quelques jours à plusieurs mois, avec un tarif adapté à la durée." },
            ].map(c => (
              <div key={c.titre} className="lc-glace lc-raison">
                <div className="lc-rond-icone"><Icone nom={c.icone} taille={28} couleur="#0369A1" /></div>
                <h3>{c.titre}</h3>
                <p>{c.texte}</p>
              </div>
            ))}
          </div>

          <div className="lc-secteurs">{SECTEURS.map(s => <span key={s}>{s}</span>)}</div>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="lc-bouton-glace lc-bouton-grand">Demander un devis professionnel</Link>
            <a href={SITE.telephoneLien} className="lc-bouton-ciel"><Icone nom="telephone" taille={20} epaisseur={2.2} />&nbsp;{SITE.telephoneAffiche}</a>
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="lc-section">
        <div className="lc-conteneur lc-etroit">
          <TitreSection etiquette="Pour qui ?" titre="On s'adapte à votre activité." chapeau="Quelle que soit votre activité, on s'organise selon vos contraintes et votre planning." />
          <CartesIcones colonnes={3} cartes={[
            { icone: "immeuble", titre: "Bureaux & open-spaces", texte: "Des équipes au frais restent concentrées. On installe rapidement, sans perturber votre activité." },
            { icone: "boutique", titre: "Restaurants & commerces", texte: "Vos clients restent plus longtemps dans un espace agréable." },
            { icone: "chapiteau", titre: "Événements & salons", texte: "Salle de réception, stand, chapiteau : on livre et on récupère selon votre planning." },
            { icone: "casque", titre: "Chantiers & ateliers", texte: "Postes de travail, locaux de chantier, ateliers : une solution temporaire et mobile." },
            { icone: "ecole", titre: "Écoles & collectivités", texte: "Salles de classe, bureaux administratifs : sans engagement de longue durée." },
            { icone: "coeur", titre: "Santé & bien-être", texte: "Cabinets, salons, studios : le confort de vos patients et clients." },
          ]} />
        </div>
      </section>

      {/* LOUER OU ACHETER */}
      <section className="lc-section">
        <div className="lc-conteneur lc-etroit">
          <TitreSection etiquette="Louer plutôt qu'acheter" titre="Un choix évident pour les pros." />
          <div className="lc-g2 lc-comparatif">
            <div className="lc-glace lc-compar">
              <span className="lc-compar-badge"><Icone nom="coche" taille={16} epaisseur={2.6} /> Location LocationClim45</span>
              <h3>Flexible et simple</h3>
              <ul>
                {["Aucun investissement de départ", "Installation et mise en service incluses", "Durée sur mesure : de 3 jours à plusieurs mois", "Appareils entretenus entre chaque location", "Rien à stocker hors saison", "Facture professionnelle fournie"].map(f => (
                  <li key={f}><Icone nom="coche" taille={18} couleur="#0284C7" epaisseur={2.6} />{f}</li>
                ))}
              </ul>
            </div>
            <div className="lc-compar lc-compar-sombre">
              <span className="lc-compar-badge lc-compar-badge-gris"><Icone nom="croix" taille={16} epaisseur={2.4} /> Achat</span>
              <h3>Contraignant</h3>
              <ul>
                {["Achat de l'appareil à prévoir", "Installation à votre charge", "Entretien et pannes à gérer", "Appareil inutilisé la plus grande partie de l'année", "Stockage hors saison", "Revente difficile"].map(f => (
                  <li key={f}><Icone nom="croix" taille={18} couleur="#94A3B8" epaisseur={2.2} />{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS PROS */}
      <section id="tarifs" className="lc-section">
        <div className="lc-conteneur lc-etroit">
          <TitreSection etiquette="Tarifs professionnels" titre="Des forfaits clairs, des devis sur mesure." chapeau="Prix par appareil. Pour plusieurs appareils ou une longue durée, nous établissons un devis adapté." />
          <CartesModeles />
          <Forfaits forfaits={FORFAITS_PRO} />
          <p className="lc-note">{TEXTES.livraison} — précisée dans votre devis · {TEXTES.caution}</p>
        </div>
      </section>

      <Etapes etapes={[
        { titre: "Vous nous appelez", texte: "Ou vous remplissez le formulaire : nombre d'appareils, lieu, dates." },
        { titre: "On vous envoie un devis", texte: "Prix des appareils, de la livraison et durée, noir sur blanc." },
        { titre: "Livraison et installation", texte: "On installe et on met en service sur votre site." },
        { titre: "Récupération", texte: "En fin de location, on reprend tout. Facture professionnelle fournie." },
      ]} />

      <FAQ titre="Questions des professionnels" items={[
        { q: "Pouvez-vous équiper plusieurs pièces ou plusieurs sites ?", a: "Oui. Indiquez-nous le nombre de pièces et leur surface : nous vous proposons le nombre d'appareils adapté, selon nos disponibilités, dans un seul devis." },
        { q: "Fournissez-vous une facture ?", a: "Oui, une facture professionnelle au nom de votre entreprise est fournie pour chaque location, avec un contrat de location écrit." },
        { q: "Combien coûte la livraison ?", a: TEXTES.livraisonDetail },
        { q: "Faut-il faire des travaux ?", a: "Non. Il suffit d'une fenêtre pour évacuer l'air chaud par la gaine fournie. Nous nous chargeons de l'installation." },
      ]} />

      <AppelFinal titre="Votre activité mérite un air frais." texte="Devis gratuit, livraison sur Orléans et tout le Loiret." />
    </PageGivre>
  );
}
