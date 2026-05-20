/* global React, Container, SparkMark */

function Footer() {
  const cols = [
    {
      title: "Ecosystem",
      links: [
        { label: "BeyondSpeaking Mentorship", href: "#mentorship" },
        { label: "BeyondSpeaking Program", href: "#program" },
        { label: "BeyondLetter", href: "#beyondletter" },
        { label: "Methodology", href: "#method" },
      ],
    },
    {
      title: "Fernanda",
      links: [
        { label: "About", href: "#about" },
        { label: "Story", href: "#story" },
        { label: "Press & speaking", href: "#press" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Spotify · Podcast", href: "#" },
        { label: "YouTube", href: "#" },
      ],
    },
  ];

  return (
    <footer style={{
      background: "var(--midnight-teal)",
      color: "var(--warm-cream)",
      padding: "96px 0 40px",
      position: "relative",
      overflow: "hidden",
    }}>
      <Container>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 48,
          paddingBottom: 64,
          borderBottom: "1px solid rgba(255,253,248,.1)",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <SparkMark size={22} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 400, letterSpacing: "-0.01em" }}>
                Beyond<span style={{ fontStyle: "italic", fontWeight: 300 }}>Speaking</span>
              </span>
            </div>
            <p style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: 300,
              lineHeight: 1.4,
              maxWidth: 360,
              color: "rgba(255,247,232,.82)",
              margin: 0,
            }}>
              An English mentorship for Brazilians ready to speak with clarity, presence and confidence.
            </p>
            <div style={{ marginTop: 24, fontSize: 13, color: "rgba(255,247,232,.55)", lineHeight: 1.6 }}>
              Fernanda Queiroga · English Mentor<br/>
              fernanda@beyondspeaking.com
            </div>
          </div>

          {cols.map((c, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--story-yellow)",
                marginBottom: 18,
              }}>{c.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {c.links.map((l, j) => (
                  <a key={j} href={l.href} style={{
                    fontSize: 14,
                    color: "rgba(255,247,232,.82)",
                    textDecoration: "none",
                  }}>{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legal row */}
        <div style={{
          marginTop: 32,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          fontSize: 12,
          color: "rgba(255,247,232,.5)",
          letterSpacing: "0.04em",
        }}>
          <div>© 2026 Fernanda Queiroga · BeyondSpeaking Ecosystem</div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#privacy" style={{ color: "inherit" }}>Privacy Policy</a>
            <a href="#terms" style={{ color: "inherit" }}>Terms</a>
            <a href="#contact" style={{ color: "inherit" }}>Contact</a>
          </div>
        </div>

        {/* Oversized wordmark watermark */}
        <div style={{
          marginTop: 56,
          fontFamily: "var(--font-display)",
          fontSize: "clamp(80px, 16vw, 220px)",
          fontWeight: 300,
          color: "rgba(255,247,232,.04)",
          lineHeight: 0.9,
          letterSpacing: "-0.03em",
          textAlign: "center",
          userSelect: "none",
          pointerEvents: "none",
        }}>
          BeyondSpeaking
        </div>
      </Container>
    </footer>
  );
}

window.Footer = Footer;
