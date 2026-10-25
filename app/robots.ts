import type { MetadataRoute } from "next";

// Indique à Google ce qu'il peut explorer.
// La page /contrat (contrat à signer) reste privée.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/contrat"] },
    sitemap: "https://www.locationclim45.fr/sitemap.xml",
    host: "https://www.locationclim45.fr",
  };
}
