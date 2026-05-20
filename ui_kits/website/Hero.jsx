/* global React, Container, Button, Eyebrow, StarField, ArrowRight, SparkMark */

/* ---------- Editorial portrait frame ----------
   A "real photo placeholder" — a labelled image area with warm cream
   matting, hairline frame, captioned plaque underneath. Designed to feel
   like an editorial photo module, NOT a decorative illustration. */
function PortraitFrame() {
  return (
    <figure style={{
      margin: 0,
      padding: 16,
      background: "var(--warm-cream)",
      borderRadius: 20,
      boxShadow: "0 40px 80px -28px rgba(14,44,52,.38), 0 0 0 1px rgba(20,40,47,.06)",
      maxWidth: 440,
      transform: "rotate(.4deg)",
    }}>
      <div style={{
        position: "relative",
        aspectRatio: "4 / 5",
        borderRadius: 12,
        overflow: "hidden",
        background:
          // soft warm gradient as a stand-in for an editorial portrait
          "linear-gradient(168deg, #F4E1D2 0%, #E8C7AA 38%, #C9956F 72%, #8A5634 100%)",
      }}>
        {/* warm window-light wash */}
        <div style={{
          position: "absolute",
          top: 0, right: 0,
          width: "62%", height: "70%",
          background: "radial-gradient(ellipse at top right, rgba(255,247,232,.55) 0%, rgba(255,247,232,0) 65%)",
          pointerEvents: "none",
        }} />

        {/* film-grain feel — subtle dotted texture */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(20,40,47,.05) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }} />

        {/* slot label — clearly marked as a placeholder */}
        <div style={{
          position: "absolute", left: 16, top: 16,
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 10px",
          background: "rgba(20,40,47,.78)",
          color: "var(--warm-cream)",
          borderRadius: 8,
          fontFamily: "var(--font-body)",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--story-yellow)" }} />
          Photo placeholder
        </div>

        {/* index number — editorial detail */}
        <div style={{
          position: "absolute", right: 14, bottom: 14,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: ".18em",
          color: "rgba(255,247,232,.7)",
        }}>FQ · 01 / 03</div>
      </div>

      {/* Editorial caption plaque */}
      <figcaption style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "16px 8px 4px",
      }}>
        <SparkMark size={14} style={{ color: "var(--burnt-gold)", flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: 17,
            fontWeight: 400,
            color: "var(--deep-teal)",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
          }}>
            Fernanda <em style={{ fontWeight: 300 }}>Queiroga</em>
          </div>
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--fg-3)",
            marginTop: 3,
          }}>
            English Mentor  ·  São Paulo / SP
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

function Hero() {
  return (
    <section id="top" style={{
      position: "relative",
      background: "radial-gradient(140% 95% at 75% 18%, #1B4A55 0%, #173F49 48%, #0E2C34 100%)",
      color: "var(--warm-cream)",
      paddingTop: 168,
      paddingBottom: 144,
      overflow: "hidden",
    }}>
      <StarField count={22} opacity={0.28} />

      {/* soft warm halo behind portrait */}
      <div style={{
        position: "absolute", top: "12%", right: "-4%",
        width: 560, height: 560, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(199,123,90,.16) 0%, rgba(199,123,90,0) 65%)",
        pointerEvents: "none",
      }} />

      <Container>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          gap: 96,
          alignItems: "center",
        }}>
          {/* ---------- LEFT: message & action ---------- */}
          <div>
            <Eyebrow tone="yellow" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 10 }}>
              <SparkMark size={11} />
              <span>Fernanda Queiroga · English Mentor</span>
            </Eyebrow>

            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 5.6vw, 72px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              color: "var(--warm-cream)",
              margin: 0,
              textWrap: "balance",
              maxWidth: 620,
            }}>
              Inglês que <em style={{ fontWeight: 400, color: "var(--story-yellow)", fontStyle: "italic" }}>soa como você</em> — só que mais livre.
            </h1>

            <p style={{
              marginTop: 24,
              fontSize: 19,
              lineHeight: 1.55,
              color: "rgba(255,247,232,.82)",
              maxWidth: 540,
              textWrap: "pretty",
              fontWeight: 400,
            }}>
              Mentoria e experiências de inglês para brasileiros que querem se comunicar com mais <strong style={{ fontWeight: 600, color: "var(--warm-cream)" }}>clareza, confiança e presença</strong> em contextos reais.
            </p>

            <div style={{ marginTop: 44, display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
              <Button variant="onTeal" href="#mentorship">
                Aplicar para a mentoria <ArrowRight />
              </Button>
              <a href="#beyondletter" style={{
                color: "var(--warm-cream)",
                fontFamily: "var(--font-body)",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "underline",
                textDecorationColor: "var(--burnt-gold)",
                textDecorationThickness: 2,
                textUnderlineOffset: 6,
              }}>Receber a BeyondLetter</a>
            </div>

            {/* ---------- Trust strip, reworked ---------- */}
            <div style={{
              marginTop: 72,
              paddingTop: 28,
              borderTop: "1px solid rgba(255,253,248,.12)",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
              maxWidth: 560,
            }}>
              {[
                { v: "10+", l: "Anos mentorando", tag: false },
                { v: "300+", l: "Alunos brasileiros", tag: true },
                { v: "1:1", l: "Mentoria personalizada", tag: false },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    fontWeight: 300,
                    color: "var(--warm-cream)",
                    lineHeight: 1,
                    letterSpacing: "-0.01em",
                  }}>{s.v}</div>
                  <div style={{
                    marginTop: 6,
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    color: "rgba(255,247,232,.62)",
                    lineHeight: 1.35,
                  }}>{s.l}</div>
                  {s.tag && (
                    <div style={{
                      marginTop: 4,
                      fontFamily: "var(--font-body)",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(255,247,232,.35)",
                    }}>placeholder · confirmar</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ---------- RIGHT: editorial portrait module ---------- */}
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <PortraitFrame />
          </div>
        </div>
      </Container>
    </section>
  );
}

window.Hero = Hero;
window.PortraitFrame = PortraitFrame;
