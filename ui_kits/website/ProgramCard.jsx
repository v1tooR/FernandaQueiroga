/* global React, Button, Eyebrow, ArrowRight */
const { useState } = React;

function ProgramCard() {
  const [hover, setHover] = useState(false);

  return (
    <article
      id="program"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--white-warm)",
        borderRadius: 24,
        padding: "40px 36px",
        boxShadow: hover
          ? "0 24px 48px -16px rgba(14,44,52,.18), inset 0 0 0 1px rgba(20,40,47,.06)"
          : "0 8px 24px -8px rgba(20,40,47,.12), inset 0 0 0 1px rgba(20,40,47,.06)",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        transition: "all 220ms cubic-bezier(.2,.7,.2,1)",
        display: "flex",
        flexDirection: "column",
        minHeight: 380,
      }}
    >
      <Eyebrow tone="clay" style={{ marginBottom: 16 }}>BeyondSpeaking · Program</Eyebrow>

      <h3 style={{
        fontFamily: "var(--font-display)",
        fontSize: 34,
        fontWeight: 400,
        lineHeight: 1.12,
        letterSpacing: "-0.01em",
        color: "var(--deep-teal)",
        margin: 0,
        textWrap: "balance",
      }}>
        Eight weeks. A small group.<br/>
        <em style={{ fontWeight: 300 }}>One shared language.</em>
      </h3>

      <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.6, color: "var(--fg-2)" }}>
        Live group cohorts that teach you to think, write and speak in English with rhythm and confidence — alongside other Brazilians on the same path.
      </p>

      {/* meta strip */}
      <div style={{
        marginTop: 22,
        display: "flex",
        gap: 0,
        alignItems: "center",
        flexWrap: "wrap",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--fg-3)",
      }}>
        <span>8 weeks</span>
        <span style={{ margin: "0 12px", opacity: 0.5 }}>·</span>
        <span>12 seats</span>
        <span style={{ margin: "0 12px", opacity: 0.5 }}>·</span>
        <span>Live, weekly</span>
      </div>

      <div style={{ flex: 1 }} />

      <div style={{ marginTop: 28, display: "flex", gap: 16, alignItems: "center" }}>
        <Button variant="secondary" href="#program-apply">Join the next group <ArrowRight /></Button>
        <span style={{ fontSize: 12, color: "var(--fg-3)" }}>Starts September</span>
      </div>
    </article>
  );
}

window.ProgramCard = ProgramCard;
