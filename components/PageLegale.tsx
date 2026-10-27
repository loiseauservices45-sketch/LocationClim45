import { PageGivre } from "@/components/Sections";

// Mise en page commune aux pages légales (mentions légales, CGV, confidentialité).
export default function PageLegale({ titre, sousTitre, miseAJour, children }: { titre: string; sousTitre?: string; miseAJour: string; children: React.ReactNode }) {
  return (
    <PageGivre>
      <section className="lc-section" style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div className="lc-conteneur" style={{ maxWidth: 880 }}>
          <p className="lc-etiquette">Informations légales</p>
          <h1 className="lc-h2" style={{ marginBottom: 12 }}>{titre}</h1>
          {sousTitre && <p style={{ fontSize: 16.5, color: "#CBD5E1", lineHeight: 1.7 }}>{sousTitre}</p>}
          <p style={{ fontSize: 14, color: "#BAE6FD", marginTop: 14 }}>Dernière mise à jour : {miseAJour}</p>
        </div>
      </section>
      <section className="lc-section" style={{ paddingTop: 0 }}>
        <article className="lc-glace texte-legal lc-legal">{children}</article>
      </section>
    </PageGivre>
  );
}
