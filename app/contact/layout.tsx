import type { Metadata } from "next";

// Titre et description Google de la page Contact.
// (La page elle-même est interactive et ne peut pas les déclarer.)
export const metadata: Metadata = {
  title: "Contact & Devis Climatiseur — Orléans & Loiret",
  description: "Demandez votre devis de location de climatiseur mobile à Orléans et dans le Loiret. Installation incluse, livraison sur devis. Appelez le 07 83 80 00 70 ou écrivez-nous.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
