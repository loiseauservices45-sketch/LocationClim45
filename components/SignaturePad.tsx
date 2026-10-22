"use client";
import { useEffect, useRef, useState } from "react";
import type { Signature } from "@/lib/contratPdf";

// Zone de signature au doigt (ou à la souris).
// Renvoie la signature en JPEG sur fond blanc, prête à être insérée dans le PDF.
export default function SignaturePad({ label, onChange }: { label: string; onChange: (s: Signature | null) => void }) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const dessin = useRef(false);
  const dernier = useRef<{ x: number; y: number } | null>(null);
  const [vide, setVide] = useState(true);
  const aDessine = useRef(false); // fiable même avant le rafraîchissement de « vide »

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ratio = Math.max(1, window.devicePixelRatio || 1);
    const largeur = c.clientWidth;
    const hauteur = c.clientHeight;
    c.width = Math.round(largeur * ratio);
    c.height = Math.round(hauteur * ratio);
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.scale(ratio, ratio);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, largeur, hauteur);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 2.4;
    ctx.strokeStyle = "#0F172A";
  }, []);

  const position = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const exporter = () => {
    const c = ref.current;
    if (!c) return;
    onChange({ dataUrl: c.toDataURL("image/jpeg", 0.85), largeur: c.width, hauteur: c.height });
  };

  const debut = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    dessin.current = true;
    dernier.current = position(e);
  };
  const bouger = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!dessin.current || !dernier.current) return;
    const ctx = e.currentTarget.getContext("2d");
    if (!ctx) return;
    const p = position(e);
    ctx.beginPath();
    ctx.moveTo(dernier.current.x, dernier.current.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    dernier.current = p;
    if (!aDessine.current) { aDessine.current = true; setVide(false); }
  };
  const fin = () => {
    if (!dessin.current) return;
    dessin.current = false;
    dernier.current = null;
    if (aDessine.current) exporter();
  };

  const effacer = () => {
    const c = ref.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.restore();
    aDessine.current = false;
    setVide(true);
    onChange(null);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#1E293B" }}>{label}</span>
        <button type="button" onClick={effacer} style={{ background: "none", border: "none", color: "#1D4ED8", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Effacer</button>
      </div>
      <canvas
        ref={ref}
        onPointerDown={debut}
        onPointerMove={bouger}
        onPointerUp={fin}
        onPointerLeave={fin}
        onPointerCancel={fin}
        style={{ width: "100%", height: 170, border: "1.5px dashed #94A3B8", borderRadius: 12, background: "#fff", touchAction: "none", display: "block", cursor: "crosshair" }}
      />
      {vide && <p style={{ fontSize: 12, color: "#64748B", marginTop: 6 }}>Signez avec le doigt dans le cadre.</p>}
    </div>
  );
}
