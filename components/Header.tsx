"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/lib/site";

const nav = [
  { href: "/climatiseurs", label: "Climatiseurs" },
  { href: "/location-deshumidificateur", label: "Déshumidificateurs" },
  { href: "/particuliers", label: "Particuliers" },
  { href: "/professionnels", label: "Professionnels" },
  { href: "/zone-livraison", label: "Zone de livraison" },
  { href: "/contact", label: "Contact" },
];

const ICONE_TEL = "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z";

export function Logo({ taille = 46 }: { taille?: number }) {
  return (
    <svg width={taille} height={Math.round(taille * 0.56)} viewBox="108 160 896 470" fill="none" stroke="#7DD3FC" strokeLinecap="round" aria-hidden="true">
      <path d="M133 338 C 190 270, 245 230, 305 228 C 390 225, 450 280, 520 390 C 590 500, 640 560, 735 565 C 815 568, 880 525, 940 425" strokeWidth="26" opacity=".55" />
      <path d="M133 338 C 175 300, 215 282, 258 280 C 340 276, 410 330, 480 440 C 550 550, 610 618, 705 620 C 785 620, 850 570, 900 502" strokeWidth="18" opacity=".32" />
      <path d="M133 338 C 200 230, 270 176, 348 175 C 440 173, 500 230, 568 345 C 640 465, 700 510, 782 510 C 870 508, 940 440, 997 342" strokeWidth="44" />
      <circle cx="132" cy="341" r="52" fill="#7DD3FC" stroke="none" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="lc-entete">
        <div className="lc-entete-int">
          <Link href="/" className="lc-marque" onClick={() => setOpen(false)}>
            <Logo />
            <span>Location<span style={{ color: "#7DD3FC" }}>Clim</span><span style={{ color: "#94A3B8" }}>45</span></span>
          </Link>

          <nav className="lc-nav" aria-label="Navigation principale">
            {nav.map(({ href, label }) => (
              <Link key={href} href={href} className={pathname === href ? "actif" : undefined}>{label}</Link>
            ))}
          </nav>

          <a href={SITE.telephoneLien} className="lc-entete-tel">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={ICONE_TEL} /></svg>
            {SITE.telephoneAffiche}
          </a>

          <button type="button" onClick={() => setOpen(!open)} className="lc-hamburger" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}>
            <span style={{ transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>

        {open && (
        <div className="lc-menu-mobile">
          <Link href="/" onClick={() => setOpen(false)} className={pathname === "/" ? "actif" : undefined}>Accueil</Link>
          {nav.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname === href ? "actif" : undefined}>{label}</Link>
          ))}
          <a href={SITE.telephoneLien} className="lc-menu-appel">Appeler le {SITE.telephoneAffiche}</a>
          <a href={SITE.whatsappLien} target="_blank" rel="noopener" className="lc-menu-wa">WhatsApp</a>
        </div>
        )}
      </header>
    </>
  );
}
