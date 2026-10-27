import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import FloatCTA from "@/components/FloatCTA";
import FondGivre from "@/components/FondGivre";
import TransitionGivre from "@/components/TransitionGivre";
import BoutonGivre from "@/components/BoutonGivre";
import Icone, { type NomIcone } from "@/components/Icones";
import { CLIMATISEURS } from "@/lib/catalogue";
import { SITE, TEXTES } from "@/lib/site";

// ─────────────────────────────────────────────────────────────
// Briques communes à toutes les pages « Nuit & givre ».
// ─────────────────────────────────────────────────────────────

/** Gabarit de page : fond continu, bandeau, en-tête, pied de page, barre téléphone. */
export function PageGivre({ children, bandeau, givre = false }: { children: ReactNode; bandeau?: string; givre?: boolean }) {
  return (
    <div className="lc-page">
      <FondGivre />
      {givre && <TransitionGivre />}
      <div className="lc-contenu">
        <Banner text={bandeau} />
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <FloatCTA />
    </div>
  );
}

/** Haut de page des pages intérieures. */
export function EntetePage({ etiquette, titre, intro, children, aside }: { etiquette: string; titre: ReactNode; intro: ReactNode; children?: ReactNode; aside?: ReactNode }) {
  if (aside) {
    return (
      <section className="lc-section lc-hero">
        <div className="lc-hero-grille">
          <div>
            <p className="lc-pastille-lieu"><span />{etiquette}</p>
            <h1 className="lc-h1 lc-h1-page">{titre}</h1>
            <p className="lc-intro">{intro}</p>
            {children}
          </div>
          <div className="lc-hero-photo">{aside}</div>
        </div>
      </section>
    );
  }
  return (
    <section className="lc-section lc-hero lc-hero-centre">
      <div className="lc-conteneur" style={{ maxWidth: 860, textAlign: "center" }}>
        <p className="lc-pastille-lieu"><span />{etiquette}</p>
        <h1 className="lc-h1 lc-h1-page">{titre}</h1>
        <p className="lc-intro" style={{ marginLeft: "auto", marginRight: "auto" }}>{intro}</p>
        {children}
      </div>
    </section>
  );
}

/** Les deux grands boutons : appeler / « Je veux de la fraîcheur ». */
export function DuoBoutons({ cible = "#tarifs", centre = false }: { cible?: string; centre?: boolean }) {
  return (
    <div className="lc-g2 lc-duo" style={centre ? { marginLeft: "auto", marginRight: "auto" } : undefined}>
      <a href={SITE.telephoneLien} className="lc-gros-bouton lc-gros-appel">
        <span className="lc-gros-titre"><Icone nom="telephone" taille={22} epaisseur={2.2} />Nous appeler</span>
        <span className="lc-gros-sous">{SITE.telephoneAffiche}</span>
      </a>
      <BoutonGivre cible={cible} className="lc-gros-bouton lc-gros-fraicheur lc-reflet lc-pulse">
        <span className="lc-gros-titre"><Icone nom="flocon" taille={22} couleur="#0369A1" epaisseur={2.2} className="lc-tourne" />Je veux de la fraîcheur</span>
        <span className="lc-gros-sous" style={{ color: "#0369A1" }}>Voir les prix →</span>
      </BoutonGivre>
    </div>
  );
}

/** Ligne de réassurance sous les boutons. */
export function Confiance({ centre = false, elements = ["Installation incluse", "Contrat de location écrit"] }: { centre?: boolean; elements?: string[] }) {
  return (
    <div className="lc-confiance" style={centre ? { justifyContent: "center" } : undefined}>
      <span><span style={{ color: "#FBBF24", letterSpacing: 2 }}>★★★★★</span> 5/5 sur Google</span>
      {elements.map(e => <span key={e}><Icone nom="coche" taille={17} couleur="#7DD3FC" epaisseur={2.4} /> {e}</span>)}
    </div>
  );
}

