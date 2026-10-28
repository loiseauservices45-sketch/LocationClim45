// ─────────────────────────────────────────────────────────────
// TRANSITION « BUÉE » (page déshumidificateurs)
// Au clic sur « Voir les appareils et les prix », l'écran se couvre
// de buée comme une vitre humide, des gouttelettes se forment,
// la page passe aux prix pendant que tout est embué, puis de grosses
// gouttes ruissellent et la buée s'évapore : l'air est sec.
// ─────────────────────────────────────────────────────────────
import { allerVers } from "@/lib/givre";

export const EVENEMENT_BUEE = "locationclim45:buee";
export const DUREE_BUEE = 3150; // ms, animation complète
export const BASCULE_BUEE = 1700; // ms, moment où la page change (écran entièrement embué)

/** Déclenche la transition puis amène le visiteur sur `cible`. */
export function declencherBuee(cible: string) {
  if (typeof window === "undefined") return;
  const calme = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const ecoute = (window as unknown as { __bueePret?: boolean }).__bueePret;
  if (calme || !ecoute) {
    allerVers(cible);
    return;
  }
  window.dispatchEvent(new CustomEvent(EVENEMENT_BUEE, { detail: { cible } }));
}

type Perle = { x: number; y: number; r: number; nait: number };
type Coulee = { x: number; y: number; y0: number; v: number; acc: number; r: number; dep: number; ondule: number; phase: number };

