/* global React, Container, StarField, Eyebrow */

function QuoteBlock() {
  return (
    <section style={{ padding: "32px 0 120px", background: "var(--warm-cream)" }}>
      <Container>
        <div style={{
          position: "relative",
          borderRadius: 24,
          padding: "56px 48px",
          background: "linear-gradient(160deg, #173F49 0%, #0E2C34 100%)",
          color: "var(--warm-cream)",
          overflow: "hidden",
        }}>
          <StarField count={14} opacity={0.25} />

          <div style={{
            position: "absolute",
            top: 32, right: 44,
            fontFamily: "var(--font-display)",
            fontSize: 220,
            lineHeight: 0.55,
            color: "rgba(242,194,48,.18)",
            fontWeight: 400,
            pointerEvents: "none",
          }}>“</div>

          <Eyebrow tone="yellow" style={{ marginBottom: 22, position: "relative" }}>From a student</Eyebrow>

          <blockquote style={{
            position: "relative",
            margin: 0,
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3.2vw, 40px)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.25,
            letterSpacing: "-0.005em",
            maxWidth: 760,
            color: "var(--warm-cream)",
            textWrap: "balance",
          }}>
            Eu finalmente parei de pensar em inglês como performance. Aprendi a falar como eu — só que em outra língua.
          </blockquote>

          <div style={{
            marginTop: 32, display: "flex", alignItems: "center", gap: 16, position: "relative",
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              background: "linear-gradient(135deg, #C77B5A, #A8623F)",
              border: "1.5px solid rgba(255,247,232,.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-display)", color: "var(--warm-cream)", fontStyle: "italic", fontSize: 18,
            }}>M</div>
            <div>
              <div style={{ fontSize: 15, color: "var(--warm-cream)", fontWeight: 500 }}>Marina C.</div>
              <div style={{ fontSize: 13, color: "rgba(255,247,232,.55)" }}>Product Lead · São Paulo · 12 weeks of Mentorship</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

window.QuoteBlock = QuoteBlock;
