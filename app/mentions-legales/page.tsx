import type { Metadata } from "next";
import PageLegale from "@/components/PageLegale";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site locationclim45.fr : éditeur, hébergeur et propriété intellectuelle.",
  robots: { index: true, follow: true },
};

export default function MentionsLegales() {
  return (
    <PageLegale titre="Mentions légales" miseAJour="22 octobre 2026">
      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>locationclim45.fr</strong> est édité par :<br />
        <strong>{SITE.exploitant}</strong>, {SITE.statut}<br />
        Nom commercial : {SITE.nom}<br />
        SIRET : {SITE.siret}<br />
        Siège : {SITE.ville}<br />
        Téléphone : <a href={SITE.telephoneLien}>{SITE.telephoneAffiche}</a><br />
        E-mail : <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
        {SITE.tva}
      </p>
      <p>Directeur de la publication : {SITE.exploitant}.</p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par <strong>Vercel Inc.</strong><br />
        440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis<br />
        Site internet : <a href="https://vercel.com" target="_blank" rel="noopener">vercel.com</a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site (textes, logo, photographies, mise en page) est la propriété de {SITE.exploitant} — {SITE.nom},
        sauf mention contraire. Toute reproduction, même partielle, sans autorisation écrite préalable est interdite.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Les informations transmises via le formulaire de devis sont utilisées uniquement pour répondre à votre demande et gérer votre location.
        Pour en savoir plus, consultez notre <a href="/confidentialite">politique de confidentialité</a>.
      </p>

      <h2>Cookies</h2>
      <p>Ce site n&apos;utilise aucun cookie publicitaire ni cookie de suivi.</p>

      <h2>Conditions de location</h2>
      <p>Les conditions applicables aux locations figurent dans nos <a href="/cgv">conditions générales de vente</a>.</p>
    </PageLegale>
  );
}
