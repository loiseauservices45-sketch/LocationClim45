import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

// Police hébergée avec le site (plus rapide, aucune requête vers Google)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.locationclim45.fr"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
 title: {
    default: "Location Climatiseur Orléans & Loiret (45) — Livraison 24h | LocationClim45",
    template: "%s | LocationClim45",
  },
  description: "Location de climatiseur mobile à Orléans et dans le Loiret. Particuliers et professionnels. Installation et mise en service incluses, livraison sur devis.",
  keywords: ["location climatiseur Orléans", "clim mobile Orléans", "location climatisation mobile 45", "climatiseur mobile Loiret", "location clim La Ferté-Saint-Aubin"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.locationclim45.fr",
    siteName: "LocationClim45",
    title: "Location Climatiseur Orléans — Livraison 24h | LocationClim45",
    description: "Location clim mobile à Orléans et dans le Loiret. Installation incluse, livraison sur devis.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "LocationClim45 — location de climatiseurs à Orléans et dans le Loiret" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Location Climatiseur Orléans & Loiret | LocationClim45",
    description: "Location clim mobile à Orléans et dans le Loiret. Installation incluse, livraison sur devis.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LocationClim45",
  "description": "Location de climatiseurs mobiles à Orléans et dans le Loiret. Installation et mise en service incluses.",
  "telephone": "+33783800070",
  "email": "loiseau.services45@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "La Ferté-Saint-Aubin",
    "postalCode": "45240",
    "addressCountry": "FR"
  },
  "openingHours": "Mo-Su 08:00-20:00",
  "areaServed": ["Orléans","La Ferté-Saint-Aubin","Olivet","Saran","Meung-sur-Loire","Saint-Ay","Saint-Jean-le-Blanc","Ardon","Lamotte-Beuvron","Marcilly-en-Villette"],
  "priceRange": "€€",
  "url": "https://www.locationclim45.fr"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={jakarta.variable}>
      <head>
       <meta name="google-site-verification" content="P0uLNuEyq8DvkIqkDbpSsTt9J1tv7_aaHt7Fqkne9AI" />
<meta name="google-site-verification" content="qjP0D2GXN2yWTVqKzx-vhEJmeT1L-mIYeDoXQ1m4Teg" />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
        {/* Statistiques de visite Vercel : anonymes, sans cookie (à activer dans Vercel > Analytics) */}
        <script dangerouslySetInnerHTML={{ __html: "window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };" }} />
        <script defer src="/_vercel/insights/script.js" />
      </body>
    </html>
  );
}
