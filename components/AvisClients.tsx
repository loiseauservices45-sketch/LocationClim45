import { AVIS } from "@/lib/avis";
import { SITE } from "@/lib/site";

// Affiche une partie des vrais avis Google sur des cartes « glace ».
// debut/fin : quels avis afficher (0-2 = les deux premiers, 2-4 = les deux suivants).
// Côte à côte sur ordinateur, l'un sous l'autre sur téléphone.
export default function AvisClients({ debut, fin, etiquette, lienGoogle = false }: { debut: number; fin: number; etiquette?: string; lienGoogle?: boolean }) {
  const liste = AVIS.slice(debut, fin);
  if (liste.length === 0) return null;

  return (
    <div>
      {etiquette && <p className="lc-etiquette" style={{ textAlign: "center", marginBottom: 22 }}>{etiquette}</p>}
      <div className="lc-g2">
        {liste.map(({ nom, etoiles, texte, detail }) => {
          const n = Math.max(0, Math.min(5, etoiles));
          return (
            <figure key={nom + texte.slice(0, 20)} className="lc-glace lc-avis">
              <div aria-label={`${n} étoiles sur 5`} style={{ color: "#D97706", letterSpacing: 3, marginBottom: 12 }}>
                {"★".repeat(n)}<span style={{ color: "#CBD5E1" }}>{"★".repeat(5 - n)}</span>
              </div>
              <blockquote>{"« " + texte.replace(/ ([!?;:%])/g, " $1") + " »"}</blockquote>
              <figcaption>
                <span aria-hidden="true" className="lc-avis-initiales">{nom.replace(/[^A-Za-zÀ-ÿ]/g, "").slice(0, 2).toUpperCase()}</span>
                {nom} · {detail ?? "Avis Google"}
              </figcaption>
            </figure>
          );
        })}
      </div>
      {lienGoogle && SITE.lienAvisGoogle && (
        <p style={{ textAlign: "center", marginTop: 26, display: "flex", gap: 22, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={SITE.lienAvisGoogle} target="_blank" rel="noopener" className="lc-lien">Voir tous nos avis sur Google →</a>
          {SITE.lienLaisserAvis && <a href={SITE.lienLaisserAvis} target="_blank" rel="noopener" className="lc-lien">Laisser un avis</a>}
        </p>
      )}
    </div>
  );
}
