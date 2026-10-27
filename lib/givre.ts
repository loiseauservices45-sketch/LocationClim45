// ─────────────────────────────────────────────────────────────
// TRANSITION « GIVRE »
// Au clic sur un bouton « Je veux de la fraîcheur », une vitre givrée
// opaque recouvre l'écran, des cristaux poussent depuis les bords,
// la page passe à la cible (les tarifs) pendant que tout est gelé,
// puis le givre fond depuis le centre avec des gouttelettes.
// ─────────────────────────────────────────────────────────────

export const EVENEMENT_GIVRE = "locationclim45:givre";
export const DUREE_GIVRE = 3150; // ms, animation complète
export const BASCULE_GIVRE = 1700; // ms, moment où la page change (vitre opaque)

/** Déclenche la transition puis amène le visiteur sur `cible` (ex. "#tarifs" ou "/climatiseurs"). */
export function declencherGivre(cible: string) {
  if (typeof window === "undefined") return;
  const calme = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const ecoute = (window as unknown as { __givrePret?: boolean }).__givrePret;
  if (calme || !ecoute) {
    allerVers(cible);
    return;
  }
  window.dispatchEvent(new CustomEvent(EVENEMENT_GIVRE, { detail: { cible } }));
}

export function allerVers(cible: string) {
  if (cible.startsWith("#")) {
    const el = document.querySelector(cible);
    if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
  } else {
    window.location.href = cible;
  }
}

type Branche = { x: number; y: number; a: number; len: number; p: number; d: number; del: number; nx: number; cote: number };

