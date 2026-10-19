import { AVIS } from "@/lib/avis";
import { SITE } from "@/lib/site";

// Affiche une partie des vrais avis Google.
// debut/fin : quels avis afficher (0-2 = les deux premiers, 2-4 = les deux suivants).
export default function AvisClients({ debut, fin, titre, fond = "#F1F5F9" }: { debut: number; fin: number; titre: string; fond?: string }) {
  const liste = AVIS.slice(debut, fin);
  if (liste.length === 0) return null;

  return (
    <section style={{ padding: "72px 24px", background: fond }}>
      <p className="section-label">Avis clients Google</p>
      <h2 style={{ textAlign: "center", fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, color: "#1E293B", letterSpacing: "-1.2px", marginBottom: 44 }}>{titre}</h2>
      <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
        {liste.map(({ nom, etoiles, texte, detail }) => (
          <figure key={nom + texte.slice(0, 20)} style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 20, padding: 28, margin: 0 }}>
            <div aria-label={`${etoiles} étoiles sur 5`} style={{ color: "#F59E0B", fontSize: 15, marginBottom: 14, letterSpacing: 1 }}>
              {"★".repeat(Math.max(0, Math.min(5, etoiles)))}
              <span style={{ color: "#CBD5E1" }}>{"★".repeat(5 - Math.max(0, Math.min(5, etoiles)))}</span>
            </div>
            <blockquote style={{ fontSize: 15, color: "#334155", lineHeight: 1.75, marginBottom: 18 }}>{"«\u00a0" + texte.replace(/ ([!?;:%])/g, "\u00a0$1") + "\u00a0»"}</blockquote>
            <figcaption style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div aria-hidden="true" style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#2563EB,#38BDF8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff", flexShrink: 0 }}>{nom.replace(/[^A-Za-zÀ-ÿ]/g, "").slice(0, 2).toUpperCase()}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#1E293B" }}>{nom}</div>
                <div style={{ fontSize: 12, color: "#64748B" }}>{detail ?? "Avis Google"}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      {SITE.lienAvisGoogle && (
        <p style={{ textAlign: "center", marginTop: 28 }}>
          <a href={SITE.lienAvisGoogle} target="_blank" rel="noopener" style={{ fontSize: 14, fontWeight: 700, color: "#2563EB" }}>Voir tous nos avis sur Google →</a>
        </p>
      )}
    </section>
  );
}
