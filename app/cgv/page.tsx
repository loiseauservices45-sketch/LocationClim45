import type { Metadata } from "next";
import PageLegale from "@/components/PageLegale";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "Conditions générales de location de climatiseurs mobiles LocationClim45 : réservation, tarifs, caution, livraison, annulation.",
};

// ─────────────────────────────────────────────────────────────
// CONDITIONS GÉNÉRALES DE VENTE — LOCATION
// Les montants clés sont regroupés ici pour rester identiques
// partout (site + contrat).
// ─────────────────────────────────────────────────────────────
const CGV = {
  dureeMin: "3 jours",
  tarifs: [
    ["3 jours (week-end)", "74 €"],
    ["7 jours (semaine)", "134 €"],
    ["30 jours (mois)", "384 €"],
  ],
  arrhesPourcent: "30\u00a0%",
  delaiAnnulation: "72 heures",
  caution: "150 €",
  valeurRemplacement: "250 €",
  forfaitImmobilisation: "74 €",
  penaliteRetard: "25 €",
  delaiNonRestitution: "7 jours",
};

export default function ConditionsGeneralesDeVente() {
  const m = SITE.mediateur;
  return (
    <PageLegale
      titre="Conditions générales de vente"
      sousTitre="Conditions applicables à la location de climatiseurs mobiles LocationClim45, pour les particuliers comme pour les professionnels."
      miseAJour="22 octobre 2026"
    >
      <h2>1. Objet</h2>
      <p>
        Les présentes conditions générales de vente (CGV) s&apos;appliquent à toute location de matériel (climatiseurs mobiles et accessoires)
        proposée par {SITE.nom}. Toute réservation implique leur acceptation. Elles sont complétées par le contrat de location signé
        à la livraison ; en cas de contradiction, le contrat de location prévaut.
      </p>

      <h2>2. Le loueur</h2>
      <p>
        {SITE.exploitant}, {SITE.statut}, nom commercial {SITE.nom} — SIRET {SITE.siret} — {SITE.ville}.<br />
        Téléphone : {SITE.telephoneAffiche} · E-mail : {SITE.email} · {SITE.tva}.
      </p>

      <h2>3. Matériel loué</h2>
      <p>
        Le matériel est un climatiseur mobile livré avec sa télécommande, sa gaine d&apos;évacuation et, si nécessaire, une rallonge électrique.
        Le modèle est attribué selon la surface à climatiser et les disponibilités au moment de la réservation.
        Le loueur peut fournir un modèle de capacité équivalente ou supérieure, sans supplément.
      </p>

      <h2>4. Réservation</h2>
      <p>
        La réservation se fait par téléphone, WhatsApp, e-mail ou via le formulaire du site. Elle est confirmée par écrit (SMS ou e-mail)
        avec un récapitulatif : matériel, dates, prix de la location et prix de la livraison.
      </p>

      <h2>5. Durée de location</h2>
      <ul>
        <li>Durée minimale : <strong>{CGV.dureeMin}</strong>, sauf accord écrit du loueur (notamment pour les professionnels ou un besoin particulier).</li>
        <li>La durée court du jour de la livraison au jour de la récupération. <strong>Toute journée commencée est due.</strong></li>
        <li>Si la récupération est retardée du fait du loueur, les jours supplémentaires ne sont pas facturés.</li>
        <li>Une prolongation est possible avec l&apos;accord du loueur, au tarif en vigueur.</li>
      </ul>

      <h2>6. Tarifs</h2>
      <table>
        <thead><tr><th>Durée</th><th>Prix de la location (par appareil)</th></tr></thead>
        <tbody>{CGV.tarifs.map(([d, p]) => <tr key={d}><td>{d}</td><td>{p}</td></tr>)}</tbody>
      </table>
      <ul>
        <li><strong>L&apos;installation et la mise en service sont toujours incluses.</strong></li>
        <li>La livraison et la récupération sont facturées en supplément, selon la distance et la durée de location. Le montant est indiqué dans le devis et confirmé avant la réservation.</li>
        <li>Les professionnels et les locations de longue durée ou de plusieurs appareils bénéficient d&apos;un devis personnalisé.</li>
        <li>{SITE.tva}.</li>
      </ul>

      <h2>7. Arrhes et annulation</h2>
      <p>Pour toute réservation effectuée <strong>plus de {CGV.delaiAnnulation} avant la livraison</strong> :</p>
      <ul>
        <li>des arrhes de <strong>{CGV.arrhesPourcent} du prix de la location</strong> sont versées par virement instantané pour confirmer la réservation. Elles sont déduites du prix total ;</li>
        <li>annulation par le client <strong>au moins {CGV.delaiAnnulation} avant la livraison</strong> : les arrhes sont remboursées intégralement ;</li>
        <li>annulation par le client <strong>moins de {CGV.delaiAnnulation} avant la livraison</strong> : les arrhes restent acquises au loueur ;</li>
        <li>annulation par le loueur (hors force majeure) : le loueur rembourse le double des arrhes, conformément à l&apos;article L214-1 du Code de la consommation. S&apos;il propose un appareil équivalent ou supérieur et que le client l&apos;accepte, la réservation est maintenue sans pénalité.</li>
      </ul>
      <p>Les réservations effectuées moins de {CGV.delaiAnnulation} avant la livraison ne donnent pas lieu au versement d&apos;arrhes.</p>
      <p>Ces règles s&apos;appliquent sans préjudice du droit de rétractation des consommateurs décrit à l&apos;article 8.</p>

      <h2>8. Droit de rétractation (particuliers)</h2>
      <p>
        Lorsque le contrat est conclu à distance (téléphone, internet) ou hors établissement (à domicile), le client consommateur dispose
        d&apos;un délai de <strong>14 jours</strong> à compter de la conclusion du contrat pour se rétracter, sans avoir à se justifier.
        Il lui suffit de nous en informer par écrit (e-mail ou courrier), par exemple à l&apos;aide du formulaire ci-dessous.
        Les sommes versées sont alors remboursées dans un délai de 14 jours.
      </p>
      <p>
        Si le client demande expressément que la location commence avant la fin de ce délai, et se rétracte ensuite,
        il reste redevable d&apos;un montant proportionnel à la durée de location déjà effectuée (article L221-25 du Code de la consommation).
      </p>
      <p>Les professionnels ne bénéficient pas du droit de rétractation.</p>
      <div className="encadre">
        <strong>Formulaire de rétractation</strong> (à compléter et renvoyer uniquement si vous souhaitez vous rétracter)<br />
        À l&apos;attention de {SITE.exploitant} — {SITE.nom}, {SITE.ville}, {SITE.email} :<br />
        Je vous notifie par la présente ma rétractation du contrat portant sur la prestation de services ci-dessous :<br />
        Commandé le : … · Nom du consommateur : … · Adresse du consommateur : …<br />
        Signature du consommateur (uniquement en cas de notification sur papier) : … · Date : …
      </div>

      <h2>9. Paiement</h2>
      <ul>
        <li>Le prix de la location et de la livraison est payable <strong>à la livraison</strong>, par chèque ou par virement instantané (déduction faite des arrhes éventuelles).</li>
        <li>Professionnels : paiement à réception de facture ou selon le délai convenu par écrit, dans la limite des délais légaux. Tout retard de paiement entraîne des pénalités au taux d&apos;intérêt de la Banque centrale européenne majoré de 10 points, ainsi qu&apos;une indemnité forfaitaire pour frais de recouvrement de 40 € (article L441-10 du Code de commerce).</li>
      </ul>

      <h2>10. Caution</h2>
      <ul>
        <li>Une caution de <strong>{CGV.caution} par appareil</strong> est demandée à la livraison.</li>
        <li>Mode privilégié : <strong>chèque, non encaissé</strong>, rendu au client à la récupération de l&apos;appareil en bon état.</li>
        <li>À défaut : paiement par carte bancaire via un lien sécurisé Stripe. Le montant est alors réellement débité, puis remboursé après la récupération. Selon les banques, le remboursement peut mettre 5 à 10 jours ouvrés à apparaître sur le compte du client.</li>
        <li>La caution peut être retenue, sur justificatif, en tout ou partie, pour couvrir les dommages, accessoires manquants, nettoyage exceptionnel ou sommes restant dues. Si ces montants dépassent la caution, la différence reste due par le client.</li>
      </ul>

      <h2>11. Livraison, installation et récupération</h2>
      <ul>
        <li>Le matériel est livré, installé et récupéré exclusivement par le loueur, à l&apos;adresse et au créneau convenus.</li>
        <li>Le client (ou un adulte le représentant) doit être présent et permettre l&apos;accès au lieu d&apos;installation, qui doit disposer d&apos;une prise électrique et d&apos;une fenêtre permettant le passage de la gaine.</li>
        <li>En cas d&apos;absence au créneau convenu sans avoir prévenu au moins 24 heures à l&apos;avance, un nouveau déplacement pourra être facturé au tarif de la livraison.</li>
        <li>L&apos;installation comprend la mise en place de l&apos;appareil, de la gaine d&apos;évacuation, les réglages et les explications d&apos;utilisation.</li>
      </ul>

      <h2>12. Utilisation du matériel</h2>
      <p>Le client s&apos;engage à :</p>
      <ul>
        <li>utiliser l&apos;appareil uniquement en intérieur, conformément aux explications données et à la notice du fabricant ;</li>
        <li>ne pas le déplacer hors de l&apos;adresse de livraison, ne pas le prêter ni le sous-louer ;</li>
        <li>ne pas l&apos;ouvrir, le démonter, le modifier ou tenter de le réparer ;</li>
        <li>le maintenir debout, ne pas obstruer ses grilles et le débrancher en cas d&apos;anomalie, puis prévenir le loueur.</li>
      </ul>

      <h2>13. Panne</h2>
      <p>
        En cas de panne non imputable au client, celui-ci prévient le loueur, qui apporte une assistance par téléphone puis, si nécessaire,
        intervient sur place ou remplace l&apos;appareil selon les disponibilités. Si l&apos;appareil ne peut être ni réparé ni remplacé,
        les jours de location non utilisables ne sont pas facturés ou sont remboursés.
      </p>

      <h2>14. Responsabilité du client et dommages</h2>
      <ul>
        <li>Le client a la garde du matériel de la livraison jusqu&apos;à sa récupération et répond de sa perte, de son vol ou de sa détérioration, hors usure normale.</li>
        <li>Dommage réparable : le coût de la réparation, sur justificatif.</li>
        <li>Appareil irréparable, perdu ou volé : une valeur de remplacement forfaitaire de <strong>{CGV.valeurRemplacement} par climatiseur</strong>, ainsi qu&apos;un forfait d&apos;immobilisation de <strong>{CGV.forfaitImmobilisation}</strong> correspondant au délai de remplacement.</li>
        <li>En cas de vol, le client transmet au loueur une copie de son dépôt de plainte dans les 48 heures.</li>
      </ul>

      <h2>15. Retard de restitution</h2>
      <p>
        Si l&apos;appareil n&apos;est pas rendu disponible à la date de récupération convenue, chaque jour de retard est facturé{" "}
        <strong>{CGV.penaliteRetard}</strong>, sauf si le retard est dû au loueur ou a été accepté par lui. Au-delà de{" "}
        <strong>{CGV.delaiNonRestitution}</strong> de retard sans accord ni nouvelles du client après relance, l&apos;appareil est considéré
        comme non restitué : la valeur de remplacement et le forfait d&apos;immobilisation prévus à l&apos;article 14 sont alors dus.
      </p>

      <h2>16. État des lieux</h2>
      <p>
        Un état des lieux est réalisé à la livraison et à la récupération, éventuellement accompagné de photos. Toute réserve doit être
        signalée immédiatement et notée sur le contrat.
      </p>

      <h2>17. Force majeure</h2>
      <p>
        Aucune des parties n&apos;est responsable d&apos;un manquement causé par un événement de force majeure, au sens de l&apos;article 1218 du Code civil.
      </p>

      <h2>18. Assurance</h2>
      <p>
        Le loueur est titulaire d&apos;une assurance responsabilité civile professionnelle. Celle-ci ne couvre pas les dommages causés au matériel
        par le client ; il est conseillé à celui-ci de vérifier les garanties de sa propre assurance habitation ou professionnelle.
      </p>

      <h2>19. Données personnelles</h2>
      <p>Les données du client sont traitées conformément à notre <a href="/confidentialite">politique de confidentialité</a>.</p>

      <h2>20. Réclamations, médiation et litiges</h2>
      <p>
        Toute réclamation peut être adressée par écrit à {SITE.email}. En cas de désaccord persistant, le client consommateur peut recourir
        gratuitement à un médiateur de la consommation, dans un délai d&apos;un an à compter de sa réclamation écrite :
      </p>
      {m.nom ? (
        <p><strong>{m.nom}</strong> — {m.adresse} — <a href={m.site} target="_blank" rel="noopener">{m.site}</a></p>
      ) : (
        <p><em>Coordonnées du médiateur de la consommation : en cours de désignation.</em></p>
      )}
      <p>
        Les présentes CGV sont soumises au droit français. Pour les professionnels, les tribunaux d&apos;Orléans sont seuls compétents.
        Pour les consommateurs, les règles légales de compétence s&apos;appliquent.
      </p>
    </PageLegale>
  );
}
