/* global React */
const { useState, useEffect, useRef } = React;

/* ============================================================
   Eyebrow — small caps label
   ============================================================ */
function Eyebrow({ children, tone = "ink", style }) {
  const colors = {
    ink: "var(--fg-2)",
    teal: "var(--deep-teal)",
    yellow: "var(--story-yellow)",
    clay: "var(--soft-clay)",
    cream: "rgba(255,247,232,.78)",
  };
  return (
    <div style={{
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: colors[tone],
      ...style,
    }}>{children}</div>
  );
}

/* ============================================================
   Button — primary, secondary, ghost
   ============================================================ */
function Button({ variant = "primary", children, href, onClick, style }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);

  const base = {
    fontFamily: "var(--font-body)",
    fontSize: 15,
    fontWeight: 600,
    border: 0,
    borderRadius: 12,
    padding: "14px 22px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    textDecoration: "none",
    transition: "all 220ms cubic-bezier(.2,.7,.2,1)",
    transform: press ? "scale(0.98)" : "scale(1)",
  };

  const variants = {
    primary: {
      background: hover ? "#E0B027" : "var(--story-yellow)",
      color: "var(--ink)",
      boxShadow: press
        ? "none"
        : hover
        ? "0 24px 48px -16px rgba(242,194,48,.55)"
        : "0 8px 24px -10px rgba(242,194,48,.45)",
    },
    secondary: {
      background: hover ? "rgba(216,232,234,.6)" : "transparent",
      color: "var(--deep-teal)",
      border: `1.5px solid ${hover ? "var(--deep-teal)" : "var(--deep-teal)"}`,
      padding: "12.5px 20.5px",
    },
    ghost: {
      background: "transparent",
      color: "var(--deep-teal)",
      fontWeight: 600,
      padding: "8px 4px",
      borderRadius: 0,
      textDecoration: "underline",
      textDecorationColor: hover ? "var(--burnt-gold)" : "transparent",
      textDecorationThickness: 2,
      textUnderlineOffset: 6,
    },
    onTeal: {
      background: hover ? "#E0B027" : "var(--story-yellow)",
      color: "var(--ink)",
    },
  };

  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children}
    </Tag>
  );
}

/* ============================================================
   Container — max-width 1200, gutters
   ============================================================ */
function Container({ children, style }) {
  return (
    <div style={{
      maxWidth: "var(--container, 1200px)",
      margin: "0 auto",
      padding: "0 var(--gutter, 24px)",
      ...style,
    }}>{children}</div>
  );
}

/* ============================================================
   StarField — subtle particles on teal grounds
   ============================================================ */
function StarField({ count = 18, opacity = 0.4 }) {
  // Deterministic positions so the field doesn't reshuffle on re-render.
  const stars = useRef(null);
  if (!stars.current) {
    const rng = mulberry32(42);
    stars.current = Array.from({ length: count }, () => ({
      top: rng() * 90 + 4,
      left: rng() * 96 + 2,
      size: 1 + rng() * 1.5,
      o: opacity * (0.5 + rng() * 0.5),
    }));
  }
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {stars.current.map((s, i) => (
        <div key={i} style={{
          position: "absolute",
          top: s.top + "%",
          left: s.left + "%",
          width: s.size,
          height: s.size,
          background: "var(--warm-cream)",
          borderRadius: "50%",
          opacity: s.o,
        }} />
      ))}
    </div>
  );
}

function mulberry32(a) {
  return function () {
    let t = (a += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ============================================================
   SparkMark — the 4-point spark, inline SVG
   ============================================================ */
function SparkMark({ size = 24, color = "currentColor", style }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} fill={color} style={style}>
      <path d="M24 2 C25 16 26 22 24 24 C26 22 32 23 46 24 C32 25 26 26 24 24 C26 26 25 32 24 46 C23 32 22 26 24 24 C22 26 16 25 2 24 C16 23 22 22 24 24 C22 22 23 16 24 2 Z" />
    </svg>
  );
}

/* Arrow glyph used in CTAs */
function ArrowRight({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

Object.assign(window, { Eyebrow, Button, Container, StarField, SparkMark, ArrowRight });
