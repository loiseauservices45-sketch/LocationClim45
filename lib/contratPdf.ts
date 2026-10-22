import { MiniPdf, largeurTexte } from "@/lib/pdfMini";
import { SITE } from "@/lib/site";

// Données saisies sur la page /contrat
export type Signature = { dataUrl: string; largeur: number; hauteur: number };

export type DonneesContrat = {
  numero: string;
  signeLe: string; // date et heure lisibles
  type: "Particulier" | "Professionnel";
  societe: string;
  siretClient: string;
  nom: string;
  prenom: string;
  adresse: string;
  telephone: string;
  email: string;
  appareils: { numero: string; modele: string }[];
  dateLivraison: string;
  dateRecuperation: string;
  prixLocation: string;
  prixLivraison: string;
  arrhes: string;
  resteAPayer: string;
  modePaiement: string;
  caution: string;
  demandeExecution: boolean;
  etatLivraison: string[];
  observations: string;
  lieu: string;
  signatureLocataire: Signature;
  signatureLoueur?: Signature;
};

// Conditions essentielles : identiques au contrat papier
export const CONDITIONS: [string, string][] = [
  ["Utilisation", "En intérieur uniquement, conformément aux explications données. Interdiction de déplacer l'appareil hors de l'adresse d'installation, de le prêter, de le sous-louer, de l'ouvrir ou de tenter de le réparer. L'appareil reste debout et ses grilles dégagées. La consommation électrique est à la charge du locataire."],
  ["Panne", "Débrancher l'appareil et prévenir le loueur. Assistance téléphonique, intervention ou remplacement selon disponibilités. Les jours non utilisables du fait d'une panne non imputable au locataire ne sont pas facturés."],
  ["Garde et dommages", "Le locataire a la garde du matériel jusqu'à sa récupération. Dommage réparable : coût de la réparation sur justificatif. Appareil irréparable, perdu ou volé : 250 € par climatiseur + forfait d'immobilisation de 74 €. Vol : copie du dépôt de plainte sous 48 h."],
  ["Retard", "Si l'appareil n'est pas disponible à la date de récupération convenue : 25 € par jour de retard, sauf accord du loueur ou retard dû au loueur. Au-delà de 7 jours sans accord ni nouvelles après relance : appareil considéré comme non restitué (250 € + 74 €)."],
  ["Caution", "150 € par appareil. Le chèque est rendu à la récupération si l'appareil est rendu en bon état et complet. Carte bancaire (Stripe) : montant débité puis remboursé après récupération. Retenues possibles sur justificatif ; au-delà de la caution, la différence reste due."],
  ["Annulation", "Réservation plus de 72 h à l'avance : arrhes de 30 %, remboursées si annulation au moins 72 h avant la livraison, conservées en deçà. Si le loueur annule (hors force majeure), il rembourse le double des arrhes."],
  ["Absence", "Si le locataire est absent au créneau convenu sans avoir prévenu au moins 24 h à l'avance, un nouveau déplacement peut être facturé au tarif de la livraison."],
  ["Retour anticipé", "Les jours non utilisés du forfait ne sont pas remboursés, sauf accord du loueur."],
  ["Assurance", "Le loueur dispose d'une RC professionnelle, qui ne couvre pas les dommages causés au matériel par le locataire."],
];

const BLEU = "#1E40AF";
const NUIT = "#090E1A";
const GRIS = "#64748B";