/** Dessine le givre dans `boite`, qui doit contenir canvas.voile-givre et canvas.cristaux-givre. */
export function lancerGivre(boite: HTMLElement) {
  const vv = boite.querySelector<HTMLCanvasElement>("canvas.voile-givre");
  const cv = boite.querySelector<HTMLCanvasElement>("canvas.cristaux-givre");
  if (!vv || !cv) return;
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
  const g = prep(cv);
  const S = Math.max(0.55, Math.min(W, H) / 900);
  const cx = W / 2, cy = H * 0.46, diag = Math.hypot(W, H);

  // Texture de la vitre givrée (calculée une fois)
  const tex = document.createElement("canvas");
  tex.width = vv.width;
  tex.height = vv.height;
  const t2 = tex.getContext("2d")!;
  t2.setTransform(dpr, 0, 0, dpr, 0, 0);
  const fond = t2.createRadialGradient(cx, cy, 0, cx, cy, diag * 0.6);
  fond.addColorStop(0, "#E4F2FB");
  fond.addColorStop(0.5, "#BCDBF0");
  fond.addColorStop(1, "#8BB9DD");
  t2.fillStyle = fond;
  t2.fillRect(0, 0, W, H);
  for (let i = 0; i < 170; i++) {
    const bx = R() * W, by = R() * H, r0 = (30 + R() * 130) * S;
    const tache = t2.createRadialGradient(bx, by, 0, bx, by, r0);
    tache.addColorStop(0, `rgba(255,255,255,${(0.08 + R() * 0.14).toFixed(2)})`);
    tache.addColorStop(1, "rgba(255,255,255,0)");
    t2.fillStyle = tache;
    t2.fillRect(bx - r0, by - r0, r0 * 2, r0 * 2);
  }
  const nbGrains = Math.round((3200 * (W * H)) / (1440 * 900));
  for (let i = 0; i < nbGrains; i++) {
    t2.fillStyle = `rgba(255,255,255,${(0.3 + R() * 0.6).toFixed(2)})`;
    t2.beginPath(); t2.arc(R() * W, R() * H, 0.4 + R() * 1.1, 0, 6.283); t2.fill();
  }
  for (let i = 0; i < nbGrains / 4; i++) {
    t2.fillStyle = "rgba(40,100,160,0.14)";
    t2.beginPath(); t2.arc(R() * W, R() * H, 0.5 + R() * 0.8, 0, 6.283); t2.fill();
  }
  t2.strokeStyle = "rgba(255,255,255,0.28)";
  t2.lineWidth = 0.7;
  for (let i = 0; i < 380; i++) {
    const sx = R() * W, sy = R() * H, sa = R() * 6.283, sl = (4 + R() * 14) * S;
    t2.beginPath(); t2.moveTo(sx, sy); t2.lineTo(sx + Math.cos(sa) * sl, sy + Math.sin(sa) * sl); t2.stroke();
  }

  // Cristaux
  const br: Branche[] = [];
  const ajout = (x: number, y: number, a: number, len: number, d: number, del: number) =>
    br.push({ x, y, a, len, p: 0, d, del, nx: (d === 0 ? 8 : 6) * S + R() * 8 * S, cote: R() < 0.5 ? 1 : -1 });
  const per = 2 * (W + H);
  const n = Math.round(24 * Math.sqrt((W * H) / (1440 * 900))) + 10;
  for (let i = 0; i < n; i++) {
    const q = ((i + R()) * per) / n;
    let x: number, y: number;
    if (q < W) { x = q; y = 0; }
    else if (q < W + H) { x = W; y = q - W; }
    else if (q < 2 * W + H) { x = W - (q - W - H); y = H; }
    else { x = 0; y = H - (q - 2 * W - H); }
    ajout(x, y, Math.atan2(cy - y, cx - x) + (R() - 0.5) * 1.1, (190 + R() * 280) * S, 0, R() * 0.25);
  }
  [[0, 0], [W, 0], [0, H], [W, H]].forEach(([x0, y0]) => {
    const base = Math.atan2(cy - y0, cx - x0);
    for (let k = 0; k < 4; k++) ajout(x0, y0, base + (R() - 0.5) * 1.5, (280 + R() * 260) * S, 0, R() * 0.12);
  });
  let m = 0, essais = 0;
  const bande = 0.3 * Math.min(W, H);
  while (m < 16 && essais < 500) {
    essais++;
    const ix = R() * W, iy = R() * H;
    if (Math.min(ix, iy, W - ix, H - iy) < bande) { ajout(ix, iy, R() * 6.283, (100 + R() * 160) * S, 0, 0.35 + R() * 0.55); m++; }
  }
  const V = [440, 310, 220];
  const COUL = ["rgba(255,255,255,0.98)", "rgba(250,253,255,0.9)", "rgba(244,250,255,0.78)"];
  const LARG = [[2.6, 1.7, 1.0], [1.3, 0.9, 0.6], [0.75, 0.55, 0.4]];

  const etoile = (x: number, y: number, r: number) => {
    g.save();
    g.strokeStyle = "#fff"; g.lineWidth = 1.2; g.shadowBlur = 10; g.shadowColor = "rgba(255,255,255,1)";
    g.beginPath();
    g.moveTo(x - r, y); g.lineTo(x + r, y); g.moveTo(x, y - r); g.lineTo(x, y + r);
    g.moveTo(x - r * 0.45, y - r * 0.45); g.lineTo(x + r * 0.45, y + r * 0.45);
    g.moveTo(x - r * 0.45, y + r * 0.45); g.lineTo(x + r * 0.45, y - r * 0.45);
    g.stroke(); g.restore();
  };
  const trou = (ctx: CanvasRenderingContext2D, r: number, plume: number, force: number) => {
    if (r <= 0 || force <= 0) return;
    const f = `rgba(0,0,0,${force.toFixed(3)})`;
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r + plume);
    grd.addColorStop(0, f); grd.addColorStop(r / (r + plume), f); grd.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  };

  const t0 = performance.now();
  let prec = t0;
  const image = (now: number) => {
    const t = Math.max(0, (now - t0) / 1000);
    const dt = Math.max(0, Math.min((now - prec) / 1000, 0.05));
    prec = Math.max(prec, now);

    // 1. La vitre : opaque partout dès 0,9 s, jusqu'à 2 s
    v.clearRect(0, 0, W, H);
    v.drawImage(tex, 0, 0, W, H);
    if (t < 2.0) {
      const kc = Math.min(1, t / 0.9), ec = 1 - Math.pow(1 - kc, 2);
      trou(v, (1 - ec) * diag * 0.62, 180 * S, 1 - Math.pow(kc, 0.6));
    } else {
      const u = Math.min(1, (t - 2.0) / 0.85), em = 1 - Math.pow(1 - u, 3), rf = em * diag * 0.62;
      trou(v, rf, 90 * S, 1);
      trou(g, rf, 90 * S, 1);
      for (let k = 0; k < 12; k++) {
        const an = R() * 6.283, rr = rf + (R() * 70 - 10) * S;
        const gx = cx + Math.cos(an) * rr, gy = cy + Math.sin(an) * rr, rad = (1.5 + R() * 5) * S;
        const gg = v.createRadialGradient(gx - rad * 0.35, gy - rad * 0.35, 0, gx, gy, rad);
        gg.addColorStop(0, "rgba(255,255,255,0.95)");
        gg.addColorStop(1, "rgba(120,180,225,0.35)");
        v.fillStyle = gg;
        v.beginPath(); v.arc(gx, gy, rad, 0, 6.283); v.fill();
        v.strokeStyle = "rgba(12,74,110,0.4)"; v.lineWidth = 0.8; v.stroke();
      }
    }

    // 2. Les cristaux poussent
    if (t < 2.0) {
      const seaux: Record<number, number[]> = {};
      const nb = br.length;
      for (let j = 0; j < nb; j++) {
        const b = br[j];
        if (t < b.del || b.p >= b.len) continue;
        const pas = Math.min(V[b.d] * dt * S * (1 + 0.3 * (1 - b.p / b.len)), b.len - b.p);
        if (pas <= 0) continue;
        b.a += (R() - 0.5) * (b.d === 0 ? 0.09 : 0.06);
        const x2 = b.x + Math.cos(b.a) * pas, y2 = b.y + Math.sin(b.a) * pas;
        const cle = b.d * 3 + Math.min(2, Math.floor((b.p / b.len) * 3));
        (seaux[cle] ||= []).push(b.x, b.y, x2, y2);
        b.p += pas;
        b.nx -= pas;
        if (b.nx <= 0 && b.d < 2 && b.p < b.len * 0.92) {
          const reste = 1 - b.p / b.len;
          const lg = b.len * (b.d === 0 ? 0.34 : 0.42) * (0.45 + 0.55 * reste) * (0.7 + R() * 0.6);
          const ang = 1.047 + (R() - 0.5) * 0.5;
          if (b.d === 0) {
            ajout(x2, y2, b.a + ang, lg, 1, t);
            ajout(x2, y2, b.a - ang, lg * (0.8 + R() * 0.4), 1, t);
            b.nx = (8 + R() * 10) * S;
          } else {
            b.cote = -b.cote;
            ajout(x2, y2, b.a + ang * b.cote, lg, 2, t);
            b.nx = (7 + R() * 7) * S;
          }
        }
        b.x = x2;
        b.y = y2;
        if (R() < 0.05) {
          g.fillStyle = `rgba(255,255,255,${(0.45 + R() * 0.5).toFixed(2)})`;
          g.beginPath(); g.arc(x2 + (R() - 0.5) * 20 * S, y2 + (R() - 0.5) * 20 * S, 0.5 + R() * 1.4, 0, 6.283); g.fill();
        }
      }
      for (const c of Object.keys(seaux)) {
        const cle = Number(c), d = Math.floor(cle / 3), s = seaux[cle];
        g.beginPath();
        for (let k = 0; k < s.length; k += 4) { g.moveTo(s[k], s[k + 1]); g.lineTo(s[k + 2], s[k + 3]); }
        g.strokeStyle = COUL[d];
        g.lineWidth = LARG[d][cle % 3] * S;
        g.shadowBlur = d === 0 ? 5 : d === 1 ? 2.5 : 0;
        g.shadowOffsetY = d < 2 ? 1 : 0;
        g.shadowColor = "rgba(20,80,140,0.55)";
        g.stroke();
      }
      g.shadowBlur = 0;
      g.shadowOffsetY = 0;
      if (t > 0.8 && R() < 0.5) {
        const e = br[Math.floor(R() * Math.min(br.length, 4000))];
        if (e) etoile(e.x, e.y, (5 + R() * 10) * S);
      }
    }
    if (t < 3.1) requestAnimationFrame(image);
  };
  requestAnimationFrame(image);
}
