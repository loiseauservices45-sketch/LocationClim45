import type { MetadataRoute } from "next";

// Plan du site pour Google (adresse unique avec www).
const BASE = "https://www.locationclim45.fr";
const PAGES: [string, number][] = [
  ["", 1],
  ["/climatiseurs", 0.9],
  ["/particuliers", 0.9],
  ["/professionnels", 0.9],
  ["/zone-livraison", 0.8],
  ["/contact", 0.8],
  ["/cgv", 0.3],
  ["/mentions-legales", 0.2],
  ["/confidentialite", 0.2],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const maintenant = new Date();
  return PAGES.map(([chemin, priority]) => ({ url: `${BASE}${chemin}`, lastModified: maintenant, priority }));
}
