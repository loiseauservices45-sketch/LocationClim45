// ─────────────────────────────────────────────────────────────
// DÉSHUMIDIFICATEURS — réglages de la page /location-deshumidificateur.
// Modifier ici les noms, caractéristiques, prix et cautions :
// la page se met à jour toute seule.
//
// ⚠ Prix PROVISOIRES (proposition du 28 oct. 2026) : à valider par le gérant.
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
      "Discret, adapté aux pièces à vivre",
      "Réglage du taux d'humidité souhaité",
      "Arrêt automatique quand le bac est plein",
      "Évacuation en continu possible par tuyau",
    ],
    prix: [
      { duree: "1 semaine", prix: "49 €" },
      { duree: "2 semaines", prix: "79 €" },
      { duree: "1 mois", prix: "129 €" },
    ],
    caution: "150 €",
  },
  {
    id: "pro",
    etiquette: "GROS VOLUMES · PROS",
    nom: "Déshumidificateur professionnel",
    capacite: "Jusqu'à 50 L / jour",
    pourQui: "Pour un dégât des eaux, un chantier, un logement très humide ou des locaux jusqu'à 150 m².",
    points: [
      "Matériel professionnel, plus puissant qu'en magasin",
      "Évacuation de l'eau en continu, sans bac à vider",
      "Sur roulettes, installé et réglé par nos soins",
      "Facture professionnelle sur demande",
    ],
    prix: [
      { duree: "3 jours", prix: "89 €" },
      { duree: "1 semaine", prix: "149 €" },
      { duree: "1 mois", prix: "390 €" },
    ],
    caution: "300 €",
  },
];