/** Carte photo cliquable (lance le givre). */
export function CartePhoto({ src = "/images/climatiseur-carrera-tristar.webp", alt = "Climatiseur mobile blanc avec sa télécommande, proposé à la location par LocationClim45", cible = "#tarifs" }: { src?: string; alt?: string; cible?: string }) {
  return (
    <>
      <div className="lc-hero-halo" aria-hidden="true" />
      <BoutonGivre cible={cible} className="lc-glace lc-carte-photo lc-flotte" libelle="Je veux de la fraîcheur : voir les prix et les modèles">
        <span className="lc-carte-photo-img"><img src={src} alt={alt} width={900} height={1368} /></span>
        <span className="lc-carte-photo-info">
          <span>
            <span className="lc-mini-etiquette">Climatiseur mobile</span>
            <span style={{ display: "block", fontSize: 15, fontWeight: 600, color: "#334155" }}>Silencieux · sans travaux</span>
          </span>
          <span style={{ textAlign: "right" }}>
            <span style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#64748B" }}>dès</span>
            <span style={{ display: "block", fontSize: 26, fontWeight: 800, color: "#0B1B33", letterSpacing: -1, lineHeight: 1 }}>74 €</span>
          </span>
        </span>
        <span className="lc-carte-photo-bandeau lc-reflet"><Icone nom="flocon" taille={20} couleur="#BAE6FD" epaisseur={2.2} className="lc-tourne" />Rafraîchir · voir les prix</span>
        <span className="lc-dispo">Disponible maintenant</span>
      </BoutonGivre>
    </>
  );
}

/** Titre de section centré. */
export function TitreSection({ etiquette, titre, chapeau }: { etiquette?: string; titre: ReactNode; chapeau?: ReactNode }) {
  return (
    <>
      {etiquette && <p className="lc-etiquette" style={{ textAlign: "center" }}>{etiquette}</p>}
      <h2 className="lc-h2" style={{ textAlign: "center", marginBottom: chapeau ? 14 : 48 }}>{titre}</h2>
      {chapeau && <p className="lc-chapeau">{chapeau}</p>}
    </>
  );
}

/** Grille de cartes glace avec icône. */
export function CartesIcones({ cartes, colonnes = 4 }: { cartes: { icone: NomIcone; titre: string; texte: string }[]; colonnes?: 3 | 4 }) {
  return (
    <div className={colonnes === 4 ? "lc-g4" : "lc-g3 lc-g3-cartes"}>
      {cartes.map(c => (
        <div key={c.titre} className="lc-glace lc-raison">
          <div className="lc-rond-icone"><Icone nom={c.icone} taille={28} couleur="#0369A1" /></div>
          <h3>{c.titre}</h3>
          <p>{c.texte}</p>
        </div>
      ))}
    </div>
  );
}

export const RAISONS: { icone: NomIcone; titre: string; texte: string }[] = [
  { icone: "camion", titre: "Livré sous 24 h", texte: "Vous choisissez le créneau, on arrive avec l'appareil." },
  { icone: "cle", titre: "Installation incluse", texte: "Mise en service et explications, sans aucuns travaux." },
  { icone: "bouclier", titre: "Appareils entretenus", texte: "Testés et nettoyés entre chaque location." },
  { icone: "retour", titre: "Récupéré chez vous", texte: "En fin de location, on reprend tout. Caution rendue." },
];

const PASTILLES: Record<string, { etiquette: string; couleur: string; fond: string; surface: string; puces: string[] }> = {
  essentiel: { etiquette: "MODÈLE STANDARD", couleur: "#0369A1", fond: "#E0F2FE", surface: "pièces de 15 à 25 m²", puces: ["Silencieux", "Prise standard"] },
  confort: { etiquette: "GRANDES PIÈCES", couleur: "#4338CA", fond: "#EEF2FF", surface: "pièces de 20 à 30 m²", puces: ["Plus puissant", "Prise standard"] },
};
export function infoModele(id: string) { return PASTILLES[id] ?? PASTILLES.essentiel; }

