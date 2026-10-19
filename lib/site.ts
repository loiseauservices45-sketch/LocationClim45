// ─────────────────────────────────────────────────────────────
// RÉGLAGES DU SITE — c'est le seul fichier à modifier pour
// changer le téléphone, l'e-mail ou les textes de livraison/caution.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  nom: "LocationClim45",
  url: "https://www.locationclim45.fr",

  telephoneAffiche: "07 83 80 00 70",
  telephoneLien: "tel:0783800070",
  whatsappLien: "https://wa.me/33783800070",
  email: "loiseau.services45@gmail.com",

  // Clé Web3Forms (formulaire de devis). Elle s'obtient gratuitement sur
  // https://web3forms.com en indiquant l'adresse e-mail qui doit recevoir
  // les demandes. Cette clé est publique par conception : elle peut être
  // visible dans le code sans risque.
  // Tant qu'elle est vide, le formulaire garde l'ancien fonctionnement
  // (ouverture de la messagerie du visiteur).
  web3formsCle: "",

  // Lien vers la fiche Google (bouton « Voir tous nos avis sur Google »).
  // Laisser vide pour masquer le bouton.
  lienAvisGoogle: "",
};

// Textes repris sur tout le site : les modifier ici les change partout.
export const TEXTES = {
  installation: "Installation & mise en service incluses",
  livraison: "Livraison & récupération selon la distance et la durée",
  livraisonCourt: "Livraison sur devis",
  livraisonDetail:
    "L'installation et la mise en service sont toujours incluses. La livraison et la récupération sont facturées selon la distance et la durée de location : le montant exact vous est indiqué dans votre devis.",
  caution: "Caution 150 € par appareil — chèque non encaissé ou virement",
  cautionDetail:
    "Une caution de 150 € par appareil est demandée à la livraison, par chèque (non encaissé) ou par virement. Elle vous est restituée après récupération de l'appareil en bon état.",
};
