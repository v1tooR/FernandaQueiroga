# BeyondSpeaking — Ecosystem website UI kit

The high-fidelity recreation of the **Fernanda Queiroga / BeyondSpeaking** ecosystem landing page.

Open `index.html` to see the assembled page. It demonstrates a single-page editorial layout that introduces Fernanda, then routes visitors to one of three offers: **Mentorship** (premium), **Program** (group), or **BeyondLetter** (newsletter).

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page shell + Babel + asset imports. |
| `Nav.jsx` | Sticky-after-scroll top navigation with the BeyondSpeaking wordmark + nav links + signature CTA. |
| `Hero.jsx` | The Fernanda Queiroga introduction. Teal ground, subtle stars, portrait slot, signature CTA pair. |
| `MentorshipCard.jsx` | The premium offer — large, teal, gold accents, yellow CTA. The visual anchor of the page. |
| `OfferRow.jsx` | The two-column row holding the **Program** card and the **BeyondLetter** card. |
| `ProgramCard.jsx` | Group cohort card — cream paper, outlined CTA. |
| `BeyondLetterCard.jsx` | Newsletter card — clay tint, inline subscribe. |
| `QuoteBlock.jsx` | Testimonial / storytelling block on midnight teal. |
| `Footer.jsx` | Refined footer with brand attribution, ecosystem map, social, legal. |
| `Primitives.jsx` | `Button`, `Eyebrow`, `Container`, `StarField` — shared low-level pieces. |
| `ImageSlot.jsx` | Local placeholder portrait — labelled as a slot for Fernanda's real photo. |

## Notes

- All components use the tokens in `../../colors_and_type.css`.
- Components are presentation-only — no real form submission; the email field on the BeyondLetter card just animates on submit.
- The CTA inside `<Hero>` and `<MentorshipCard>` both scroll to `#mentorship` — this is the page's single most-important conversion path.
- `Nav` switches from transparent over the hero to a cream sticky bar after 80 px of scroll.
