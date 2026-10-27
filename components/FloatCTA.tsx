import Link from "next/link";
import { SITE } from "@/lib/site";

// Barre fixe en bas de l'écran sur téléphone : « Appeler » et « Devis » toujours visibles.
// Masquée sur ordinateur (le numéro est déjà dans l'en-tête).
export default function FloatCTA() {
  return (
    <nav className="lc-barre-mobile" aria-label="Contact rapide">
      <a href={SITE.telephoneLien} className="lc-barre-appeler">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
        Appeler
      </a>
      <Link href="/contact" className="lc-barre-devis">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3H6v18h12V7z" /><path d="M14 3v4h4" /><path d="M9 13h6M9 17h4" /></svg>
        Devis
      </Link>
    </nav>
  );
}
