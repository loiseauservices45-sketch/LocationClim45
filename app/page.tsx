import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import FloatCTA from "@/components/FloatCTA";
import AvisClients from "@/components/AvisClients";
import ZoneLivraison from "@/components/ZoneLivraison";
import FondGivre from "@/components/FondGivre";
import TransitionGivre from "@/components/TransitionGivre";
import BoutonGivre from "@/components/BoutonGivre";
import { CLIMATISEURS } from "@/lib/catalogue";
import { SITE, TEXTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Location Climatiseur Orléans & Loiret — Installation incluse",
  description: "Location de climatiseur mobile à Orléans et dans le Loiret, pour particuliers et professionnels. Installation et mise en service incluses, livraison sur devis.",
};

const ICONE_TEL = "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z";

function Flocon({ couleur = "#0369A1", taille = 22, tourne = true }: { couleur?: string; taille?: number; tourne?: boolean }) {
  return (
    <svg className={tourne ? "lc-tourne" : undefined} width={taille} height={taille} viewBox="0 0 24 24" fill="none" stroke={couleur} strokeWidth="2.2" strokeLinecap="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M12 2v20M4.9 6l14.2 12M4.9 18L19.1 6" /><path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5" />
    </svg>
  );
}

const Coche = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7DD3FC" strokeWidth="2.4" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg>
);

