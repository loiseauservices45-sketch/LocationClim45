// Fond continu de la page : lueurs, courant d'air givré et flocons,
// qui accompagnent le visiteur du haut jusqu'en bas de la page.
// Ambiance « eau » (page déshumidificateurs) : gouttelettes à la place des flocons.
// Les positions des flocons sont fixes (pas de hasard) pour un rendu identique côté serveur et navigateur.

const TRACE =
  "M -60 700 C 300 560, 620 840, 960 760 S 1340 700, 1390 980 C 1420 1300, 1405 1600, 1385 1790 C 1350 1910, 990 1870, 720 1880 S 100 1930, 66 2170 C 40 2500, 62 2800, 72 2950 C 84 3040, 280 3060, 720 3065 S 1350 3110, 1382 3350 C 1404 3900, 1396 4600, 1378 5060 C 1354 5190, 990 5130, 720 5150 S 96 5200, 68 5460 C 44 5860, 70 6160, 420 6310 S 1100 6430, 1500 6260";

function suite(graine: number) {
  let s = graine;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}
const r = suite(45240);
const FLOCONS = Array.from({ length: 60 }, () => ({
  x: (r() * 100).toFixed(1) + "%",
  y: (r() * 98).toFixed(2) + "%",
  s: (2 + r() * 3).toFixed(1) + "px",
  d: (-r() * 14).toFixed(1) + "s",
  t: (10 + r() * 6).toFixed(1) + "s",
}));

export default function FondGivre({ eau = false }: { eau?: boolean }) {
  return (
    <div className="lc-fond" aria-hidden="true">
      <div className="lc-lueur" style={{ width: 1100, height: 700, right: "-10%", top: -160, background: "radial-gradient(ellipse,rgba(125,211,252,.20),rgba(125,211,252,0) 65%)" }} />
      <div className="lc-lueur" style={{ width: 1200, height: 800, left: -500, top: "30%", background: "radial-gradient(ellipse,rgba(99,102,241,.13),rgba(99,102,241,0) 65%)" }} />
      <div className="lc-lueur" style={{ width: 1200, height: 800, right: -400, top: "58%", background: "radial-gradient(ellipse,rgba(125,211,252,.12),rgba(125,211,252,0) 65%)" }} />
      <div className="lc-lueur" style={{ width: 1300, height: 900, left: "5%", top: "86%", background: "radial-gradient(ellipse,rgba(125,211,252,.16),rgba(125,211,252,0) 65%)" }} />

      {/* Ordinateur : un courant d'air qui serpente dans les marges sur toute la page */}
      <svg className="lc-courant lc-courant-large" viewBox="0 0 1440 6700" preserveAspectRatio="none">
        <g fill="none" strokeLinecap="round">
          <path className="lc-voile-air" d={TRACE} stroke="#BAE6FD" strokeWidth="38" opacity=".14" vectorEffect="non-scaling-stroke" />
          <path d={TRACE} stroke="#E0F2FE" strokeWidth="1.4" opacity=".35" vectorEffect="non-scaling-stroke" />
          <path className="lc-flux" d={TRACE} stroke="#F0F9FF" strokeWidth="3" opacity=".85" vectorEffect="non-scaling-stroke" />
          <path className="lc-flux" transform="translate(-18 16)" d={TRACE} stroke="#7DD3FC" strokeWidth="1.6" opacity=".55" vectorEffect="non-scaling-stroke" />
        </g>
      </svg>

      {/* Téléphone : un fil d'air plus discret qui longe le bord droit */}
      <svg className="lc-courant lc-courant-etroit" viewBox="0 0 390 8000" preserveAspectRatio="none">
        <path className="lc-flux" d="M -20 520 C 120 470, 260 560, 372 640 C 386 1600, 380 2600, 376 3600 C 372 4600, 384 5600, 378 6600 C 374 7200, 300 7700, 120 7900" fill="none" stroke="#E0F2FE" strokeWidth="2" opacity=".55" vectorEffect="non-scaling-stroke" />
      </svg>

      {FLOCONS.map((f, i) => (
        <span key={i} className={eau ? "lc-flocon lc-goutte" : "lc-flocon"} style={{ left: f.x, top: f.y, width: f.s, height: f.s, animationDelay: f.d, animationDuration: f.t }} />
      ))}
    </div>
  );
}
