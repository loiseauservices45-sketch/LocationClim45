import Link from "next/link";
import { PageGivre } from "@/components/Sections";
import { SITE } from "@/lib/site";

// Page affichée quand une adresse n'existe pas (erreur 404).
export default function PageIntrouvable() {
  return (
    <PageGivre>
      <section className="lc-section" style={{ minHeight: "62vh", display: "flex", alignItems: "center" }}>
        <div className="lc-conteneur" style={{ maxWidth: 680, textAlign: "center" }}>
          <p className="lc-pastille-lieu"><span />Erreur 404</p>
          <h1 className="lc-h1 lc-h1-page">Cette page a pris<br /><span style={{ color: "#BAE6FD" }}>un courant d&apos;air.</span></h1>
          <p className="lc-intro" style={{ margin: "0 auto 32px" }}>L&apos;adresse demandée n&apos;existe pas ou a changé. Pas d&apos;inquiétude : tout le reste du site est bien là.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="lc-bouton-glace lc-bouton-grand">Retour à l&apos;accueil</Link>
            <a href={SITE.telephoneLien} className="lc-bouton-ciel">{SITE.telephoneAffiche}</a>
          </div>
          <p style={{ marginTop: 28, fontSize: 15, color: "#CBD5E1" }}>
            Vous cherchiez peut-être : <Link href="/climatiseurs" className="lc-lien">nos climatiseurs</Link> · <Link href="/zone-livraison" className="lc-lien">la zone de livraison</Link> · <Link href="/contact" className="lc-lien">un devis</Link>
          </p>
        </div>
      </section>
    </PageGivre>
  );
}
