export default function Banner({ text }: { text?: string }) {
  return (
    <div style={{
      background: "#1A2744", color: "rgba(255,255,255,0.88)",
      textAlign: "center", padding: "11px 16px",
      fontSize: 13, fontWeight: 600,
      display: "flex", alignItems: "center", justifyContent: "center",
      gap: 10, flexWrap: "wrap",
      borderBottom: "1px solid rgba(255,255,255,0.06)"
    }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#38BDF8", display: "inline-block", animation: "pulse 2s infinite" }} />
      {text ?? (
        <>
          Vague de chaleur en cours
          <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 4px" }}>—</span>
          <strong>Livraison sous 24h</strong> sur Orléans et ses alentours
          <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 4px" }}>·</span>
          Stock limité, réservez maintenant
        </>
      )}
    </div>
  );
}
