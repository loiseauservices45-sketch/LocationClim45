"use client";
import { useEffect, useRef, useState } from "react";
import { BASCULE_GIVRE, DUREE_GIVRE, EVENEMENT_GIVRE, allerVers, lancerGivre } from "@/lib/givre";

// Calque plein écran de la transition « givre ». À placer une fois par page.
export default function TransitionGivre() {
  const [actif, setActif] = useState(0); // 0 = inactif, sinon numéro de lecture
  const boite = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const w = window as unknown as { __givrePret?: boolean };
    w.__givrePret = true;
    const minuteries: number[] = [];
    const surGivre = (e: Event) => {
      const cible = (e as CustomEvent<{ cible: string }>).detail?.cible ?? "#tarifs";
      minuteries.forEach(clearTimeout);
      minuteries.length = 0;
      setActif(n => n + 1);
      minuteries.push(window.setTimeout(() => allerVers(cible), BASCULE_GIVRE));
      minuteries.push(window.setTimeout(() => setActif(0), DUREE_GIVRE));
    };
    window.addEventListener(EVENEMENT_GIVRE, surGivre);
    return () => {
      w.__givrePret = false;
      window.removeEventListener(EVENEMENT_GIVRE, surGivre);
      minuteries.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (actif && boite.current) lancerGivre(boite.current);
  }, [actif]);

  if (!actif) return null;
  return (
    <div key={actif} ref={boite} className="lc-givre" aria-hidden="true">
      <div className="lc-froid" />
      <canvas className="lc-toile voile-givre" />
      <div className="lc-brume-f" style={{ left: "-20vmax", top: "5%" }} />
      <div className="lc-brume-f" style={{ right: "-22vmax", top: "40%", animationDelay: ".12s" }} />
      <div className="lc-brume-f" style={{ left: "15%", bottom: "-18vmax", animationDelay: ".2s" }} />
      <canvas className="lc-toile cristaux-givre" />
      <div className="lc-eclat-givre" />
      <div className="lc-msg-givre">La fraîcheur arrive.</div>
    </div>
  );
}
