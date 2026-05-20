/* global React, Eyebrow, ArrowRight */
const { useState } = React;

function BeyondLetterCard() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  }

  return (
    <article id="beyondletter" style={{
      background: "linear-gradient(180deg, #FAEEE6 0%, #F4E1D2 100%)",
      borderRadius: 24,
      padding: "40px 36px",
      position: "relative",
      overflow: "hidden",
      boxShadow: "inset 0 0 0 1px rgba(199,123,90,.16)",
      display: "flex",
      flexDirection: "column",
      minHeight: 380,
    }}>
      {/* huge decorative quote mark */}
      <div style={{
        position: "absolute",
        top: -50, right: -20,
        fontFamily: "var(--font-display)",
        fontSize: 280,
        lineHeight: 0.7,
        color: "rgba(199,123,90,.16)",
        fontWeight: 400,
        pointerEvents: "none",
      }}>“</div>

      <Eyebrow tone="clay" style={{ marginBottom: 16 }}>The BeyondLetter</Eyebrow>

      <h3 style={{
        fontFamily: "var(--font-display)",
        fontSize: 32,
        fontWeight: 300,
        fontStyle: "italic",
        lineHeight: 1.15,
        letterSpacing: "-0.01em",
        color: "var(--deep-teal)",
        margin: 0,
        textWrap: "balance",
        position: "relative",
      }}>
        A letter on language, presence and the slow art of fluency.
      </h3>

      <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.6, color: "var(--fg-2)", position: "relative" }}>
        One thoughtful note from Fernanda, every other Sunday. No promotions, no noise — just the kind of letter you'd want to read with a coffee.
      </p>

      <div style={{ flex: 1 }} />

      {done ? (
        <div style={{
          marginTop: 28,
          padding: "16px 18px",
          background: "rgba(255,253,248,.6)",
          border: "1px solid rgba(199,123,90,.25)",
          borderRadius: 14,
          color: "var(--deep-teal)",
          fontSize: 14,
          fontFamily: "var(--font-body)",
          position: "relative",
        }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontStyle: "italic", marginBottom: 4 }}>
            See you on Sunday.
          </div>
          <div style={{ color: "var(--fg-2)", fontSize: 13 }}>
            The next BeyondLetter lands in <strong>{email}</strong>.
          </div>
        </div>
      ) : (
        <form onSubmit={submit} style={{
          marginTop: 28,
          display: "flex",
          gap: 8,
          position: "relative",
        }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            style={{
              flex: 1,
              minWidth: 0,
              fontFamily: "var(--font-body)",
              fontSize: 15,
              color: "var(--ink)",
              background: "var(--white-warm)",
              border: "1px solid rgba(199,123,90,.28)",
              borderRadius: 12,
              padding: "13px 16px",
              outline: "none",
            }}
          />
          <button type="submit" style={{
            fontFamily: "var(--font-body)",
            fontSize: 14,
            fontWeight: 600,
            color: "var(--white-warm)",
            background: "var(--soft-clay)",
            border: 0,
            borderRadius: 12,
            padding: "13px 18px",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            whiteSpace: "nowrap",
          }}>
            Subscribe <ArrowRight />
          </button>
        </form>
      )}
    </article>
  );
}

window.BeyondLetterCard = BeyondLetterCard;
