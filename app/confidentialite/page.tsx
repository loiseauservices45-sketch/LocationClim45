import type { Metadata } from "next";
import PageLegale from "@/components/PageLegale";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment LocationClim45 collecte, utilise et protège vos données personnelles.",
};

export default function Confidentialite() {
  return (
    <PageLegale
      titre="Politique de confidentialité"
      sousTitre="Ce que nous faisons de vos données, en termes simples."
      miseAJour="22 octobre 2026"
    >
      <h2>Responsable du traitement</h2>
      <p>
        {SITE.exploitant}, {SITE.statut} — {SITE.nom}, {SITE.ville}.<br />
        Contact : <a href={`mailto:${SITE.email}`}>{SITE.email}</a> · <a href={SITE.telephoneLien}>{SITE.telephoneAffiche}</a>
      </p>

      <h2>Données collectées et utilisation</h2>
      <table>
        <thead>
          <tr><th>Situation</th><th>Données</th><th>Pourquoi</th><th>Durée de conservation</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Demande de devis (formulaire, téléphone, WhatsApp, e-mail)</td>
            <td>Nom, téléphone, e-mail, commune, type de client, durée et date souhaitées, message</td>
            <td>Répondre à votre demande et vous établir un devis</td>
            <td>3 ans après notre dernier échange, sauf si vous devenez client</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Nom, prénom, adresse, téléphone, e-mail, contrat signé, état des lieux, photos du matériel</td>
            <td>Exécuter le contrat de location, la livraison, la récupération et la caution</td>
            <td>Durée de la location, puis 5 ans (délai de prescription)</td>
          </tr>
          <tr>
            <td>Facturation</td>
            <td>Identité, adresse, montants, mode de paiement</td>
            <td>Respecter nos obligations comptables</td>
            <td>10 ans (obligation légale)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Ces traitements reposent sur l&apos;exécution du contrat ou de mesures précontractuelles prises à votre demande, et sur nos obligations légales.
        Vos données ne sont <strong>jamais vendues ni utilisées pour de la publicité</strong>.
      </p>

      <h2>Qui a accès à vos données</h2>
      <p>Uniquement {SITE.exploitant}, et les prestataires techniques strictement nécessaires :</p>
      <ul>
        <li><strong>Vercel</strong> (hébergement du site) ;</li>
        <li><strong>Web3Forms</strong> (transmission des demandes envoyées par le formulaire) ;</li>
        <li><strong>Google</strong> (messagerie Gmail recevant les demandes) ;</li>
        <li><strong>Stripe</strong>, uniquement si la caution est réglée par carte bancaire. Vos données bancaires sont traitées par Stripe et ne sont jamais conservées par {SITE.nom}.</li>
      </ul>
      <p>
        Certains de ces prestataires peuvent traiter des données en dehors de l&apos;Union européenne, notamment aux États-Unis.
        Ces transferts sont encadrés par les garanties prévues par le RGPD (clauses contractuelles types de la Commission européenne ou cadre de protection des données UE–États-Unis).
      </p>

      <h2>Cookies</h2>
      <p>
        Ce site n&apos;utilise <strong>aucun cookie publicitaire ni cookie de suivi</strong>. C&apos;est pourquoi aucun bandeau de consentement ne vous est demandé.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous pouvez à tout moment demander l&apos;accès à vos données, leur rectification, leur effacement, leur portabilité,
        ou vous opposer à leur traitement ou en demander la limitation, en écrivant à <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        Nous vous répondons dans un délai d&apos;un mois maximum.
      </p>
      <p>
        Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL :{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a>.
      </p>
    </PageLegale>
  );
}
