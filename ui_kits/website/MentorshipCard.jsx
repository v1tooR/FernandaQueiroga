/* global React, Container, Button, Eyebrow, StarField, ArrowRight, SparkMark */

function MentorshipCard() {
  const features = [
    { k: "1:1", v: "Weekly sessions with Fernanda" },
    { k: "12w", v: "Three-month editorial arc" },
    { k: "∞",  v: "Voice notes between sessions" },
    { k: "1",  v: "Personal English signature you walk away with" },
  ];

  return (
    <section id="mentorship" style={{ padding: "120px 0", background: "var(--warm-cream)" }}>
      <Container>
        <div style={{
          position: "relative",
          borderRadius: 32,
          padding: "64px 56px",
          overflow: "hidden",
          background: "radial-gradient(120% 80% at 80% 20%, #1B4A55 0%, #173F49 45%, #0E2C34 100%)",
          color: "var(--warm-cream)",
          boxShadow: "0 40px 80px -28px rgba(14,44,52,.4)",
        }}>
          <StarField count={20} opacity={0.3} />

          {/* gold spark indicator top-right */}
          <div style={{
            position: "absolute", top: 32, right: 36,
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "var(--story-yellow)",
              boxShadow: "0 0 0 6px rgba(242,194,48,.18)",
            }} />
            <span style={{
              fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600,
              letterSpacing: "0.2em", color: "var(--story-yellow)",
            }}>PREMIUM · 2026 INTAKE</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center", position: "relative" }}>
            <div>
              <Eyebrow tone="yellow" style={{ marginBottom: 18 }}>
                <SparkMark size={11} style={{ marginRight: 8, verticalAlign: "middle" }} />
                BeyondSpeaking · Mentorship
              </Eyebrow>

              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4.6vw, 56px)",
                fontWeight: 300,
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
                color: "var(--warm-cream)",
                margin: 0,
                textWrap: "balance",
              }}>
                Your English doesn't need to be perfect.<br/>
                It needs to be <em style={{ fontWeight: 400, color: "var(--story-yellow)" }}>yours</em>.
              </h2>

              <p style={{
                marginTop: 22, fontSize: 17, lineHeight: 1.6,
                color: "rgba(255,247,232,.78)", maxWidth: 480,
              }}>
                A mentorship for Brazilians ready to speak English with more confidence, depth and direction. Twelve weeks of 1:1 work on the voice, the rhythm, and the stories that make your English unmistakably yours.
              </p>

              <div style={{ marginTop: 36, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                <Button variant="onTeal" href="#apply">Apply for Mentorship <ArrowRight /></Button>
                <span style={{ fontSize: 13, color: "rgba(255,247,232,.55)" }}>By application · limited spots</span>
              </div>
            </div>

            <div style={{
              background: "rgba(255,253,248,.06)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,253,248,.14)",
              borderRadius: 24,
              padding: 32,
            }}>
              <Eyebrow tone="cream" style={{ marginBottom: 20 }}>What's inside</Eyebrow>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {features.map((f, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 18, alignItems: "baseline" }}>
                    <div style={{
                      fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 300,
                      color: "var(--story-yellow)", lineHeight: 1,
                    }}>{f.k}</div>
                    <div style={{ fontSize: 15, color: "rgba(255,247,232,.88)", lineHeight: 1.5 }}>{f.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

window.MentorshipCard = MentorshipCard;
