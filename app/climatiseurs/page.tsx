import type { Metadata } from "next";
import Link from "next/link";
import Icone from "@/components/Icones";
import { PageGivre, EntetePage, DuoBoutons, Confiance, TitreSection, CartesIcones, Forfaits, NOTE_TARIFS, BandePro, AppelFinal, infoModele } from "@/components/Sections";
import { CLIMATISEURS, type Modele } from "@/lib/catalogue";
import { SITE, TEXTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nos Climatiseurs Mobiles à Louer — Orléans & Loiret",
  description: "Climatiseurs mobiles à louer à Orléans et dans le Loiret : 7 000 BTU et 9 000 BTU. Installation et mise en service incluses, livraison sur devis.",
};

// Retire l'émoji placé devant les pastilles du catalogue.
const sansEmoji = (s: string) => s.replace(/^[^\p{L}\p{N}]+/u, "");

function FicheModele({ m, inverse }: { m: Modele; inverse: boolean }) {
  const p = infoModele(m.id);
  return (
    <article id={m.id} className={"lc-glace lc-fiche" + (inverse ? " lc-fiche-inverse" : "")}>
      <div className="lc-fiche-photo">
        {m.photo && <img src={m.photo.src} alt={m.photo.alt} width={m.photo.largeur} height={m.photo.hauteur} />}
        <span className="lc-modele-etiquette lc-fiche-etiquette" style={{ background: p.fond, color: p.couleur }}>{p.etiquette}</span>
      </div>
      <div className="lc-fiche-texte">
        <p className="lc-mini-etiquette">{m.gamme} · location</p>
        <h3>{m.nom} <span>{m.puissance}</span></h3>
        <p className="lc-fiche-accroche">{m.accroche}</p>
        <div className="lc-puces lc-puces-fiche">{m.points.map(s => <span key={s}>{sansEmoji(s)}</span>)}</div>
        <ul className="lc-coches">
          {m.atouts.map(a => <li key={a}><Icone nom="coche" taille={18} couleur="#0284C7" epaisseur={2.6} />{a}</li>)}
        </ul>
        <div className="lc-fiche-prix">
          <div>
            <span className="lc-fiche-petit">À partir de</span>
            <strong>{m.prixAPartirDe}</strong>
            <span className="lc-fiche-petit">{m.prixPeriode}</span>
          </div>
          <div className="lc-fiche-inclus">✓ {TEXTES.installation}<br />✓ {TEXTES.livraisonCourt}</div>
        </div>
        <div className="lc-fiche-actions">
          <a href={SITE.telephoneLien} className="lc-bouton-ciel lc-bouton-moyen"><Icone nom="telephone" taille={18} epaisseur={2.2} />Réserver ce modèle</a>
          <Link href="/contact" className="lc-bouton-sombre">Demander un devis</Link>
        </div>
      </div>
    </article>
  );
}

export default function Climatiseurs() {
  return (
    <PageGivre givre bandeau={`${CLIMATISEURS.length} modèles disponibles · Orléans & Loiret · Installation incluse`}>
      <EntetePage
        etiquette={`Catalogue · ${CLIMATISEURS.length} modèles`}
        titre={<>Des climatiseurs choisis<br /><span style={{ color: "#BAE6FD" }}>pour votre confort.</span></>}
        intro="Du 7 000 BTU pour une chambre au 9 000 BTU pour les pièces plus grandes : nous vous proposons le modèle adapté à votre pièce et l'installons chez vous, sur Orléans et le Loiret."
      >
        <DuoBoutons centre />
        <Confiance centre elements={["Installation incluse", "Nettoyé entre chaque location"]} />
      </EntetePage>

      {/* CATALOGUE */}
      <section id="catalogue" className="lc-section">
        <div className="lc-conteneur lc-etroit">
          <TitreSection etiquette="Notre catalogue" titre="Un modèle pour chaque pièce." chapeau="Sélectionnés pour leur fiabilité et leur installation sans travaux. Le modèle vous est attribué selon votre pièce et les disponibilités : nous vous proposons toujours le plus adapté." />
          <div style={{ display: "grid", gap: 36 }}>
            {CLIMATISEURS.map((m, i) => <FicheModele key={m.id} m={m} inverse={i % 2 === 1} />)}
          </div>
        </div>
      </section>

      {/* FORFAITS */}
      <section id="tarifs" className="lc-section">
        <div className="lc-conteneur lc-etroit">
          <TitreSection etiquette="Nos forfaits" titre="Le même prix pour les deux modèles." chapeau="Choisissez simplement la durée. L'installation est toujours comprise." />
          <Forfaits />
          <p className="lc-note">{NOTE_TARIFS}</p>
          <BandePro />
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="lc-section">
        <div className="lc-conteneur">
          <TitreSection etiquette="Pourquoi LocationClim45" titre="La fraîcheur sans les contraintes." />
          <CartesIcones cartes={[
            { icone: "cle", titre: "Installation incluse", texte: "On installe, on règle et on vous explique le fonctionnement." },
            { icone: "camion", titre: "Livraison sur devis", texte: "Orléans, Olivet, Saran et tout le Loiret, selon la distance et la durée." },
            { icone: "cadenas", titre: "Caution simple", texte: "150 € par appareil, par chèque non encaissé ou virement, rendue en fin de location." },
            { icone: "telephone", titre: "Disponible 7j/7", texte: "Un souci ? On vous répond rapidement, même le week-end." },
          ]} />
        </div>
      </section>

      <AppelFinal titre="Vous hésitez entre deux modèles ?" texte="Appelez-nous : on vous conseille gratuitement selon votre pièce, 7j/7 de 8 h à 20 h." />
    </PageGivre>
  );
}