/** Les deux climatiseurs en cartes compactes. */
export function CartesModeles() {
  return (
    <div className="lc-g2" style={{ marginBottom: 64 }}>
      {CLIMATISEURS.map(m => {
        const p = infoModele(m.id);
        return (
          <article key={m.id} className="lc-glace lc-modele">
            {m.photo && <img src={m.photo.src} alt={m.photo.alt} width={m.photo.largeur} height={m.photo.hauteur} />}
            <div className="lc-modele-texte">
              <span className="lc-modele-etiquette" style={{ background: p.fond, color: p.couleur }}>{p.etiquette}</span>
              <h3>{m.nom}</h3>
              <p>{m.puissance} · {p.surface}</p>
              <div className="lc-puces">{p.puces.map(x => <span key={x}>{x}</span>)}</div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export type Forfait = { nom: string; prix: string; duree: string; bouton: string; lien?: string; vedette?: boolean; badge?: string; inclus?: string[] };
export const INCLUS = [TEXTES.installation, TEXTES.livraisonCourt, "Support 7j/7", "Contrat de location écrit"];
export const FORFAITS: Forfait[] = [
  { nom: "Week-end", prix: "74 €", duree: "3 jours minimum", bouton: "Réserver" },
  { nom: "Semaine Fraîcheur", prix: "134 €", duree: "7 jours", bouton: "Réserver ma semaine", vedette: true },
  { nom: "Mois Sérénité", prix: "384 €", duree: "30 jours", bouton: "Réserver" },
];

/** Les trois forfaits, celui du milieu mis en avant. */
export function Forfaits({ forfaits = FORFAITS }: { forfaits?: Forfait[] }) {
  return (
    <div className="lc-g3 lc-forfaits">
      {forfaits.map(f => (
        <div key={f.nom} className={f.vedette ? "lc-forfait lc-forfait-vedette" : "lc-glace lc-forfait"}>
          {f.vedette && <span className="lc-badge-choisi"><span style={{ color: "#D97706" }}>★</span> {f.badge ?? "Le plus choisi"}</span>}
          <div className="lc-forfait-nom">{f.nom}</div>
          <div className="lc-forfait-prix">{f.prix}</div>
          <div className="lc-forfait-duree">{f.duree}</div>
          <ul>
            {(f.inclus ?? INCLUS).map(x => <li key={x}><span aria-hidden="true">✓</span>{x}</li>)}
          </ul>
          {f.lien?.startsWith("/") ? <Link href={f.lien} className="lc-forfait-bouton">{f.bouton}</Link> : <a href={f.lien ?? SITE.telephoneLien} className="lc-forfait-bouton">{f.bouton}</a>}
        </div>
      ))}
    </div>
  );
}

export const NOTE_TARIFS = `Prix par appareil · modèle attribué selon les disponibilités · ${TEXTES.caution.replace("Caution", "caution")}`;

/** Bandeau « Vous êtes une entreprise ? » qui mène à la page Professionnels. */
export function BandePro() {
  return (
    <div className="lc-bande-pro">
      <span className="lc-bande-pro-icone"><Icone nom="immeuble" taille={32} couleur="#0369A1" /></span>
      <div>
        <h3>Vous êtes une entreprise ?</h3>
        <p>Bureaux, commerces, ateliers, événements : plusieurs appareils, facture professionnelle, courte ou longue durée.</p>
      </div>
      <div className="lc-bande-pro-actions">
        <Link href="/contact" className="lc-bouton-glace">Devis professionnel</Link>
        <Link href="/professionnels" className="lc-lien">Découvrir l&apos;offre pro →</Link>
      </div>
    </div>
  );
}

export const ETAPES = [
  { titre: "Vous nous appelez", texte: "On vérifie la disponibilité et on choisit votre forfait." },
  { titre: "On confirme", texte: "Créneau et prix de livraison fixés, récapitulatif par SMS." },
  { titre: "Livraison et installation", texte: "On installe l'appareil chez vous, prêt à souffler." },
  { titre: "Récupération", texte: "On reprend l'appareil, votre caution vous est rendue." },
];

/** « Comment ça marche » en 4 étapes. */
export function Etapes({ etiquette = "Comment ça marche", titre = "Un appel. On s'occupe du reste.", etapes = ETAPES }: { etiquette?: string; titre?: string; etapes?: { titre: string; texte: string }[] }) {
  return (
    <section className="lc-section">
      <div className="lc-conteneur lc-etroit">
        <TitreSection etiquette={etiquette} titre={titre} />
        <ol className="lc-etapes">
          {etapes.map((e, i) => (
            <li key={e.titre}>
              <span className="lc-glace lc-etape-num">{i + 1}</span>
              <div>
                <h3>{e.titre}</h3>
                <p>{e.texte}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Questions fréquentes en accordéon. */
export function FAQ({ items, titre = "Tout ce que vous voulez savoir" }: { items: { q: string; a: string }[]; titre?: string }) {
  return (
    <section className="lc-section">
      <div className="lc-conteneur" style={{ maxWidth: 760 }}>
        <p className="lc-etiquette" style={{ textAlign: "center" }}>Questions fréquentes</p>
        <h2 className="lc-h2 lc-h2-moyen" style={{ textAlign: "center", marginBottom: 40 }}>{titre}</h2>
        <div style={{ display: "grid", gap: 10 }}>
          {items.map(({ q, a }) => (
            <details key={q} className="lc-glace lc-faq">
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Dernier appel à l'action, en bas de page. */
export function AppelFinal({ titre = "Besoin de fraîcheur rapidement ?", texte = "Réponse immédiate, 7j/7 de 8 h à 20 h.", devis = true }: { titre?: string; texte?: string; devis?: boolean }) {
  return (
    <section className="lc-section" style={{ textAlign: "center", paddingTop: 110, paddingBottom: 120 }}>
      <h2 className="lc-h2 lc-h2-grand">{titre}</h2>
      <p className="lc-chapeau" style={{ marginBottom: 36 }}>{texte}</p>
      <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
        <a href={SITE.telephoneLien} className="lc-bouton-ciel">{SITE.telephoneAffiche}</a>
        <a href={SITE.whatsappLien} target="_blank" rel="noopener" className="lc-bouton-contour">WhatsApp</a>
        {devis && <Link href="/contact" className="lc-bouton-contour">Demander un devis</Link>}
      </div>
    </section>
  );
}

export const FAQ_GENERALE = [
  { q: "Quelle surface peut refroidir un climatiseur mobile ?", a: "Un modèle 7 000 BTU convient aux pièces de 15 à 25 m². Pour les pièces de 20 à 30 m², nous proposons des modèles 9 000 BTU, selon les disponibilités. Appelez-nous pour être conseillé." },
  { q: "Comment fonctionne la caution ?", a: TEXTES.cautionDetail },
  { q: "Combien coûte la livraison ?", a: TEXTES.livraisonDetail },
  { q: "Livrez-vous en dehors d'Orléans ?", a: "Oui — nous desservons l'ensemble du Loiret : Olivet, Saran, Meung-sur-Loire, La Ferté-Saint-Aubin, Lamotte-Beuvron, Saint-Ay, Saint-Jean-le-Blanc, Ardon et bien d'autres communes." },
  { q: "Faut-il faire des travaux pour installer un climatiseur mobile ?", a: "Non. Il suffit d'une fenêtre pour évacuer l'air chaud via le tuyau fourni. Nous nous en chargeons lors de la livraison." },
  { q: "Proposez-vous des tarifs pour les professionnels ?", a: "Oui. Nous établissons des devis sur mesure pour les entreprises, chantiers, événements et locations longue durée, avec facture professionnelle. Demandez un devis par téléphone ou via le formulaire." },
];
