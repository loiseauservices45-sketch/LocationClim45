// ─────────────────────────────────────────────────────────────
// AVIS CLIENTS — uniquement de vrais avis, copiés depuis la fiche Google.
// Les 2 premiers s'affichent en haut de la page d'accueil,
// les 2 suivants en bas. Tant que la liste est vide, la section
// ne s'affiche pas.
//
// Modèle à copier pour chaque avis :
//   { nom: "C. G.", etoiles: 5, texte: "Texte exact de l'avis", detail: "Avis Google · mois année" },
// ─────────────────────────────────────────────────────────────

export type Avis = {
  nom: string;
  etoiles: number;
  texte: string;
  detail?: string;
};

// Règle : n'afficher que les deux initiales du client (jamais le nom complet).
export const AVIS: Avis[] = [
  // ── 2 premiers : haut de la page d'accueil
  {
    nom: "C. G.",
    etoiles: 5,
    texte: "Un service vraiment professionnel, compétitif et impeccable, une réactivité impressionnante et un contact avec une personne d'une extrême gentillesse ! À recommander sans aucune hésitation !",
    detail: "Avis Google · août 2026",
  },
  {
    nom: "E. R.",
    etoiles: 5,
    texte: "Je recommande à 100 % cet entrepreneur, service au top ! Quel bonheur de pouvoir louer une clim en période de canicule, plus besoin de faire la queue au magasin !",
    detail: "Avis Google · juillet 2026",
  },
  // ── 2 suivants : bas de la page d'accueil
  {
    nom: "A. J.",
    etoiles: 5,
    texte: "Impeccable. Personne de confiance. Très agréable et très sérieux. Je recommande les yeux fermés.",
    detail: "Avis Google · juillet 2026",
  },
  {
    nom: "Y. S.",
    etoiles: 5,
    texte: "Personne très sympathique, très professionnel, vous pouvez aller les yeux fermés sans soucis.",
    detail: "Avis Google · juin 2026",
  },
];
