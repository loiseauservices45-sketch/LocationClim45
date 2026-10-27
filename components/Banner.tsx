// Fin bandeau d'information en haut des pages.
export default function Banner({ text }: { text?: string }) {
  return (
    <div className="lc-bandeau">
      {text ?? <>Ouvert 7j/7 de 8 h à 20 h · Devis gratuit<span className="lc-masque-mobile"> · Installation incluse</span></>}
    </div>
  );
}
