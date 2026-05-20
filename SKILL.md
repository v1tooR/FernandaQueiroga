---
name: beyondspeaking-design
description: Use this skill to generate well-branded interfaces and assets for Fernanda Queiroga / BeyondSpeaking, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

This skill represents a **premium personal-brand and mentoring ecosystem** built around an English Mentor for Brazilian professionals. The system has three offers that must be visually distinguishable in three seconds:

- **BeyondSpeaking Mentorship** — premium 1:1, the visual anchor (teal ground, gold accents, yellow CTA).
- **BeyondSpeaking Program** — group cohort, secondary (cream paper card, outlined CTA).
- **BeyondLetter** — newsletter, editorial (clay tint, inline subscribe).

Key rules to internalize:

1. **Color discipline.** Deep teal leads, warm cream breathes, yellow is reserved for CTAs only (≤ 6 % screen coverage), clay is the human warmth accent. Never gradient teal-to-yellow.
2. **Type pairing.** Fraunces (display, often light italic for emphasis) + Manrope (body/UI). Both Google Fonts. Sentence case everywhere except product names (BeyondSpeaking, BeyondLetter).
3. **No “BS” abbreviation.** Negative association in English. Never customer-facing.
4. **Voice.** Bilingual (PT-BR ↔ EN-US), never tangled in one sentence. “Você” / “you” singular. No emoji in marketing surfaces. No exclamation marks except in student quotes.
5. **No icon system at chrome level.** Use words, not pictograms. Brand motif marks (spark, quote, bubble, fq monogram) live in `assets/`. For utility icons, use Lucide via CDN at stroke 1.5.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view. The page in `ui_kits/website/index.html` is a working hi-fi reference — use its components as building blocks.

If working on production code, copy `colors_and_type.css` and the assets, then read this file plus the main `README.md` to become an expert in designing with this brand.

If the user invokes this skill without other guidance, ask what they want to build (landing page section, slide, Instagram carousel, newsletter, sales page, mentorship-application form…), ask 2–3 clarifying questions about audience and language, then deliver as an HTML artifact or production code as appropriate.
