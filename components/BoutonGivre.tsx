"use client";
import type { CSSProperties, ReactNode } from "react";
import { declencherGivre } from "@/lib/givre";

// Bouton qui lance la transition « givre » puis amène le visiteur sur `cible`.
export default function BoutonGivre({
  cible = "#tarifs",
  className,
  style,
  libelle,
  children,
}: {
  cible?: string;
  className?: string;
  style?: CSSProperties;
  libelle?: string;
  children: ReactNode;
}) {
  return (
    <button type="button" className={className} style={style} aria-label={libelle} onClick={() => declencherGivre(cible)}>
      {children}
    </button>
  );
}