const RAISONS = [
  { titre: "Livré sous 24 h", texte: "Vous choisissez le créneau, on arrive avec l'appareil.", icone: <><path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></> },
  { titre: "Installation incluse", texte: "Mise en service et explications, sans aucuns travaux.", icone: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" /> },
  { titre: "Appareils entretenus", texte: "Testés et nettoyés entre chaque location.", icone: <><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></> },
  { titre: "Récupéré chez vous", texte: "En fin de location, on reprend tout. Caution rendue.", icone: <><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v5h5" /></> },
];

const INCLUS = [TEXTES.installation, TEXTES.livraisonCourt, "Support 7j/7", "Contrat de location écrit"];
const FORFAITS = [
  { nom: "Week-end", prix: "74 €", duree: "3 jours minimum", bouton: "Réserver", vedette: false },
  { nom: "Semaine Fraîcheur", prix: "134 €", duree: "7 jours", bouton: "Réserver ma semaine", vedette: true },
  { nom: "Mois Sérénité", prix: "384 €", duree: "30 jours", bouton: "Réserver", vedette: false },
];

const PASTILLES: Record<string, { etiquette: string; couleur: string; fond: string; surface: string; puces: string[] }> = {
  essentiel: { etiquette: "MODÈLE STANDARD", couleur: "#0369A1", fond: "#E0F2FE", surface: "pièces de 15 à 25 m²", puces: ["Silencieux", "Prise standard"] },
  confort: { etiquette: "GRANDES PIÈCES", couleur: "#4338CA", fond: "#EEF2FF", surface: "pièces de 20 à 30 m²", puces: ["Plus puissant", "Prise standard"] },
};

const ETAPES = [
  { titre: "Vous nous appelez", texte: "On vérifie la disponibilité et on choisit votre forfait." },
  { titre: "On confirme", texte: "Créneau et prix de livraison fixés, récapitulatif par SMS." },
  { titre: "Livraison et installation", texte: "On installe l'appareil chez vous, prêt à souffler." },
  { titre: "Récupération", texte: "On reprend l'appareil, votre caution vous est rendue." },
];

export default function Home() {
  return (
    <div className="lc-page">
      <FondGivre />
      <TransitionGivre />
      <div className="lc-contenu">
        <Banner />
        <Header />
        <main>
          {/* ===== 1. ACCUEIL ===== */}
          <section className="lc-section lc-hero">
            <div className="lc-hero-grille">
              <div>
                <p className="lc-pastille-lieu"><span />Orléans &amp; Loiret (45)</p>
                <h1 className="lc-h1">La fraîcheur,<br /><span style={{ color: "#BAE6FD" }}>livrée chez vous</span><br />en 24 h.</h1>
                <p className="lc-intro">Location de climatiseurs mobiles, livrés, installés et récupérés chez vous. Pour les particuliers et les professionnels.</p>
                <div className="lc-g2 lc-duo">
                  <a href={SITE.telephoneLien} className="lc-gros-bouton lc-gros-appel">
                    <span className="lc-gros-titre"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={ICONE_TEL} /></svg>Nous appeler</span>
                    <span className="lc-gros-sous">{SITE.telephoneAffiche}</span>
                  </a>
                  <BoutonGivre className="lc-gros-bouton lc-gros-fraicheur lc-reflet lc-pulse">
                    <span className="lc-gros-titre"><Flocon />Je veux de la fraîcheur</span>
                    <span className="lc-gros-sous" style={{ color: "#0369A1" }}>Voir les prix →</span>
                  </BoutonGivre>
                </div>
                <div className="lc-confiance">
                  <span><span style={{ color: "#FBBF24", letterSpacing: 2 }}>★★★★★</span> 5/5 sur Google</span>
                  <span><Coche /> Installation incluse</span>
                  <span><Coche /> Contrat de location écrit</span>
                </div>
              </div>
              <div className="lc-hero-photo">
                <div className="lc-hero-halo" aria-hidden="true" />
                <BoutonGivre className="lc-glace lc-carte-photo lc-flotte" libelle="Je veux de la fraîcheur : voir les prix et les modèles">
                  <span className="lc-carte-photo-img">
                    <img src="/images/climatiseur-carrera-tristar.webp" alt="Climatiseur mobile blanc avec sa télécommande, proposé à la location par LocationClim45" width={900} height={1368} />
                  </span>
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
                  <span className="lc-carte-photo-bandeau lc-reflet"><Flocon couleur="#BAE6FD" taille={20} />Rafraîchir · voir les prix</span>
                  <span className="lc-dispo">Disponible maintenant</span>
                </BoutonGivre>
              </div>
            </div>
          </section>

          {/* ===== 2. POURQUOI NOUS + 2 AVIS ===== */}
          <section className="lc-section">
            <div className="lc-conteneur">
              <p className="lc-etiquette" style={{ textAlign: "center" }}>Pourquoi LocationClim45</p>
              <h2 className="lc-h2" style={{ textAlign: "center" }}>Simple. Rapide. Fiable.</h2>
              <p className="lc-chapeau">Vous n&apos;avez rien à porter, rien à installer, rien à bricoler.</p>
              <div className="lc-g4">
                {RAISONS.map(r => (
                  <div key={r.titre} className="lc-glace lc-raison">
                    <div className="lc-rond-icone"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0369A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{r.icone}</svg></div>
                    <h3>{r.titre}</h3>
                    <p>{r.texte}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 64 }}>
                <AvisClients debut={0} fin={2} etiquette="Ce que nos clients en disent" />
              </div>
            </div>
          </section>

          {/* ===== 3. CLIMATISEURS + TARIFS (destination du bouton fraîcheur) ===== */}
          <section id="tarifs" className="lc-section">
            <div className="lc-conteneur lc-etroit">
              <p className="lc-etiquette" style={{ textAlign: "center" }}>Nos climatiseurs et nos forfaits</p>
              <h2 className="lc-h2" style={{ textAlign: "center" }}>Des tarifs clairs, sans surprise.</h2>
              <p className="lc-chapeau">Deux modèles, un seul prix. Nous vous conseillons le bon selon la taille de votre pièce.</p>

              <div className="lc-g2" style={{ marginBottom: 64 }}>
                {CLIMATISEURS.map(m => {
                  const p = PASTILLES[m.id] ?? PASTILLES.essentiel;
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

              <div className="lc-g3 lc-forfaits">
                {FORFAITS.map(f => (
                  <div key={f.nom} className={f.vedette ? "lc-forfait lc-forfait-vedette" : "lc-glace lc-forfait"}>
                    {f.vedette && <span className="lc-badge-choisi"><span style={{ color: "#D97706" }}>★</span> Le plus choisi</span>}
                    <div className="lc-forfait-nom">{f.nom}</div>
                    <div className="lc-forfait-prix">{f.prix}</div>
                    <div className="lc-forfait-duree">{f.duree}</div>
                    <ul>
                      {INCLUS.map(x => <li key={x}><span aria-hidden="true">✓</span>{x}</li>)}
                    </ul>
                    <a href={SITE.telephoneLien} className="lc-forfait-bouton">{f.bouton}</a>
                  </div>
                ))}
              </div>
              <p className="lc-note">Prix par appareil · modèle attribué selon les disponibilités · {TEXTES.caution.replace("Caution", "caution")}</p>

              {/* Bandeau professionnels -> page Professionnels */}
              <div className="lc-bande-pro">
                <span className="lc-bande-pro-icone"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0369A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18" /><path d="M5 21V5l7-3v19" /><path d="M12 8h7v13" /><path d="M8 8h1M8 12h1M8 16h1M15 12h1M15 16h1" /></svg></span>
                <div>
                  <h3>Vous êtes une entreprise ?</h3>
                  <p>Bureaux, commerces, ateliers, événements : plusieurs appareils, facture professionnelle, courte ou longue durée.</p>
                </div>
                <div className="lc-bande-pro-actions">
                  <Link href="/contact" className="lc-bouton-glace">Devis professionnel</Link>
                  <Link href="/professionnels" className="lc-lien">Découvrir l&apos;offre pro →</Link>
                </div>
              </div>
            </div>
          </section>

          {/* ===== 4. COMMENT ÇA MARCHE ===== */}
          <section className="lc-section">
            <div className="lc-conteneur lc-etroit">
              <p className="lc-etiquette" style={{ textAlign: "center" }}>Comment ça marche</p>
              <h2 className="lc-h2" style={{ textAlign: "center", marginBottom: 56 }}>Un appel. On s&apos;occupe du reste.</h2>
              <ol className="lc-etapes">
                {ETAPES.map((e, i) => (
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

          {/* ===== 5. ZONE DE LIVRAISON ===== */}
          <ZoneLivraison fond="transparent" />

          {/* ===== 6. AVIS (2 suivants) ===== */}
          <section className="lc-section">
            <div className="lc-conteneur lc-etroit">
              <h2 className="lc-h2" style={{ textAlign: "center", fontSize: "clamp(28px,4vw,40px)", marginBottom: 40 }}>Ils nous font confiance</h2>
              <AvisClients debut={2} fin={4} lienGoogle />
            </div>
          </section>

          {/* ===== 7. QUESTIONS FRÉQUENTES ===== */}
          <FAQSection />

          {/* ===== 8. APPEL FINAL ===== */}
          <section className="lc-section" style={{ textAlign: "center", paddingTop: 110, paddingBottom: 120 }}>
            <h2 className="lc-h2" style={{ fontSize: "clamp(32px,5vw,58px)" }}>Besoin de fraîcheur rapidement ?</h2>
            <p className="lc-chapeau" style={{ marginBottom: 36 }}>Réponse immédiate, 7j/7 de 8 h à 20 h.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={SITE.telephoneLien} className="lc-bouton-ciel">{SITE.telephoneAffiche}</a>
              <a href={SITE.whatsappLien} target="_blank" rel="noopener" className="lc-bouton-contour">WhatsApp</a>
              <Link href="/contact" className="lc-bouton-contour">Demander un devis</Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <FloatCTA />
    </div>
  );
}

function FAQSection() {
  const items = [
    { q: "Quelle surface peut refroidir un climatiseur mobile ?", a: "Un modèle 7 000 BTU convient aux pièces de 15 à 25 m². Pour les pièces de 20 à 30 m², nous proposons des modèles 9 000 BTU, selon les disponibilités. Appelez-nous pour être conseillé." },
    { q: "Comment fonctionne la caution ?", a: TEXTES.cautionDetail },
    { q: "Combien coûte la livraison ?", a: TEXTES.livraisonDetail },
    { q: "Livrez-vous en dehors d'Orléans ?", a: "Oui — nous desservons l'ensemble du Loiret : Olivet, Saran, Meung-sur-Loire, La Ferté-Saint-Aubin, Lamotte-Beuvron, Saint-Ay, Saint-Jean-le-Blanc, Ardon et bien d'autres communes." },
    { q: "Faut-il faire des travaux pour installer un climatiseur mobile ?", a: "Non. Il suffit d'une fenêtre pour évacuer l'air chaud via le tuyau fourni. Nous nous en chargeons lors de la livraison." },
    { q: "Proposez-vous des tarifs pour les professionnels ?", a: "Oui. Nous établissons des devis sur mesure pour les entreprises, chantiers, événements et locations longue durée, avec facture professionnelle. Demandez un devis par téléphone ou via le formulaire." },
  ];
  return (
    <section className="lc-section">
      <div className="lc-conteneur" style={{ maxWidth: 760 }}>
        <p className="lc-etiquette" style={{ textAlign: "center" }}>Questions fréquentes</p>
        <h2 className="lc-h2" style={{ textAlign: "center", fontSize: "clamp(28px,4vw,40px)", marginBottom: 40 }}>Tout ce que vous voulez savoir</h2>
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
