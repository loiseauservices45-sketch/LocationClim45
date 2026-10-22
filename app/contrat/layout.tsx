import type { Metadata } from "next";

// Page privée : jamais indexée par Google, absente du menu et du sitemap.
export const metadata: Metadata = {
  title: "Contrat de location",
  robots: { index: false, follow: false, nocache: true },
};

export default function ContratLayout({ children }: { children: React.ReactNode }) {
  return children;
}
