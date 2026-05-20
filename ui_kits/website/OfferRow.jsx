/* global React, Container, ProgramCard, BeyondLetterCard */
function OfferRow() {
  return (
    <section style={{ padding: "0 0 96px", background: "var(--warm-cream)" }}>
      <Container>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}>
          <ProgramCard />
          <BeyondLetterCard />
        </div>
      </Container>
    </section>
  );
}
window.OfferRow = OfferRow;
