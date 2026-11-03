// ─────────────────────────────────────────────────────────────
// DÉSHUMIDIFICATEURS — réglages de la page /location-deshumidificateur.
// Modifier ici les noms, caractéristiques, prix et cautions :
// la page se met à jour toute seule.
//
// Prix validés par le gérant (28 oct. et 2 nov. 2026).
// ⚠ Caractéristiques à remplacer par celles des appareils réellement achetés.
// ─────────────────────────────────────────────────────────────

export type PrixDeshu = { duree: string; prix: string };

export type ModeleDeshu = {
  id: string;
  etiquette: string;       // pastille au-dessus du nom
  nom: string;             // ex. « Déshumidificateur maison »
  capacite: string;        // ex. « 20 à 30 L / jour »
  pourQui: string;         // une phrase
  points: string[];        // liste à coches
  prix: PrixDeshu[];       // 3 durées, celle du milieu mise en avant
  caution: string;
  complement?: string;     // phrase en plus sous les prix (facultatif)
  photo?: { src: string; alt: string; largeur: number; hauteur: number }; // à ajouter après l'achat
};

export const DESHUMIDIFICATEURS: ModeleDeshu[] = [
  {
    id: "maison",
    etiquette: "PARTICULIERS",
    nom: "Déshumidificateur maison",
    capacite: "20 à 30 L / jour",
    pourQui: "Pour une pièce humide, une chambre, une buanderie ou une petite cave.",
    points: [
      "Livré, installé et réglé chez vous",
      "Discret, adapté aux pièces à vivre",
      "Réglage du taux d'humidité souhaité",
      "Arrêt automatique quand le bac est plein",
    ],
    prix: [
      { duree: "1 semaine", prix: "89 €" },
      { duree: "2 semaines", prix: "149 €" },
      { duree: "1 mois", prix: "199 €" },
    ],
    caution: "150 €",
  },
  {
    id: "pro",
    etiquette: "GROS VOLUMES · PROS",
    nom: "Déshumidificateur professionnel",
    capacite: "Jusqu'à 50 L / jour",
    pourQui: "Pour un dégât des eaux, un chantier, un logement très humide ou de grands locaux.",
    points: [
      "Matériel professionnel, plus puissant qu'en magasin",
      "Évacuation de l'eau en continu, sans bac à vider",
      "Sur roulettes, installé et réglé par nos soins",
      "Facture professionnelle sur demande",
    ],
    prix: [
      { duree: "3 jours", prix: "99 €" },
      { duree: "1 semaine", prix: "164 €" },
      { duree: "1 mois", prix: "449 €" },
    ],
    caution: "300 €",
    complement: "Plusieurs appareils ? Tarif sur devis pour les artisans, agences immobilières et syndics.",
  },
];

// Offre de lancement (à retirer ou modifier ici quand elle se termine).
export const OFFRE_DESHU = {
  active: true,
  bandeau: "Offre de lancement : livraison et récupération offertes pour 1 mois de location · jusqu'à 25 km de La Ferté-Saint-Aubin",
  tuile: "aller-retour offert",        // petite mention sous le prix « 1 mois » (livraison + récupération)
  detail: "Offre de lancement : livraison et récupération offertes pour une location d'un mois, jusqu'à 25 km de La Ferté-Saint-Aubin (jusqu'au centre d'Orléans). Valable uniquement sur la formule 1 mois.",
};
