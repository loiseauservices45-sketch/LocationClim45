import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#060A12", color: "rgba(255,255,255,0.5)", padding: "44px 24px 22px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 32 }}>
        <div>
          <div style={{ fontSize: 21, fontWeight: 800, color: "#fff", marginBottom: 10 }}>
            LocationClim<em style={{ fontStyle: "normal", color: "#38BDF8" }}>45</em>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.75, marginBottom: 16 }}>
            Location de climatiseurs mobiles à Orléans et dans le Loiret. Livraison, installation et récupération incluses. Disponible 7j/7 de 8h à 20h.
          </p>
          <a href="tel:0783800070" style={{ fontSize: 17, fontWeight: 700, color: "#fff" }}>📞 07 83 80 00 70</a>
        </div>
        <div>
          <h4 style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, fontWeight: 700, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>Navigation</h4>
          <ul style={{ listStyle: "none" }}>
            {[
              ["/", "Accueil"],
              ["/climatiseurs", "Nos climatiseurs"],
              ["/particuliers", "Particuliers"],
              ["/professionnels", "Professionnels"],
              ["/zone-livraison", "Zone de livraison"],
              ["/contact", "Contact & devis"],
            ].map(([href, label]) => (
              <li key={href} style={{ marginBottom: 9, fontSize: 13 }}>
                <Link href={href} style={{ transition: "color .15s" }}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, fontWeight: 700, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>Zone centrale</h4>
          <ul style={{ listStyle: "none" }}>
            {["La Ferté-Saint-Aubin", "Orléans (45000)", "La Source", "Ardon", "Saint-Jean-le-Blanc", "Marcilly-en-Villette"].map(v => (
              <li key={v} style={{ marginBottom: 9, fontSize: 13 }}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 18, display: "flex", justifyContent: "space-between", fontSize: 11, flexWrap: "wrap", gap: 6 }}>
        <span>© 2025 LocationClim45 — Tous droits réservés</span>
        <span>Mentions légales · CGV · Confidentialité</span>
      </div>
    </footer>
  );
}
