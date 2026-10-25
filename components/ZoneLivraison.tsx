"use client";
import { useMemo, useState } from "react";
import { CARTE, COMMUNES, DEPARTEMENTS } from "@/lib/carte";
import { SITE } from "@/lib/site";

// ─────────────────────────────────────────────────────────────
// ZONE DE LIVRAISON — carte réelle du Loiret et des départements voisins
// + vérificateur de commune
// Distances à vol d'oiseau depuis La Ferté-Saint-Aubin.
// ─────────────────────────────────────────────────────────────

export const ZONES = [
  { id: 1, max: 20, nom: "Zone 1 — À proximité", couleur: "#38BDF8", texte: "Notre secteur le plus proche : livraison possible sous 24 h selon disponibilités." },
  { id: 2, max: 35, nom: "Zone 2 — Agglomération et alentours", couleur: "#818CF8", texte: "Métropole orléanaise et communes voisines : livraison sur rendez-vous." },
  { id: 3, max: Infinity, nom: "Zone 3 — Loiret et départements voisins", couleur: "#94A3B8", texte: "Reste du Loiret, Loir-et-Cher, Cher, Eure-et-Loir… : intervention sur devis." },
];
const zoneDe = (km: number) => ZONES.find(z => km <= z.max) ?? ZONES[2];

const VILLES_AFFICHEES = ["Orléans", "Lamotte-Beuvron", "Pithiviers", "Montargis", "Gien", "Sully-sur-Loire"];
const VILLES_SECONDAIRES = ["Sully-sur-Loire"]; // masquées sur téléphone

