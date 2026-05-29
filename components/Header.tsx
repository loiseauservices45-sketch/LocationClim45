"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/climatiseurs", label: "Nos climatiseurs" },
  { href: "/particuliers", label: "Particuliers" },
  { href: "/professionnels", label: "Professionnels" },
  { href: "/zone-livraison", label: "Zone livraison" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        padding: "0 20px",
        width: "100%",
        boxSizing: "border-box",
      }}>
        <div style={{
          maxWidth: 1140, margin: "0 auto",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          height: 64, gap: 12,
          width: "100%",
        }}>
          <Link href="/" style={{
            fontSize: 18, fontWeight: 800,
            color: "#1E293B", letterSpacing: "-0.5px",
            whiteSpace: "nowrap", flexShrink: 0,
          }}>
            Location<em style={{ fontStyle: "normal", color: "#2563EB" }}>Clim</em>45
          </Link>

          <nav style={{
            display: "flex", gap: 2,
            flex: 1, justifyContent: "center",
          }} className="desktop-nav">
            {nav.map(({ href, label }) => (
              <Link key={href} href={href} style={{
                fontSize: 13, fontWeight: 600,
                padding: "6px 10px", borderRadius: 8,
                transition: "all .15s", whiteSpace: "nowrap",
                color: pathname === href ? "#2563EB" : "#64748B",
                background: pathname === href ? "rgba(37,99,235,0.06)" : "transparent",
              }}>{label}</Link>
            ))}
          </nav>

          <div style={{
            display: "flex", alignItems: "center",
            gap: 10, flexShrink: 0,
          }} className="desktop-right">
            <a href="tel:0783800070" style={{
              fontWeight: 700, fontSize: 14,
              color: "#1E293B", display: "flex",
              alignItems: "center", gap: 6,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18a2 2 0 012-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l1.06-1.34a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span>07 83 80 00 70</span>
            </a>
            <Link href="/contact" style={{
              background: "#1E293B", color: "#fff",
              padding: "9px 18px", borderRadius: 50,
              fontWeight: 700, fontSize: 13,
              whiteSpace: "nowrap",
            }}>Devis gratuit</Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="hamburger"
            style={{
              display: "none",
              background: "none", border: "none",
              cursor: "pointer", padding: 8,
              flexDirection: "column", gap: 5,
              flexShrink: 0,
            }}
            aria-label="Menu"
          >
            <span style={{ width: 24, height: 2, background: "#1E293B", display: "block", transition: "all .2s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }}/>
            <span style={{ width: 24, height: 2, background: "#1E293B", display: "block", transition: "all .2s", opacity: open ? 0 : 1 }}/>
            <span style={{ width: 24, height: 2, background: "#1E293B", display: "block", transition: "all .2s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }}/>
          </button>
        </div>
      </header>

      {open && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0,
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          zIndex: 99, padding: "16px 20px 24px",
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          {nav.map(({ href, label }) => (
            <Link key={href} href={href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 16, fontWeight: 600,
                padding: "12px 16px", borderRadius: 10,
                color: pathname === href ? "#2563EB" : "#1E293B",
                background: pathname === href ? "rgba(37,99,235,0.06)" : "transparent",
                display: "block",
              }}
            >{label}</Link>
          ))}
          <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="tel:0783800070" style={{
              background: "#2563EB", color: "#fff",
              padding: "14px", borderRadius: 50,
              fontWeight: 700, fontSize: 16,
              textAlign: "center", display: "block",
            }}>📞 07 83 80 00 70</a>
            <a href="https://wa.me/33783800070" target="_blank" rel="noopener" style={{
              background: "#25D366", color: "#fff",
              padding: "14px", borderRadius: 50,
              fontWeight: 700, fontSize: 16,
              textAlign: "center", display: "block",
            }}>💬 WhatsApp</a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-right { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}