/** Dessine la buée dans `boite`, qui doit contenir canvas.voile-buee et canvas.gouttes-buee. */
export function lancerBuee(boite: HTMLElement) {
  const vv = boite.querySelector<HTMLCanvasElement>("canvas.voile-buee");
  const gv = boite.querySelector<HTMLCanvasElement>("canvas.gouttes-buee");
  if (!vv || !gv) return;
  const W = boite.clientWidth || window.innerWidth;
  const H = boite.clientHeight || window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const R = Math.random;

  const prep = (c: HTMLCanvasElement) => {
    c.width = Math.round(W * dpr);
    c.height = Math.round(H * dpr);
    const x = c.getContext("2d")!;
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
    x.lineCap = "round";
    return x;
  };
  const v = prep(vv);
  const g = prep(gv);
  const S = Math.max(0.6, Math.min(W, H) / 900);
  const surface = (W * H) / (1440 * 900);

  // Toile hors écran : texture de la buée, et traces laissées par les coulées
  const horsEcran = () => {
    const c = document.createElement("canvas");
    c.width = vv.width;
    c.height = vv.height;
    const x = c.getContext("2d")!;
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
    x.lineCap = "round";
    return { c, x };
  };
  const tex = horsEcran();
  const traces = horsEcran();

  // 1. Texture de la buée (calculée une fois)
  const t2 = tex.x;
  const fond = t2.createLinearGradient(0, 0, 0, H);
  fond.addColorStop(0, "#E6F0F2");
  fond.addColorStop(0.55, "#D3E3E8");
  fond.addColorStop(1, "#B7CFD7");
  t2.fillStyle = fond;
  t2.fillRect(0, 0, W, H);
  for (let i = 0; i < 140; i++) {
    const bx = R() * W, by = R() * H, r0 = (40 + R() * 160) * S;
    const tache = t2.createRadialGradient(bx, by, 0, bx, by, r0);
    tache.addColorStop(0, `rgba(255,255,255,${(0.1 + R() * 0.16).toFixed(2)})`);
    tache.addColorStop(1, "rgba(255,255,255,0)");
    t2.fillStyle = tache;
    t2.fillRect(bx - r0, by - r0, r0 * 2, r0 * 2);
  }
  // micro-gouttelettes de condensation
  const nbGrains = Math.round(5200 * surface);
  for (let i = 0; i < nbGrains; i++) {
    t2.fillStyle = `rgba(255,255,255,${(0.35 + R() * 0.5).toFixed(2)})`;
    t2.beginPath(); t2.arc(R() * W, R() * H, 0.4 + R() * 0.9, 0, 6.283); t2.fill();
  }
  for (let i = 0; i < nbGrains / 3; i++) {
    t2.fillStyle = "rgba(20,80,100,0.12)";
    t2.beginPath(); t2.arc(R() * W, R() * H, 0.5 + R() * 0.7, 0, 6.283); t2.fill();
  }

  // 2. Perles d'eau qui se forment sur la vitre
  const perles: Perle[] = [];
  const nbPerles = Math.round(230 * Math.sqrt(surface)) + 40;
  for (let i = 0; i < nbPerles; i++) {
    const gros = R() < 0.12;
    perles.push({ x: R() * W, y: R() * H, r: (gros ? 4.5 + R() * 4 : 1.4 + R() * 3) * S, nait: 0.35 + R() * 1.1 });
  }

  // 3. Grosses gouttes qui ruissellent quand l'air s'assèche
  const coulees: Coulee[] = [];
  const nbCoulees = Math.round(20 * Math.sqrt(surface)) + 8;
  for (let i = 0; i < nbCoulees; i++) {
    const y0 = R() * H * 0.55;
    coulees.push({
      x: ((i + 0.2 + R() * 0.6) / nbCoulees) * W, y: y0, y0, v: 0,
      acc: (700 + R() * 1100) * S, r: (4.5 + R() * 4.5) * S,
      dep: 1.85 + R() * 0.4, ondule: (2 + R() * 5) * S, phase: R() * 6.283,
    });
  }

  // Grosse goutte qui coule : une lentille claire, bord lumineux
  const lentille = (x: number, y: number, r: number, a: number, etire: number) => {
    if (a <= 0.02 || r <= 0) return;
    g.save();
    g.globalAlpha = a;
    g.translate(x, y);
    g.scale(1, etire);
    const corps = g.createRadialGradient(-r * 0.2, -r * 0.3, 0, 0, 0, r);
    corps.addColorStop(0, "rgba(236,254,255,0.55)");
    corps.addColorStop(0.7, "rgba(165,243,252,0.22)");
    corps.addColorStop(1, "rgba(240,253,255,0.75)");
    g.fillStyle = corps;
    g.beginPath(); g.arc(0, 0, r, 0, 6.283); g.fill();
    g.strokeStyle = "rgba(255,255,255,0.85)";
    g.lineWidth = Math.max(0.8, r * 0.14);
    g.beginPath(); g.arc(0, 0, r * 0.92, 0, 6.283); g.stroke();
    g.fillStyle = "#FFFFFF";
    g.beginPath(); g.arc(-r * 0.35, -r * 0.38, r * 0.22, 0, 6.283); g.fill();
    g.restore();
  };

  const goutte = (x: number, y: number, r: number, a: number, etire = 1) => {
    if (a <= 0.02 || r <= 0) return;
    g.save();
    g.globalAlpha = a;
    g.translate(x, y);
    g.scale(1, etire);
    const corps = g.createRadialGradient(0, r * 0.25, 0, 0, 0, r);
    corps.addColorStop(0, "rgba(12,58,74,0.10)");
    corps.addColorStop(0.75, "rgba(12,58,74,0.26)");
    corps.addColorStop(1, "rgba(12,58,74,0.42)");
    g.fillStyle = corps;
    g.beginPath(); g.arc(0, 0, r, 0, 6.283); g.fill();
    if (r > 1.8) {
      g.strokeStyle = "rgba(255,255,255,0.55)";
      g.lineWidth = Math.max(0.6, r * 0.16);
      g.beginPath(); g.arc(0, 0, r * 0.68, 0.35, 2.75); g.stroke();
      g.fillStyle = "rgba(255,255,255,0.95)";
      g.beginPath(); g.arc(-r * 0.36, -r * 0.4, r * 0.24, 0, 6.283); g.fill();
    }
    g.restore();
  };

  // Part de buée restante à la hauteur y (1 = embué, 0 = sec)
  const PLUME = 0.45 * H;
  const restant = (y: number, montee: number, evap: number) => {
    const avant = Math.min(1, Math.max(0, (y - (H - montee * (H + PLUME))) / PLUME));
    const fin = -PLUME + evap * (H + PLUME);
    const apres = Math.min(1, Math.max(0, (y - fin) / PLUME));
    return avant * apres;
  };

  const t0 = performance.now();
  let prec = t0;
  const image = (now: number) => {
    const t = Math.max(0, (now - t0) / 1000);
    const dt = Math.max(0, Math.min((now - prec) / 1000, 0.05));
    prec = Math.max(prec, now);
    const kc = Math.min(1, t / 0.85), montee = 1 - Math.pow(1 - kc, 2);
    const ke = Math.min(1, Math.max(0, (t - 2.1) / 0.85)), evap = ke * ke * (3 - 2 * ke);

    // Les coulées avancent et effacent la buée sur leur passage
    for (const c of coulees) {
      if (t < c.dep) continue;
      const yA = c.y, xA = c.x + Math.sin(c.phase + yA / (60 * S)) * c.ondule;
      c.v += c.acc * dt;
      c.y += c.v * dt;
      const xB = c.x + Math.sin(c.phase + c.y / (60 * S)) * c.ondule;
      // trace nette au centre, bords plus doux
      traces.x.strokeStyle = "rgba(0,0,0,0.3)";
      traces.x.lineWidth = c.r * 2.4;
      traces.x.beginPath(); traces.x.moveTo(xA, yA); traces.x.lineTo(xB, c.y); traces.x.stroke();
      traces.x.strokeStyle = "rgba(0,0,0,0.8)";
      traces.x.lineWidth = c.r * 1.1;
      traces.x.beginPath(); traces.x.moveTo(xA, yA); traces.x.lineTo(xB, c.y); traces.x.stroke();
    }

    // La vitre embuée
    v.clearRect(0, 0, W, H);
    v.drawImage(tex.c, 0, 0, W, H);
    v.save();
    v.globalCompositeOperation = "destination-out";
    v.drawImage(traces.c, 0, 0, W, H);
    v.restore();
    v.save();
    v.globalCompositeOperation = "destination-in";
    const masque = v.createLinearGradient(0, 0, 0, H);
    const pas = 12;
    for (let k = 0; k <= pas; k++) masque.addColorStop(k / pas, `rgba(0,0,0,${restant((k / pas) * H, montee, evap).toFixed(3)})`);
    v.fillStyle = masque;
    v.fillRect(0, 0, W, H);
    v.restore();

    // Les gouttes
    g.clearRect(0, 0, W, H);
    for (const p of perles) {
      if (t < p.nait) continue;
      const croissance = Math.min(1, (t - p.nait) / 0.35);
      goutte(p.x, p.y, p.r * (0.4 + 0.6 * croissance), restant(p.y, montee, evap) * croissance);
    }
    for (const c of coulees) {
      if (t < c.dep - 0.25) continue;
      const x = c.x + Math.sin(c.phase + c.y / (60 * S)) * c.ondule;
      const gonfle = Math.min(1, (t - (c.dep - 0.25)) / 0.25);
      lentille(x, c.y, c.r * (0.6 + 0.4 * gonfle), restant(c.y, montee, evap * 0.9), 1 + Math.min(0.3, c.v / (2600 * S)));
    }

    if (t < 3.1) requestAnimationFrame(image);
  };
  requestAnimationFrame(image);
}
