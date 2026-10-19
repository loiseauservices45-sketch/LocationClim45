// ─────────────────────────────────────────────────────────────
// CATALOGUE — un bloc par modèle. Pour ajouter / retirer un modèle,
// il suffit de modifier cette liste : la page /climatiseurs se met à jour.
// Ne mettre que des caractéristiques vérifiées sur la notice.
// ─────────────────────────────────────────────────────────────

export type Photo = {
  src: string;      // chemin dans /public (ex. "/images/xxx.webp")
  alt: string;      // description pour Google et l'accessibilité
  largeur: number;
  hauteur: number;
};

export type Modele = {
  id: string;
  gamme: string;          // ex. "Modèle Essentiel"
  nom: string;            // ex. "Carrera / Tristar"
  puissance: string;      // ex. "7 000 BTU"
  accroche: string;       // une phrase sous le nom
  points: string[];       // pastilles courtes (puissance, surface…)
  atouts: string[];       // liste à coches
  prixAPartirDe: string;  // ex. "74 €"
  prixPeriode: string;    // ex. "pour 3 jours"
  etiquetteVisuel: string; // texte écrit sur l'illustration (si pas de photo)
  photo?: Photo;          // vraie photo : remplace l'illustration quand elle est renseignée
  style: "clair" | "sombre";
};

export const CLIMATISEURS: Modele[] = [
  {
    id: "essentiel",
    gamme: "Modèle Essentiel",
    nom: "Carrera / Tristar",
    puissance: "7 000 BTU",
    accroche: "Idéal pour les pièces de 15 à 25 m² — efficace et prêt à l'emploi.",
    points: ["❄️ 7 000 BTU", "📐 Jusqu'à 25 m²", "🔌 Prise standard"],
    atouts: [
      "Installation sans travaux — une fenêtre suffit",
      "3 modes : climatisation, ventilation, déshumidification",
      "Télécommande incluse, programmation 24h",
      "Roues de déplacement intégrées",
      "Testé, nettoyé et désinfecté avant chaque location",
    ],
    prixAPartirDe: "74 €",
    prixPeriode: "pour 3 jours",
    etiquetteVisuel: "ESSENTIEL",
    photo: {
      src: "/images/climatiseur-carrera-tristar.webp",
      alt: "Climatiseur mobile Carrera 7 000 BTU blanc avec sa télécommande, en location à Orléans",
      largeur: 900,
      hauteur: 1368,
    },
    style: "clair",
  },
  {
    id: "confort",
    gamme: "Modèle Confort",
    nom: "Garvee",
    puissance: "9 000 BTU",
    accroche: "Plus de puissance pour les pièces de 20 à 30 m² ou très exposées au soleil.",
    // Surface indicative pour un 9 000 BTU (à ajuster si la notice indique autre chose).
    points: ["❄️ 9 000 BTU", "📐 20 à 30 m²", "🔌 Prise standard"],
    atouts: [
      "Installation sans travaux — une fenêtre suffit",
      "Télécommande incluse",
      "Testé, nettoyé et désinfecté avant chaque location",
    ],
    prixAPartirDe: "74 €",
    prixPeriode: "pour 3 jours",
    etiquetteVisuel: "CONFORT",
    // photo: { src: "/images/climatiseur-garvee.webp", alt: "…", largeur: 900, hauteur: 1200 },
    style: "sombre",
  },
];
