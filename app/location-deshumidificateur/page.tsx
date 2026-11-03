import type { Metadata } from "next";
import Link from "next/link";
import Icone from "@/components/Icones";
import BoutonBuee from "@/components/BoutonBuee";
import { PageGivre, EntetePage, Confiance, TitreSection, CartesIcones, FAQ, AppelFinal } from "@/components/Sections";
import { DESHUMIDIFICATEURS, OFFRE_DESHU, type ModeleDeshu } from "@/lib/deshumidificateurs";
import { SITE, TEXTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Location Déshumidificateur Orléans & Loiret — Livré et installé",
  description: "Location de déshumidificateur à Orléans et dans le Loiret dès 89 € la semaine : pièce humide, cave, dégât des eaux, chantier. Livré, installé et récupéré. Particuliers et professionnels.",
  alternates: { canonical: "/location-deshumidificateur" },
  openGraph: {
    title: "Location de déshumidificateur à Orléans et dans le Loiret",
    description: "Livré, installé, réglé et récupéré. Particuliers et professionnels, dès 89 € la semaine.",
    url: "/location-deshumidificateur",
    locale: "fr_FR",
    type: "website",
  },
};

// Dessin provisoire d'un déshumidificateur, en attendant les vraies photos.
function IllustrationDeshu({ grand = false }: { grand?: boolean }) {
  const l = grand ? 150 : 120;
  return (
    <svg viewBox="0 0 160 220" width={l} height={Math.round(l * 1.375)} aria-hidden="true">
      <defs>
        <linearGradient id={`corps-${grand ? "g" : "p"}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#DCEBF7" />
        </linearGradient>
      </defs>
      <rect x="22" y="20" width="116" height="172" rx="18" fill={`url(#corps-${grand ? "g" : "p"})`} stroke="#9CC3E4" strokeWidth="2" />
      <rect x="38" y="36" width="84" height="44" rx="8" fill="#0B3B66" />
      <text x="80" y="64" textAnchor="middle" fontSize="18" fontWeight="800" fill="#7DD3FC" fontFamily="system-ui, sans-serif">55 %</text>
      {[0, 1, 2, 3, 4].map(i => <rect key={i} x="40" y={94 + i * 12} width="80" height="5" rx="2.5" fill="#B9D4EA" />)}
      <rect x="40" y="158" width="80" height="22" rx="6" fill="#EAF4FC" stroke="#B9D4EA" />
      <path d="M80 162s-6 6.5-6 10a6 6 0 0 0 12 0c0-3.5-6-10-6-10z" fill="#38BDF8" />
      <circle cx="40" cy="200" r="7" fill="#0B3B66" /><circle cx="120" cy="200" r="7" fill="#0B3B66" />
    </svg>
  );
}

// Fiche appareil, au même format que les fiches climatiseurs (photo d'un côté, texte de l'autre).
function FicheDeshu({ m, inverse }: { m: ModeleDeshu; inverse: boolean }) {
  return (
    <article id={m.id} className={"lc-glace lc-fiche lc-fiche-deshu" + (inverse ? " lc-fiche-inverse" : "")}>
      <div className="lc-fiche-photo">
        {m.photo
          ? <img src={m.photo.src} alt={m.photo.alt} width={m.photo.largeur} height={m.photo.hauteur} />
          : <div className="lc-fiche-dessin"><IllustrationDeshu grand={m.id === "pro"} /></div>}
        <span className="lc-modele-etiquette lc-fiche-etiquette" style={{ background: m.id === "pro" ? "#EEF2FF" : "#E0F2FE", color: m.id === "pro" ? "#4338CA" : "#0369A1" }}>{m.etiquette}</span>
      </div>
      <div className="lc-fiche-texte">
        <p className="lc-mini-etiquette">Déshumidificateur · location</p>
        <h3>{m.nom}</h3>
        <p className="lc-deshu-capacite"><Icone nom="goutte" taille={18} couleur="#0284C7" epaisseur={2.2} />{m.capacite}</p>
        <p className="lc-fiche-accroche">{m.pourQui}</p>
        <ul className="lc-coches">
          {m.points.map(p => <li key={p}><Icone nom="coche" taille={18} couleur="#0284C7" epaisseur={2.6} />{p}</li>)}
        </ul>
        <div className="lc-deshu-prix">
          {m.prix.map((p, k) => (
            <div key={p.duree} className={k === 1 ? "lc-deshu-prix-vedette" : undefined}>
              <span>{p.duree}</span>
              <strong>{p.prix}</strong>
              {OFFRE_DESHU.active && p.duree === "1 mois" && <em className="lc-deshu-offre">+ {OFFRE_DESHU.tuile}</em>}
            </div>
          ))}
        </div>
        <p className="lc-deshu-note">✓ Conseil, installation et réglage inclus · ✓ Nettoyé et contrôlé entre chaque location · caution {m.caution}</p>
        {m.complement && <p className="lc-deshu-complement"><Icone nom="immeuble" taille={18} couleur="#0369A1" epaisseur={2} />{m.complement}</p>}
        <div className="lc-fiche-actions">
          <a href={SITE.telephoneLien} className="lc-bouton-ciel lc-bouton-moyen"><Icone nom="telephone" taille={18} epaisseur={2.2} />Réserver cet appareil</a>
          <Link href="/contact?appareil=deshumidificateur" className="lc-bouton-sombre">Demander un devis</Link>
        </div>
      </div>
    </article>
  );
}

// Ce qu'on compare : acheter seul en magasin, ou louer avec le service.
const ACHAT = [
  "Choisir seul le modèle et la puissance",
  "Aller le chercher et le transporter",
  "L'installer et trouver le bon réglage",
  "Avancer le prix d'un appareil neuf pour un besoin de quelques semaines",
  "Le ranger quelque part une fois le problème réglé",
];
const LOCATION = [
  "Un conseil gratuit pour choisir le bon appareil",
  "Livré chez vous : rien à porter",
  "Installé et réglé par nos soins",
  "Vous payez seulement la durée utile, dès 89 € la semaine",
  "On revient le chercher : rien à stocker",
  "Un appareil nettoyé et contrôlé entre chaque location",
  "Joignables 7j/7, de 8 h à 20 h",
];

const QUESTIONS = [
  { q: "Pourquoi louer plutôt qu'acheter un déshumidificateur ?", a: "Parce que vous n'avez rien à gérer : on vous conseille le bon appareil, on le livre, on l'installe et on le règle, puis on le récupère quand le problème est réglé. Vous payez seulement la durée dont vous avez besoin, sans appareil à stocker ensuite." },
  { q: "Combien de temps faut-il le garder ?", a: "Cela dépend de la situation : quelques jours pour une pièce humide, souvent une à plusieurs semaines après un dégât des eaux ou sur un chantier. Nous vous conseillons la durée au moment du devis, et la location peut être prolongée." },
  { q: "Faut-il vider le bac d'eau ?", a: "Sur le modèle professionnel, l'eau peut être évacuée en continu par un tuyau, sans rien vider. Sur le modèle maison, le bac se vide simplement, ou un tuyau peut être branché quand c'est possible. L'appareil s'arrête tout seul quand le bac est plein." },
  { q: "Est-ce que ça consomme beaucoup ?", a: "L'appareil fonctionne sur une prise normale et consomme de l'électricité comme un petit appareil ménager. Il s'arrête de lui-même une fois le taux d'humidité réglé atteint." },
  { q: "Mon assurance peut-elle prendre en charge la location après un dégât des eaux ?", a: "C'est possible : nous avons déjà eu une cliente dont l'assurance a pris en charge la location de nos appareils pour assécher son logement après un dégât des eaux. Cela dépend de votre contrat, donc vérifiez auprès de votre assureur avant la location. Nous vous fournissons une facture détaillée à lui transmettre." },
  { q: "Livrez-vous aussi les professionnels ?", a: "Oui : artisans, agences immobilières, syndics, entreprises. Plusieurs appareils et facture professionnelle sur devis." },
  { q: "Dans quelles communes livrez-vous les déshumidificateurs ?", a: "Nous livrons depuis La Ferté-Saint-Aubin dans tout le Loiret : Orléans (dont La Source), Olivet, Saint-Jean-le-Blanc, Saint-Cyr-en-Val, Ardon, Marcilly-en-Villette, Saran, Fleury-les-Aubrais, Saint-Jean-de-Braye, Lamotte-Beuvron et bien d'autres communes. Appelez-nous pour vérifier votre adresse." },
  { q: "Combien coûte la livraison ?", a: (OFFRE_DESHU.active ? OFFRE_DESHU.detail + " " : "") + TEXTES.livraisonDetail },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Location de déshumidificateur",
  provider: { "@type": "LocalBusiness", name: SITE.nom, telephone: "+33783800070", url: SITE.url },
  areaServed: ["Orléans", "La Ferté-Saint-Aubin", "Loiret"],
  description: "Location de déshumidificateurs livrés, installés et récupérés, pour particuliers et professionnels.",
  offers: DESHUMIDIFICATEURS.flatMap(m => m.prix.map(p => ({
    "@type": "Offer",
    name: `${m.nom} — ${p.duree}`,
    price: p.prix.replace(/[^0-9]/g, ""),
    priceCurrency: "EUR",
  }))),
};

const SCHEMA_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: QUESTIONS.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function PageDeshumidificateurs() {
  return (
    <PageGivre ambiance="brume" bandeau={OFFRE_DESHU.active ? OFFRE_DESHU.bandeau : "Location de déshumidificateurs · Orléans & Loiret"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />

      <EntetePage
        etiquette="Nouveau · Orléans & Loiret"
        titre={<>Location de déshumidificateur,<br /><span className="lc-h1-accent">on s&apos;occupe de tout.</span></>}
        intro="Pièce humide, cave, dégât des eaux ou chantier : rien à choisir seul, rien à porter, rien à régler. On vous conseille le bon appareil, on le livre, on l'installe, et on revient le chercher quand c'est sec."
      >
        <div className="lc-g2 lc-duo" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <a href={SITE.telephoneLien} className="lc-gros-bouton lc-gros-appel">
            <span className="lc-gros-titre"><Icone nom="telephone" taille={22} epaisseur={2.2} />Nous appeler</span>
            <span className="lc-gros-sous">{SITE.telephoneAffiche}</span>
          </a>
          <BoutonBuee cible="#tarifs" className="lc-gros-bouton lc-gros-fraicheur lc-reflet lc-pulse">
            <span className="lc-gros-titre"><Icone nom="goutte" taille={22} couleur="#0369A1" epaisseur={2.1} className="lc-flotte" />Voir les appareils</span>
            <span className="lc-gros-sous" style={{ color: "#0369A1" }}>et les prix →</span>
          </BoutonBuee>
        </div>
        <Confiance centre elements={["Livré, installé, récupéré", "Nettoyé entre chaque location"]} />
      </EntetePage>

      {/* CATALOGUE + PRIX (destination de l'animation buée) */}
      <section id="tarifs" className="lc-section">
        <div className="lc-conteneur">
          <TitreSection etiquette="Nos déshumidificateurs" titre="Le bon appareil pour chaque besoin." chapeau="Prix par appareil, installation toujours comprise. Nous vous conseillons le modèle adapté à la pièce et à la situation." />
          <div style={{ display: "grid", gap: 32 }}>
            {DESHUMIDIFICATEURS.map((m, i) => <FicheDeshu key={m.id} m={m} inverse={i % 2 === 1} />)}
          </div>
          <p className="lc-note">{OFFRE_DESHU.active && <><strong className="lc-note-offre">{OFFRE_DESHU.detail}</strong><br /></>}Pour les autres durées : {TEXTES.livraison.charAt(0).toLowerCase() + TEXTES.livraison.slice(1)}, précisée dans votre devis.</p>

          {/* Conseil par photo WhatsApp */}
          <div className="lc-bande-pro lc-bande-photo">
            <span className="lc-bande-pro-icone"><Icone nom="message" taille={30} couleur="#0369A1" /></span>
            <div>
              <h3>Pas sûr du bon appareil ?</h3>
              <p>Envoyez-nous une photo de la pièce sur WhatsApp : on vous conseille gratuitement, sans engagement.</p>
            </div>
            <div className="lc-bande-pro-actions">
              <a href={`${SITE.whatsappLien}?text=${encodeURIComponent("Bonjour, je vous envoie une photo de ma pièce pour être conseillé sur un déshumidificateur.")}`} target="_blank" rel="noopener" className="lc-bouton-glace">Envoyer une photo</a>
            </div>
          </div>
        </div>
      </section>

      {/* LE SERVICE FAIT LA DIFFÉRENCE */}
      <section className="lc-section">
        <div className="lc-conteneur lc-etroit">
          <TitreSection etiquette="Louer plutôt qu'acheter" titre={<>Vous louez un appareil.<br />Vous gagnez la tranquillité.</>} chapeau="L'appareil compte, mais c'est tout le service autour qui fait la différence." />
          <div className="lc-g2 lc-compare">
            <div className="lc-compare-col lc-compare-achat">
              <p className="lc-compare-titre">Acheter en magasin</p>
              <ul>
                {ACHAT.map(t => <li key={t}><Icone nom="croix" taille={18} couleur="#94A3B8" epaisseur={2.4} />{t}</li>)}
              </ul>
            </div>
            <div className="lc-glace lc-compare-col lc-compare-location">
              <p className="lc-compare-titre">Louer chez LocationClim45</p>
              <ul>
                {LOCATION.map(t => <li key={t}><Icone nom="coche" taille={18} couleur="#0284C7" epaisseur={2.6} />{t}</li>)}
              </ul>
              <a href={SITE.telephoneLien} className="lc-bouton-ciel lc-bouton-moyen"><Icone nom="telephone" taille={18} epaisseur={2.2} />Être conseillé gratuitement</a>
            </div>
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <section className="lc-section">
        <div className="lc-conteneur lc-etroit">
          <TitreSection etiquette="Pour quelles situations ?" titre="L'humidité, on l'évacue." chapeau="Un déshumidificateur retire l'eau de l'air : les murs, les sols et les affaires sèchent plus vite." />
          <CartesIcones colonnes={3} cartes={[
            { icone: "fenetre", titre: "Pièce humide", texte: "Condensation sur les vitres, odeur de renfermé, linge qui ne sèche pas." },
            { icone: "garage", titre: "Cave et garage", texte: "Air chargé d'humidité, affaires et cartons à protéger." },
            { icone: "vagues", titre: "Après un dégât des eaux", texte: "Fuite, inondation : on accélère le séchage. Facture détaillée pour votre assurance." },
            { icone: "pinceau", titre: "Chantier et rénovation", texte: "Séchage plus rapide après plâtre, enduit, peinture ou chape." },
            { icone: "maison", titre: "Logement à remettre en état", texte: "Logement vacant ou à relouer, resté longtemps fermé." },
            { icone: "boite", titre: "Locaux et stockage", texte: "Réserves, archives, ateliers : un air plus sec pour vos stocks." },
          ]} />
          <div className="lc-encart">
            <span className="lc-encart-icone"><Icone nom="info" taille={24} couleur="#0B3B66" epaisseur={2} /></span>
            <p><strong>Un conseil honnête :</strong> un déshumidificateur sèche l&apos;air et accélère le séchage, mais il ne répare pas une fuite, une infiltration ou des remontées d&apos;humidité par le sol. Dans ces cas-là, il faut aussi traiter la cause avec un professionnel du bâtiment. On vous le dira franchement.</p>
          </div>
        </div>
      </section>

      <FAQ titre="Vos questions sur les déshumidificateurs" items={QUESTIONS} />

      <AppelFinal titre="Un problème d'humidité ? On s'en occupe." texte="Un appel suffit : conseil gratuit, livraison, installation et récupération. 7j/7 de 8 h à 20 h." />
    </PageGivre>
  );
}
