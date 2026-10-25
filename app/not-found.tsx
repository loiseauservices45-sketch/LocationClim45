import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

// Page affichée quand une adresse n'existe pas (erreur 404).
export default function PageIntrouvable() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-bg" style={{ padding: "96px 24px 104px", minHeight: "62vh", display: "flex", alignItems: "center" }}>
          <div className="hero-grid" /><div className="hero-glow-1" /><div className="hero-glow-2" />
          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div className="hero-badge" style={{ marginBottom: 24, display: "inline-flex" }}><span className="badge-dot" /> Erreur 404</div>
            <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, color: "#F0F6FF", lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 16 }}>
              Cette page a pris{" "}
              <em style={{ fontStyle: "normal", background: "linear-gradient(135deg,#7DD3FC,#38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>un courant d&apos;air.</em>
            </h1>
            <p style={{ fontSize: 17, color: "rgba(200,220,255,0.82)", lineHeight: 1.7, marginBottom: 32 }}>
              L&apos;adresse demandée n&apos;existe pas ou a changé. Pas d&apos;inquiétude : tout le reste du site est bien là.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/" className="btn-primary">Retour à l&apos;accueil</Link>
              <a href={SITE.telephoneLien} className="btn-ghost">📞 {SITE.telephoneAffiche}</a>
            </div>
            <p style={{ marginTop: 28, fontSize: 14, color: "rgba(200,220,255,0.75)" }}>
              Vous cherchiez peut-être : <Link href="/climatiseurs" style={{ color: "#7DD3FC", fontWeight: 700 }}>nos climatiseurs</Link> ·{" "}
              <Link href="/zone-livraison" style={{ color: "#7DD3FC", fontWeight: 700 }}>la zone de livraison</Link> ·{" "}
              <Link href="/contact" style={{ color: "#7DD3FC", fontWeight: 700 }}>un devis</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
