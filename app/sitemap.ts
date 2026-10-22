import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://locationclim45.fr', priority: 1 },
    { url: 'https://locationclim45.fr/particuliers', priority: 0.9 },
    { url: 'https://locationclim45.fr/professionnels', priority: 0.9 },
    { url: 'https://locationclim45.fr/climatiseurs', priority: 0.8 },
    { url: 'https://locationclim45.fr/zone-livraison', priority: 0.8 },
    { url: 'https://locationclim45.fr/contact', priority: 0.8 },
    { url: 'https://locationclim45.fr/cgv', priority: 0.3 },
    { url: 'https://locationclim45.fr/mentions-legales', priority: 0.2 },
    { url: 'https://locationclim45.fr/confidentialite', priority: 0.2 },
  ]
}