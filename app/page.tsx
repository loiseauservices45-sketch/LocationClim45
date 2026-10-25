import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import FloatCTA from "@/components/FloatCTA";
import AvisClients from "@/components/AvisClients";
import ZoneLivraison from "@/components/ZoneLivraison";
import { TEXTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Location Climatiseur Orléans & Loiret — Installation incluse",
  description: "Location de climatiseur mobile à Orléans et dans le Loiret, pour particuliers et professionnels. Installation et mise en service incluses, livraison sur devis.",
};

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <main>
        {/* HERO */}
        <section className="hero-bg" style={{ padding: "80px 24px 88px" }}>
          <div className="hero-grid" />
          <div className="hero-glow-1" />
          <div className="hero-glow-2" />
          <div className="hero-streak" />
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 420px", gap: 72, alignItems: "center", position: "relative", zIndex: 1 }}>
            <div>
              <div className="hero-badge" style={{ marginBottom: 24 }}>
                <span className="badge-dot" />
                Orléans &amp; Loiret (45)
              </div>
              <h1 style={{ fontSize: "clamp(36px,4.5vw,58px)", fontWeight: 800, color: "#F0F6FF", lineHeight: 1.08, letterSpacing: "-2px", marginBottom: 22 }}>
                La fraîcheur,{" "}
                <em style={{ fontStyle: "normal", background: "linear-gradient(135deg,#7DD3FC,#38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  livrée chez vous
                </em>{" "}en 24h.
              </h1>
              <p style={{ fontSize: 17, color: "rgba(200,220,255,0.6)", marginBottom: 36, lineHeight: 1.75, maxWidth: 500 }}>
                Location de climatiseur mobile livré, installé et récupéré chez vous — pour particuliers et professionnels. Installation toujours incluse, livraison selon la distance.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
                <a href="tel:0783800070" className="btn-primary">📞 Appeler maintenant</a>
                <a href="#tarifs" className="btn-ghost">Voir les forfaits →</a>
              </div>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                {["🚚 Livraison 24h", "🔧 Installation comprise", "📄 Contrat de location écrit"].map(t => (
                  <span key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "rgba(180,210,255,0.55)" }}>{t}</span>
                ))}
              </div>
            </div>
            {/* Hero card */}
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 24, padding: 28, backdropFilter: "blur(12px)", position: "relative" }}>
              <span style={{ position: "absolute", top: -12, right: 20, background: "linear-gradient(135deg,#059669,#10B981)", color: "#fff", padding: "5px 14px", borderRadius: 50, fontSize: 12, fontWeight: 700, boxShadow: "0 4px 12px rgba(5,150,105,0.4)" }}>● Disponible maintenant</span>
              <div style={{ borderRadius: 16, height: 380, background: "#ECE9E6", marginBottom: 20, border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden", position: "relative" }}>
                <img src="/images/climatiseur-carrera-tristar.webp" alt="Climatiseur mobile blanc avec sa télécommande, proposé à la location par LocationClim45" width={900} height={1368} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 62%" }} />
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#7DD3FC", marginBottom: 6 }}>Modèle standard</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#F0F6FF", marginBottom: 14 }}>Climatiseur mobile</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Silencieux", "Jusqu'à 25m²", "Sans travaux"].map(t => (
                  <span key={t} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(200,220,255,0.7)", padding: "4px 12px", borderRadius: 50, fontSize: 12, fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section style={{ padding: "80px 24px", background: "linear-gradient(180deg,#EFF6FF,#F8FAFC)" }}>
          <p className="section-label">Pourquoi LocationClim45</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, color: "#1E293B", letterSpacing: "-1.2px", marginBottom: 52 }}>Simple. Rapide. Fiable.</h2>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {[
              { icon: "🚚", title: "Livraison sous 24h", desc: "Nous livrons sur Orléans et tout le Loiret, au tarif indiqué dans votre devis. Vous choisissez le créneau, on s'occupe du reste." },
              { icon: "🔧", title: "Installation incluse", desc: "Nous installons et mettons en service l'appareil chez vous, sans travaux. Pas besoin de bricoler." },
              { icon: "❄️", title: "Appareils récents", desc: "Nos climatiseurs sont régulièrement entretenus, testés et nettoyés entre chaque location." },
              { icon: "↩️", title: "Récupération à domicile", desc: "En fin de location, on vient récupérer l'appareil chez vous. Aucune contrainte." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="dark-card" style={{ padding: "32px 24px" }}>
                <div style={{ width: 52, height: 52, background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.2)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 18 }}>{icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#F0F6FF", marginBottom: 10 }}>{title}</div>
                <p style={{ fontSize: 14, color: "rgba(180,210,255,0.55)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AVIS (2 premiers) */}
        <AvisClients debut={0} fin={2} titre="Ce que nos clients en disent" fond="#fff" />

        {/* PRICING */}
        <section id="tarifs" style={{ background: "linear-gradient(160deg,#07111F,#0F1F4A 60%,#1E3A8A 100%)", padding: "80px 24px" }}>
          <p className="section-label section-label-light">Nos forfaits</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, color: "#F0F6FF", letterSpacing: "-1.2px", marginBottom: 52 }}>Des tarifs clairs, sans surprise</h2>
          <div style={{ maxWidth: 980, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              { name: "Week-end", price: "74€", period: "3 jours minimum", feats: [TEXTES.installation, TEXTES.livraisonCourt, "Climatiseur 7 000 BTU"], featured: false },
              { name: "Semaine Fraîcheur", price: "134€", period: "7 jours", feats: [TEXTES.installation, TEXTES.livraisonCourt, "Climatiseur 7 000 BTU", "Support 7j/7"], featured: true },
              { name: "Mois Sérénité", price: "384€", period: "30 jours", feats: [TEXTES.installation, TEXTES.livraisonCourt, "Climatiseur 7 000 BTU", "Support 7j/7"], featured: false },
            ].map(({ name, price, period, feats, featured }) => (
              <div key={name} className="price-card" style={featured ? { background: "#fff", border: "none", boxShadow: "0 12px 48px rgba(0,0,0,0.4)" } : {}}>
                {featured && <span style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#0EA5E9,#38BDF8)", color: "#0F172A", padding: "5px 16px", borderRadius: 50, fontSize: 11, fontWeight: 800, whiteSpace: "nowrap" }}>⭐ Le plus choisi</span>}
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: featured ? "#2563EB" : "rgba(255,255,255,0.45)", marginBottom: 10 }}>{name}</div>
                <div style={{ fontSize: 48, fontWeight: 800, lineHeight: 1, color: featured ? "#1E293B" : "#F0F6FF", marginBottom: 4, letterSpacing: "-2px" }}>{price}</div>
                <div style={{ fontSize: 14, color: featured ? "#94A3B8" : "rgba(255,255,255,0.4)", marginBottom: 24 }}>{period}</div>
                <ul style={{ listStyle: "none" }}>
                  {feats.map(f => (
                    <li key={f} style={{ fontSize: 14, padding: "8px 0", borderBottom: featured ? "1px solid rgba(0,0,0,0.07)" : "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: 9, color: featured ? "#475569" : "rgba(255,255,255,0.7)" }}>
                      <span style={{ color: featured ? "#2563EB" : "#38BDF8", fontWeight: 800 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="tel:0783800070" style={{ display: "block", width: "100%", textAlign: "center", marginTop: 24, padding: "14px", borderRadius: 50, fontWeight: 700, fontSize: 15, background: featured ? "#1E293B" : "rgba(255,255,255,0.08)", color: "#fff", border: featured ? "none" : "1px solid rgba(255,255,255,0.15)", transition: "all .2s", cursor: "pointer" }}>Réserver</a>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 28, fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>🚚 {TEXTES.livraison} — précisée dans votre devis<br/>🔒 {TEXTES.caution} · 💼 Tarifs professionnels sur devis</p>
        </section>

        {/* HOW */}
        <section style={{ padding: "80px 24px", background: "linear-gradient(160deg,#EBF4FF,#F0F7FF 50%,#E8F2FF 100%)", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(37,99,235,0.05) 1px,transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
          <p className="section-label" style={{ position: "relative", zIndex: 1 }}>Processus</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, color: "#1E293B", letterSpacing: "-1.2px", marginBottom: 52, position: "relative", zIndex: 1 }}>Comment ça marche ?</h2>
          <div style={{ maxWidth: 980, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 4, position: "relative", zIndex: 1 }}>
            {[
              { n: 1, title: "Vous nous appelez", desc: "Un appel pour vérifier la disponibilité et choisir votre forfait." },
              { n: 2, title: "On confirme", desc: "Créneau et tarif de livraison fixés, confirmation par SMS avec récapitulatif." },
              { n: 3, title: "Livraison & install", desc: "On arrive chez vous sous 24h et on installe l'appareil." },
              { n: 4, title: "Récupération", desc: "En fin de location, on vient reprendre l'appareil. Caution restituée." },
            ].map(({ n, title, desc }) => (
              <div key={n} style={{ textAlign: "center", padding: "0 12px" }}>
                <div style={{ width: 68, height: 68, background: "linear-gradient(135deg,#2563EB,#1E40AF)", color: "#fff", borderRadius: "50%", fontSize: 22, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", boxShadow: "0 0 0 6px rgba(37,99,235,0.10),0 4px 20px rgba(37,99,235,0.3)" }}>{n}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#1E293B", marginBottom: 10 }}>{title}</div>
                <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ZONE DE LIVRAISON */}
        <ZoneLivraison />

        {/* AVIS (2 derniers) */}
        <AvisClients debut={2} fin={4} titre="Ils nous font confiance" />

        {/* FAQ */}
        <FAQSection />

        {/* CTA FINAL */}
        <section style={{ background: "#0D1117", padding: "80px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(37,99,235,0.18),transparent 65%)", pointerEvents: "none" }} />
          <h2 style={{ color: "#F0F6FF", fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, letterSpacing: "-1.2px", marginBottom: 12, position: "relative", zIndex: 1 }}>Besoin d'un climatiseur rapidement ?</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 17, marginBottom: 40, position: "relative", zIndex: 1 }}>Réponse immédiate — livraison sous 24h sur Orléans et ses alentours.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
            <a href="tel:0783800070" className="btn-cta-main">📞 07 83 80 00 70</a>
            <a href="https://wa.me/33783800070" className="btn-cta-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatCTA />
    </>
  );
}

function FAQSection() {
  const items = [
    { q: "Quelle surface peut refroidir un climatiseur mobile ?", a: "Un modèle 7 000 BTU convient aux pièces de 15 à 25 m². Pour les pièces de 20 à 30 m², nous proposons des modèles 9 000 BTU, selon les disponibilités. Appelez-nous pour être conseillé." },
    { q: "Comment fonctionne la caution ?", a: TEXTES.cautionDetail },
    { q: "Combien coûte la livraison ?", a: TEXTES.livraisonDetail },
    { q: "Livrez-vous en dehors d'Orléans ?", a: "Oui — nous desservons l'ensemble du Loiret : Olivet, Saran, Meung-sur-Loire, La Ferté-Saint-Aubin, Lamotte-Beuvron, Saint-Ay, Saint-Jean-le-Blanc, Ardon et bien d'autres communes." },
    { q: "Faut-il faire des travaux pour installer un climatiseur mobile ?", a: "Non. Il suffit d'une fenêtre pour évacuer l'air chaud via le tuyau fourni. Notre technicien s'en charge lors de la livraison." },
    { q: "Proposez-vous des tarifs pour les professionnels ?", a: "Oui. Nous établissons des devis sur mesure pour les entreprises, chantiers, événements et locations longue durée, avec facture professionnelle. Demandez un devis par téléphone ou via le formulaire." },
  ];
  return (
    <section style={{ padding: "80px 24px", background: "linear-gradient(160deg,#1a2744,#1e3055 60%,#162240 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -150, right: -150, width: 400, height: 400, background: "radial-gradient(circle,rgba(56,189,248,0.08),transparent 65%)", pointerEvents: "none" }} />
      <p className="section-label section-label-light" style={{ position: "relative", zIndex: 1 }}>Questions fréquentes</p>
      <h2 style={{ textAlign: "center", fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, color: "#F0F6FF", letterSpacing: "-1.2px", marginBottom: 40, position: "relative", zIndex: 1 }}>Tout ce que vous voulez savoir</h2>
      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {items.map(({ q, a }) => (
          <details key={q} style={{ marginBottom: 10 }}>
            <summary style={{ padding: "20px 24px", fontSize: 15, fontWeight: 700, color: "#E8F0FF", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, listStyle: "none", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, transition: "all .2s" }}>{q}</summary>
            <div style={{ padding: "0 24px 20px", fontSize: 14, color: "rgba(180,210,255,0.6)", lineHeight: 1.75, background: "rgba(255,255,255,0.04)", borderLeft: "1px solid rgba(255,255,255,0.08)", borderRight: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", borderRadius: "0 0 14px 14px" }}>{a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
