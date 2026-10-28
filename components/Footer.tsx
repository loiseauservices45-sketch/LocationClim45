import Link from "next/link";
import { SITE } from "@/lib/site";
import { Logo } from "@/components/Header";

export default function Footer() {
  return (
    <footer className="lc-pied">
      <div className="lc-pied-grille">
        <div>
          <div className="lc-marque" style={{ marginBottom: 12 }}>
            <Logo taille={40} />
            <span>Location<span style={{ color: "#7DD3FC" }}>Clim</span><span style={{ color: "#94A3B8" }}>45</span></span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.75, marginBottom: 16, maxWidth: 420 }}>
            Location de climatiseurs mobiles et de déshumidificateurs à Orléans et dans le Loiret. Installation et mise en service incluses, livraison selon la distance. Disponible 7j/7 de 8 h à 20 h.
          </p>
          <a href={SITE.telephoneLien} style={{ fontSize: 18, fontWeight: 800, color: "#F8FAFC" }}>{SITE.telephoneAffiche}</a>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul>
            {[
              ["/", "Accueil"],
              ["/climatiseurs", "Nos climatiseurs"],
              ["/location-deshumidificateur", "Déshumidificateurs"],
              ["/particuliers", "Particuliers"],
              ["/professionnels", "Professionnels"],
              ["/zone-livraison", "Zone de livraison"],
              ["/contact", "Contact & devis"],
            ].map(([href, label]) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Zone principale</h4>
          <ul>
            {["La Ferté-Saint-Aubin", "Orléans (45000)", "La Source", "Ardon", "Saint-Jean-le-Blanc", "Marcilly-en-Villette"].map(v => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lc-pied-bas">
        <span>© {new Date().getFullYear()} LocationClim45 — Tous droits réservés</span>
        <span style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/cgv">CGV</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </span>
      </div>
    </footer>
  );
}
