## Current landing page flow

Hero → Trust logos → Services → Approach → Portfolio → CTA

It's solid and coherent, but it skips three trust-building moments that convert visitors: social proof from real quotes, technical credibility, and objection-handling. Three matching components already exist in `src/components/sections/` and aren't being used on the homepage.

## Proposed additions (3 new sections)

Insert in this order to build momentum: **credibility → proof → objection-handling → answers.**

```
Hero
Trust logos
Services
Approach
TechStack          ← NEW placement (already built)
Portfolio
Testimonials       ← NEW placement (already built)
WhyChooseUs        ← NEW placement (already built)
FAQ                ← NEW section to build
CTA
```

### 1. TechStack (reuse existing)
Placed after Approach, before Portfolio. Shows the tools we build with (React, Supabase, Gemini, Zapier, etc.). Signals technical depth right before the visitor sees the work.

### 2. Testimonials (reuse existing)
Placed after Portfolio. Client quotes land harder once the reader has seen the actual work above them. Max 3 quotes, ≤3 lines each, real attribution.

### 3. WhyChooseUs (reuse existing)
Placed after Testimonials. Handles the "why you over another agency" objection right before the final CTA.

### 4. FAQ (new build)
5-6 questions covering the real friction points: timelines, pricing model, ownership of code, ongoing support, tech stack lock-in, what happens after launch. Accordion pattern, restrained styling, matches the minimalist system.

## Design discipline (per taste skill)

- Each new section uses a **different layout family** than its neighbours (no zigzag repetition, no 3-equal-card repetition).
- Reuse the same subtle gradient background pattern strategically on 1-2 of the new sections, not all of them — keep whitespace dominant.
- **No new eyebrows.** Current eyebrow budget is already at cap; new sections use headline-only.
- Testimonials: real names + roles, no "Jane Doe."
- FAQ: plain functional copy, no cute meta-labels.
- One accent color continues across all new sections; no palette drift.
- All new sections responsive, reduced-motion aware, dark-mode consistent with page lock.

## Technical notes

- Reuse `TechStackSection.tsx`, `TestimonialsSection.tsx`, `WhyChooseUsSection.tsx` as-is; audit each briefly for the new minimalist style and adjust spacing/typography if they still carry old styling.
- Build `FAQSection.tsx` new, using shadcn `Accordion`, matching current type scale and container widths.
- Add FAQ structured data (`FAQPage` JSON-LD) to `Index.tsx` for SEO.
- Update `Index.tsx` imports and section order.

## Out of scope

- No new copywriting pass on existing sections.
- No changes to Hero, Services, Approach, Portfolio, CTA, or Nav.
- No new routes or backend work.
