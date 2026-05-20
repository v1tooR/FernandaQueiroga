/* global React, Container, Button, SparkMark */
const { useEffect, useState } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 80); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Mentoria",     href: "#mentorship" },
    { label: "Programa",     href: "#program" },
    { label: "BeyondLetter", href: "#beyondletter" },
    { label: "Sobre",        href: "#about" },
  ];

  const isOnHero = !scrolled;

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 50,
      background: scrolled ? "rgba(255,247,232,.92)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid transparent",
      transition: "all 320ms cubic-bezier(.2,.7,.2,1)",
    }}>
      <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 84 }}>
        <a href="#top" style={{
          display: "flex", alignItems: "center", gap: 12, textDecoration: "none",
          color: isOnHero ? "var(--warm-cream)" : "var(--deep-teal)",
        }}>
          <SparkMark size={24} />
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: 26,
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: 1,
          }}>Beyond<span style={{ fontStyle: "italic", fontWeight: 300 }}>Speaking</span></span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <div style={{ display: "flex", gap: 32 }}>
            {links.map(l => (
              <a key={l.href} href={l.href} style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                fontWeight: 500,
                color: isOnHero ? "var(--warm-cream)" : "var(--ink)",
                textDecoration: "none",
                transition: "color 220ms",
              }}>{l.label}</a>
            ))}
          </div>
          <Button variant={isOnHero ? "onTeal" : "primary"} href="#mentorship" style={{ padding: "11px 18px", fontSize: 14 }}>
            Aplicar para a mentoria
          </Button>
        </div>
      </Container>
    </nav>
  );
}

window.Nav = Nav;