export function genererContratPdf(d: DonneesContrat): MiniPdf {
  const pdf = new MiniPdf();
  const X = 14, L = 182;
  let y = 14;

  const saut = (besoin: number) => {
    if (y + besoin > 283) { pdf.nouvellePage(); y = 16; }
  };
  const titre = (t: string) => {
    saut(14);
    y += 4;
    pdf.texte(X, y, t.toUpperCase(), { taille: 10, gras: true, couleur: BLEU });
    y += 1.6;
    pdf.trait(X, y, X + L, y, "#38BDF8", 0.4);
    y += 5;
  };
  const ligne = (label: string, valeur: string, x = X, largeur = L) => {
    pdf.texte(x, y, label, { taille: 9.5, gras: true });
    const decal = Math.min(62, largeurTexte(label, 9.5, true) + 2.5);
    return pdf.paragraphe(x + decal, y, valeur || "—", largeur - decal, { taille: 9.5 });
  };

  // En-tête
  pdf.rect(X, y, L, 26, NUIT);
  pdf.texte(X + 5, y + 10, "LocationClim45", { taille: 16, gras: true, couleur: "#FFFFFF" });
  pdf.texte(X + 5, y + 17, "Location de climatiseurs mobiles - Orléans & Loiret", { taille: 8.5, couleur: "#CBD5E1" });
  const infos = [
    `${SITE.exploitant} - EI · ${SITE.nom}`,
    `SIRET ${SITE.siret}`,
    "2 rue Édouard Burguières, 45240 La Ferté-Saint-Aubin",
    `${SITE.telephoneAffiche} · ${SITE.email}`,
    "TVA non applicable, art. 293 B du CGI",
  ];
  infos.forEach((t, i) => pdf.texte(X + 105, y + 6 + i * 4, t, { taille: 7.5, couleur: "#E2E8F0", gras: i === 0 }));
  y += 34;

  pdf.texte(X, y, "Contrat de location de climatiseur mobile", { taille: 14, gras: true });
  y += 6;
  y = pdf.paragraphe(X, y, `Contrat n° ${d.numero} · Signé électroniquement le ${d.signeLe}${d.lieu ? ` à ${d.lieu}` : ""}. Le présent contrat est complété par les conditions générales de vente (locationclim45.fr/cgv).`, L, { taille: 8.5, couleur: GRIS });

  titre("1. Locataire");
  y = ligne("Type :", d.type === "Professionnel" ? `Professionnel - ${d.societe} (SIRET ${d.siretClient || "—"})` : "Particulier");
  y = ligne("Nom, prénom :", `${d.nom} ${d.prenom}`);
  y = ligne("Adresse :", d.adresse);
  y = ligne("Téléphone :", d.telephone);
  if (d.email) y = ligne("E-mail :", d.email);

  titre("2. Matériel loué");
  d.appareils.forEach(a => { y = ligne(`Appareil n° ${a.numero || "—"} :`, a.modele); });

  titre("3. Durée");
  y = ligne("Livraison le :", d.dateLivraison);
  y = ligne("Récupération prévue le :", d.dateRecuperation);
  y = pdf.paragraphe(X, y, "Minimum 3 jours. Toute journée commencée est due.", L, { taille: 8, couleur: GRIS });

  titre("4. Prix et paiement");
  y = ligne("Location (installation incluse) :", `${d.prixLocation} €`);
  y = ligne("Livraison et récupération :", `${d.prixLivraison} €`);
  if (d.arrhes && d.arrhes !== "0") y = ligne("Arrhes déjà versées :", `${d.arrhes} €`);
  y = ligne("Reste à payer à la livraison :", `${d.resteAPayer} €`);
  y = ligne("Mode de paiement :", d.modePaiement);

  titre("5. Caution - 150 € par appareil");
  y = ligne("Caution :", d.caution);

  titre("6. Conditions essentielles");
  for (const [t, c] of CONDITIONS) {
    saut(14);
    pdf.texte(X, y, t, { taille: 8.6, gras: true });
    y += 3.8;
    y = pdf.paragraphe(X, y, c, L, { taille: 8.3, interligne: 3.6 });
    y += 1.4;
  }

  if (d.type === "Particulier") {
    titre("7. Droit de rétractation");
    y = pdf.paragraphe(X, y, "Le contrat étant conclu à distance ou à domicile, le locataire particulier dispose de 14 jours pour se rétracter (formulaire disponible dans les CGV, ou par e-mail).", L, { taille: 8.8 });
    y += 1;
    y = pdf.paragraphe(X, y, d.demandeExecution
      ? "[X] Le locataire demande expressément que la location commence dès la livraison, avant la fin du délai de rétractation de 14 jours, et reconnaît qu'en cas de rétractation il devra payer la part de location déjà effectuée."
      : "[ ] Le locataire n'a pas demandé que la location commence avant la fin du délai de rétractation.", L, { taille: 8.8, gras: true });
  }

  titre("8. État des lieux à la livraison");
  y = pdf.paragraphe(X, y, d.etatLivraison.length ? d.etatLivraison.map(e => `[X] ${e}`).join("    ") : "Aucun point coché.", L, { taille: 9 });
  if (d.observations) y = ligne("Observations :", d.observations);

  titre("9. Signatures");
  y = pdf.paragraphe(X, y, "Le locataire reconnaît avoir pris connaissance des conditions générales de vente (locationclim45.fr/cgv) et en accepter les termes. Lu et approuvé.", L, { taille: 8.8 });
  saut(40);
  y += 2;
  const boite = (x: number, nom: string, sig?: Signature) => {
    pdf.rect(x, y, 88, 36, "#CBD5E1", false);
    pdf.texte(x + 3, y + 5, nom, { taille: 9, gras: true });
    if (sig && sig.dataUrl) {
      const ratio = sig.hauteur / sig.largeur;
      const l = Math.min(80, 26 / ratio);
      pdf.imageJpeg(sig.dataUrl, sig.largeur, sig.hauteur, x + 4, y + 7, l, l * ratio);
    }
  };
  boite(X, "Le loueur - Tom Loiseau", d.signatureLoueur);
  boite(X + 94, `Le locataire - ${d.prenom} ${d.nom}`, d.signatureLocataire);
  y += 42;
  pdf.paragraphe(X, y, `Document généré le ${d.signeLe} depuis locationclim45.fr. Un exemplaire est remis à chaque partie.`, L, { taille: 7.5, couleur: GRIS });

  return pdf;
}
