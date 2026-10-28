"use client";
import type { ReactNode } from "react";
import { declencherBuee } from "@/lib/buee";

// Bouton qui lance la transition « buée » puis amène le visiteur sur `cible`.
export default function BoutonBuee({ cible = "#tarifs", className, children }: { cible?: string; className?: string; children: ReactNode }) {
  return (
    <button type="button" className={className} onClick={() => declencherBuee(cible)}>
      {children}
    </button>
  );
}
