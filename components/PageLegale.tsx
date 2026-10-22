import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatCTA from "@/components/FloatCTA";

// Mise en page commune aux pages légales (mentions légales, CGV, confidentialité).
export default function PageLegale({ titre, sousTitre, miseAJour, children }: { titre: string; sousTitre?: string; miseAJour: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <section className="hero-bg" style={{ padding: "56px 24px 60px" }}>
          <div className="hero-grid" /><div className="hero-glow-1" />
          <div style={{ maxWidth: 820, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <h1 style={{ fontSize: "clamp(30px,4.5vw,46px)", fontWeight: 800, color: "#F0F6FF", letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 12 }}>{titre}</h1>
            {sousTitre && <p style={{ fontSize: 16, color: "rgba(200,220,255,0.82)", lineHeight: 1.7 }}>{sousTitre}</p>}
            <p style={{ fontSize: 13, color: "rgba(200,220,255,0.65)", marginTop: 14 }}>Dernière mise à jour : {miseAJour}</p>
          </div>
        </section>
        <section style={{ padding: "56px 24px 80px", background: "#fff" }}>
          <article className="texte-legal" style={{ maxWidth: 820, margin: "0 auto" }}>{children}</article>
        </section>
      </main>
      <Footer />
      <FloatCTA />
    </>
  );
}
