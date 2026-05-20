/* global React */
/* A placeholder portrait slot for Fernanda's photo.
   In production, replace with a real <img> or <image-slot>. */
function PortraitSlot({ width = 380, height = 480, label = "Portrait of Fernanda" }) {
  return (
    <div style={{
      width, height,
      borderRadius: 24,
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(160deg, #FAEEE6 0%, #F2DDCB 45%, #E6C7A8 100%)",
      boxShadow: "0 24px 48px -16px rgba(14,44,52,.28), inset 0 0 0 1px rgba(20,40,47,.06)",
    }}>
      {/* abstract “warm light” shapes evoking a portrait composition */}
      <div style={{
        position: "absolute", top: "8%", left: "50%", transform: "translateX(-50%)",
        width: "55%", aspectRatio: "1",
        borderRadius: "50%",
        background: "radial-gradient(circle at 35% 35%, #E8B894 0%, #C77B5A 60%, #A8623F 100%)",
        boxShadow: "0 20px 40px -12px rgba(168,98,63,.4)",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: "10%", right: "10%",
        height: "55%",
        borderRadius: "120px 120px 0 0",
        background: "linear-gradient(180deg, #173F49 0%, #0E2C34 100%)",
      }} />
      <div style={{
        position: "absolute", top: "16%", right: "8%",
        fontFamily: "var(--font-display)", fontSize: 64, lineHeight: 0.6,
        color: "rgba(255,247,232,.18)", fontWeight: 400,
      }}>“</div>

      {/* slot label */}
      <div style={{
        position: "absolute", bottom: 14, left: 14, right: 14,
        background: "rgba(20,40,47,.65)",
        backdropFilter: "blur(8px)",
        borderRadius: 10,
        padding: "8px 12px",
        fontFamily: "var(--font-body)",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--warm-cream)",
      }}>
        Photo slot · {label}
      </div>
    </div>
  );
}

window.PortraitSlot = PortraitSlot;
