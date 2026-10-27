// Icônes au trait, utilisées à la place des émojis sur tout le site.
const TRACES: Record<string, string[]> = {
  camion: ["M1 3h15v13H1z", "M16 8h4l3 3v5h-7z", "M5.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z", "M18.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"],
  cle: ["M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"],
  bouclier: ["M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z", "M8.5 12l2.5 2.5 4.5-5"],
  retour: ["M3 12a9 9 0 1 0 3-6.7", "M3 4v5h5"],
  telephone: ["M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"],
  message: ["M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.6A8.4 8.4 0 1 1 21 11.5z"],
  mail: ["M3 5h18v14H3z", "M3 6l9 7 9-7"],
  epingle: ["M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z", "M12 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"],
  document: ["M14 3H6v18h12V7z", "M14 3v4h4", "M9 13h6", "M9 17h4"],
  cadenas: ["M5 11h14v10H5z", "M8 11V7a4 4 0 0 1 8 0v4"],
  horloge: ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z", "M12 7v5l3 2"],
  immeuble: ["M3 21h18", "M5 21V5l7-3v19", "M12 8h7v13", "M8 8h1M8 12h1M8 16h1M15 12h1M15 16h1"],
  boutique: ["M3 9l1.5-5h15L21 9", "M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z", "M5 13v8h14v-8", "M10 21v-5h4v5"],
  chapiteau: ["M2 20L12 4l10 16z", "M12 4v16", "M7 20l5-8 5 8"],
  casque: ["M3 18h18", "M5 18v-3a7 7 0 0 1 14 0v3", "M10 8V5h4v3"],
  ecole: ["M2 9l10-5 10 5-10 5z", "M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"],
  coeur: ["M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"],
  thermometre: ["M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z"],
  ordinateur: ["M3 4h18v12H3z", "M8 20h8", "M12 16v4"],
  lune: ["M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"],
  famille: ["M9 7a3 3 0 1 0 0 .1", "M3 21v-2a5 5 0 0 1 10 0v2", "M17 9a2.5 2.5 0 1 0 0 .1", "M15 21v-1.5a4 4 0 0 1 6.5-3"],
  maison: ["M3 11l9-8 9 8", "M5 10v11h14V10", "M10 21v-6h4v6"],
  eclair: ["M13 2L4 14h7l-1 8 9-12h-7z"],
  euro: ["M18 7a7 7 0 1 0 0 10", "M4 10h10M4 14h10"],
  calendrier: ["M3 5h18v16H3z", "M3 10h18", "M8 3v4M16 3v4"],
  appareils: ["M2 7h8v12H2z", "M14 7h8v12h-8z", "M6 4v3M18 4v3"],
  flocon: ["M12 2v20M4.9 6l14.2 12M4.9 18L19.1 6", "M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5"],
  coche: ["M5 12l5 5L20 7"],
  croix: ["M6 6l12 12M18 6L6 18"],
};

export type NomIcone = keyof typeof TRACES;

export default function Icone({ nom, taille = 24, couleur = "currentColor", epaisseur = 1.8, className }: { nom: NomIcone; taille?: number; couleur?: string; epaisseur?: number; className?: string }) {
  return (
    <svg className={className} width={taille} height={taille} viewBox="0 0 24 24" fill="none" stroke={couleur} strokeWidth={epaisseur} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      {TRACES[nom].map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}
