"use client";
import { useEffect, useRef, useState } from "react";
import { allerVers } from "@/lib/givre";
import { BASCULE_BUEE, DUREE_BUEE, EVENEMENT_BUEE, lancerBuee } from "@/lib/buee";

// Calque plein écran de la transition « buée » (page déshumidificateurs).
export default function TransitionBuee() {
  const [actif, setActif] = useState(0); // 0 = inactif, sinon numéro de lecture
  const boite = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const w = window as unknown as { __bueePret?: boolean };
    w.__bueePret = true;
    const minuteries: number[] = [];
    const surBuee = (e: Event) => {
      const cible = (e as CustomEvent<{ cible: string }>).detail?.cible ?? "#tarifs";
      minuteries.forEach(clearTimeout);
      minuteries.length = 0;
      setActif(n => n + 1);
      minuteries.push(window.setTimeout(() => allerVers(cible), BASCULE_BUEE));
      minuteries.push(window.setTimeout(() => setActif(0), DUREE_BUEE));
    };
    window.addEventListener(EVENEMENT_BUEE, surBuee);
    return () => {
      w.__bueePret = false;
      window.removeEventListener(EVENEMENT_BUEE, surBuee);
      minuteries.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (actif && boite.current) lancerBuee(boite.current);
  }, [actif]);

  if (!actif) return null;
  return (
    <div key={actif} ref={boite} className="lc-buee" aria-hidden="true">
      <canvas className="lc-toile voile-buee" />
      <canvas className="lc-toile gouttes-buee" />
      <div className="lc-msg-givre lc-msg-buee">On assèche l&apos;air.</div>
    </div>
  );
}