const normaliser = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/['’-]/g, " ").replace(/^(la|le|les|l) /, "").replace(/\bst\b/g, "saint").replace(/\s+/g, " ").trim();

const INDEX = COMMUNES.map(c => ({ c, n: normaliser(c[0]) }));

export default function ZoneLivraison({ fond = "#090E1A" }: { fond?: string }) {
  const [saisie, setSaisie] = useState("");
  const [choix, setChoix] = useState<(typeof COMMUNES)[number] | null>(null);

  const suggestions = useMemo(() => {
    const q = normaliser(saisie);
    if (q.length < 2) return [];
    const debut = INDEX.filter(i => i.n.startsWith(q));
    const contient = INDEX.filter(i => !i.n.startsWith(q) && i.n.includes(q));
    return [...debut, ...contient].slice(0, 6).map(i => i.c);
  }, [saisie]);

  const villes = VILLES_AFFICHEES.map(n => COMMUNES.find(c => c[0] === n)).filter((c): c is (typeof COMMUNES)[number] => !!c);
  const r1 = 20 * CARTE.pixelsParKm, r2 = 35 * CARTE.pixelsParKm;
  const { x: bx, y: by } = CARTE.base;
  const zoneChoisie = choix ? zoneDe(choix[2]) : null;
  const introuvable = saisie.trim().length >= 3 && suggestions.length === 0 && !choix;

  const choisir = (c: (typeof COMMUNES)[number]) => { setChoix(c); setSaisie(c[0]); };

  return (
    <section className="zone-section" style={{ background: fond, padding: "88px 24px", position: "relative", overflow: "hidden" }}>
      <div className="zone-grille" aria-hidden="true" />
      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p className="section-label section-label-light">Zone d&apos;intervention</p>
        <h2 style={{ textAlign: "center", fontSize: "clamp(28px,4.2vw,44px)", fontWeight: 800, color: "#F0F6FF", letterSpacing: "-1.4px", lineHeight: 1.1, marginBottom: 14 }}>
          Le Loiret et ses alentours, depuis{" "}
          <span style={{ background: "linear-gradient(135deg,#7DD3FC,#38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>La Ferté-Saint-Aubin.</span>
        </h2>
        <p style={{ textAlign: "center", color: "rgba(203,213,225,0.9)", fontSize: 16.5, maxWidth: 620, margin: "0 auto 48px", lineHeight: 1.7 }}>
          Installation toujours incluse. Livraison et récupération selon la distance, précisées dans votre devis.
        </p>

        <div className="zone-grid" style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 32, alignItems: "center" }}>
          {/* ── CARTE */}
          <div className="zone-carte" style={{ background: "linear-gradient(160deg,rgba(30,41,59,0.65),rgba(15,23,42,0.85))", border: "1px solid rgba(148,163,184,0.16)", borderRadius: 28, padding: "18px 14px 10px", boxShadow: "0 30px 80px rgba(0,0,0,0.35)" }}>
            <svg viewBox={`0 0 ${CARTE.largeur} ${CARTE.hauteur}`} role="img" aria-label="Carte du Loiret et des départements voisins avec les zones de livraison autour de La Ferté-Saint-Aubin" style={{ width: "100%", height: "auto", display: "block" }}>
              <defs>
                <radialGradient id="grad-z1"><stop offset="0%" stopColor="#38BDF8" stopOpacity="0.42" /><stop offset="100%" stopColor="#38BDF8" stopOpacity="0.16" /></radialGradient>
              </defs>

              {/* Départements voisins (en partie) */}
              {CARTE.voisins.map(v => (
                <path key={v.code} d={v.d} fill={v.code === "41" ? "rgba(148,163,184,0.06)" : "rgba(148,163,184,0.03)"} stroke="rgba(148,163,184,0.24)" strokeWidth="1" strokeLinejoin="round" />
              ))}
              {/* Loiret */}
              <path d={CARTE.loiret} fill="rgba(148,163,184,0.09)" stroke="rgba(203,213,225,0.6)" strokeWidth="1.4" strokeLinejoin="round" />

              {/* Zones */}
              <circle cx={bx} cy={by} r={r2} fill="rgba(129,140,248,0.13)" stroke="rgba(129,140,248,0.55)" strokeWidth="1.2" strokeDasharray="5 5" />
              <circle cx={bx} cy={by} r={r1} fill="url(#grad-z1)" stroke="rgba(56,189,248,0.75)" strokeWidth="1.4" />

              {/* Communes (texture) */}
              <g fill="#CBD5E1">{COMMUNES.map(c => <circle key={c[0] + c[3]} cx={c[3]} cy={c[4]} r="1.1" opacity={c[1] === "45" ? 0.28 : 0.16} />)}</g>

              {/* Noms des départements */}
              {CARTE.voisins.map(v => (
                <text key={v.code} x={v.lx} y={v.ly} textAnchor="middle" fontSize="11" fontWeight="700" letterSpacing="1.5" fill="rgba(203,213,225,0.45)">{v.nom.toUpperCase()}</text>
              ))}

              {/* Villes repères */}
              {villes.map(c => (
                <g key={c[0]}>
                  <circle cx={c[3]} cy={c[4]} r="3.4" fill="#E2E8F0" />
                  <text className={VILLES_SECONDAIRES.includes(c[0]) ? "etiquette etiquette-secondaire" : "etiquette"} x={c[3] + 7} y={c[4] + 4} fontSize="13" fontWeight="700" fill="#E2E8F0" style={{ paintOrder: "stroke" }} stroke="#0B1222" strokeWidth="3">{c[0]}</text>
                </g>
              ))}

              {/* Commune recherchée */}
              {choix && (
                <g>
                  <line className="trajet" x1={bx} y1={by} x2={choix[3]} y2={choix[4]} stroke={zoneChoisie?.couleur} strokeWidth="2" strokeDasharray="4 5" />
                  <circle cx={choix[3]} cy={choix[4]} r="7" fill={zoneChoisie?.couleur} stroke="#fff" strokeWidth="2" />
                  <text className="etiquette etiquette-forte" x={choix[3] + 11} y={choix[4] - 9} fontSize="14" fontWeight="800" fill="#fff" style={{ paintOrder: "stroke" }} stroke="#0B1222" strokeWidth="4">{choix[0]} · {Math.round(choix[2])} km</text>
                </g>
              )}

              {/* Base */}
              <circle className="base-pulse" cx={bx} cy={by} r="10" fill="none" stroke="#38BDF8" strokeWidth="2" />
              <circle cx={bx} cy={by} r="7.5" fill="#38BDF8" stroke="#fff" strokeWidth="2.5" />
              <text className="etiquette" textAnchor="end" x={bx - 13} y={by + 5} fontSize="13" fontWeight="800" fill="#7DD3FC" style={{ paintOrder: "stroke" }} stroke="#0B1222" strokeWidth="3">Notre base</text>
            </svg>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, padding: "6px 8px 4px", fontSize: 12, color: "rgba(203,213,225,0.75)" }}>
              <span>Distances à vol d&apos;oiseau depuis La Ferté-Saint-Aubin</span>
              <span>Loiret (45) et départements voisins</span>
            </div>
          </div>

          {/* ── VÉRIFICATEUR + LÉGENDE */}
          <div>
            <div style={{ background: "#fff", borderRadius: 24, padding: "26px 24px", boxShadow: "0 24px 60px rgba(0,0,0,0.35)" }}>
              <label htmlFor="commune-zone" style={{ display: "block", fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 4 }}>Livrez-vous chez moi ?</label>
              <p style={{ fontSize: 14, color: "#475569", marginBottom: 14 }}>Tapez votre commune, réponse immédiate.</p>
              <div style={{ position: "relative" }}>
                <input
                  id="commune-zone"
                  value={saisie}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSaisie(e.target.value); setChoix(null); }}
                  placeholder="Ex : Olivet, Saran, Jargeau…"
                  autoComplete="off"
                  role="combobox"
                  aria-expanded={suggestions.length > 0 && !choix}
                  aria-controls="liste-communes"
                  style={{ width: "100%", padding: "15px 16px 15px 44px", fontSize: 16, border: "2px solid #CBD5E1", borderRadius: 14, fontFamily: "inherit", color: "#0F172A", outline: "none" }}
                />
                <span aria-hidden="true" style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", fontSize: 17 }}>📍</span>
                {suggestions.length > 0 && !choix && (
                  <ul id="liste-communes" role="listbox" style={{ listStyle: "none", position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0, background: "#fff", border: "1px solid #E2E8F0", borderRadius: 14, boxShadow: "0 18px 40px rgba(15,23,42,0.18)", overflow: "hidden", zIndex: 5 }}>
                    {suggestions.map(c => (
                      <li key={c[0] + c[1]} role="option" aria-selected="false">
                        <button type="button" onClick={() => choisir(c)} style={{ width: "100%", textAlign: "left", padding: "12px 16px", background: "none", border: "none", borderBottom: "1px solid #F1F5F9", fontSize: 15, fontFamily: "inherit", color: "#0F172A", cursor: "pointer", display: "flex", justifyContent: "space-between" }}>
                          <span style={{ fontWeight: 600 }}>{c[0]}</span>
                          <span style={{ color: "#64748B", fontSize: 13 }}>{DEPARTEMENTS[c[1]] ?? ""} ({c[1]})</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {choix && zoneChoisie && (
                <div aria-live="polite" style={{ marginTop: 16, borderRadius: 16, padding: "16px 18px", background: "#F0F9FF", border: `2px solid ${zoneChoisie.couleur}` }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#0F172A", marginBottom: 4 }}>✓ {choix[0]} est desservie</div>
                  <div style={{ fontSize: 14, color: "#334155", lineHeight: 1.55 }}>
                    <strong>{zoneChoisie.nom}</strong> · environ {Math.round(choix[2])} km de notre base.<br />{zoneChoisie.texte}
                  </div>
                  <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
                    <a href={SITE.telephoneLien} style={{ background: "linear-gradient(135deg,#2563EB,#1E40AF)", color: "#fff", padding: "10px 18px", borderRadius: 50, fontSize: 14, fontWeight: 800 }}>📞 {SITE.telephoneAffiche}</a>
                    <a href="/contact" style={{ border: "2px solid #2563EB", color: "#1D4ED8", padding: "8px 16px", borderRadius: 50, fontSize: 14, fontWeight: 800 }}>Demander un devis</a>
                  </div>
                </div>
              )}
              {introuvable && (
                <div aria-live="polite" style={{ marginTop: 16, borderRadius: 16, padding: "14px 16px", background: "#F8FAFC", border: "1px solid #E2E8F0", fontSize: 14, color: "#334155", lineHeight: 1.55 }}>
                  Commune introuvable dans notre liste ? Appelez-nous au <a href={SITE.telephoneLien} style={{ color: "#1D4ED8", fontWeight: 800 }}>{SITE.telephoneAffiche}</a> : nous intervenons souvent au-delà, sur devis.
                </div>
              )}
            </div>

            <ul style={{ listStyle: "none", marginTop: 22, display: "flex", flexDirection: "column", gap: 12 }}>
              {ZONES.map(z => (
                <li key={z.id} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: zoneChoisie?.id === z.id ? "rgba(56,189,248,0.10)" : "rgba(255,255,255,0.04)", border: `1px solid ${zoneChoisie?.id === z.id ? z.couleur : "rgba(148,163,184,0.16)"}`, borderRadius: 16, padding: "14px 16px", transition: "all .25s" }}>
                  <span aria-hidden="true" style={{ width: 14, height: 14, borderRadius: "50%", background: z.couleur, flexShrink: 0, marginTop: 4, boxShadow: `0 0 0 4px ${z.couleur}33` }} />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#F1F5F9" }}>{z.nom}{z.max !== Infinity && <span style={{ fontWeight: 600, color: "rgba(203,213,225,0.8)" }}> · jusqu&apos;à {z.max} km</span>}</div>
                    <div style={{ fontSize: 14, color: "rgba(203,213,225,0.85)", lineHeight: 1.5, marginTop: 2 }}>{z.texte}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
