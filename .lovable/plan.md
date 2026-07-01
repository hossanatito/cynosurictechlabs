
# Landing Page Total Redesign — Minimalist Direction

**Design read:** B2B tech-agency landing for decision-makers evaluating web/software/AI partners, with a Swiss-minimalist language, leaning toward monochrome + one restrained accent + generous whitespace + sharp typographic hierarchy.

**Dials:** VARIANCE 5 · MOTION 4 · DENSITY 2 (calm, purposeful, editorial).

---

## Design System

- **Palette (monochrome + intent):**
  - Background: off-white `#FAFAF9` (light) / near-black `#0A0A0A` (dark)
  - Text primary: `#0A0A0A` / `#F5F5F4`
  - Text muted: `#71717A`
  - Hairlines: `#E7E5E4`
  - **Single accent (used sparingly, only on primary CTA + one hero highlight):** electric cobalt `#2547FF`
- **Typography:** Host Grotesk (already in project) for everything. Weight contrast (400 body, 500 nav, 600 display) instead of font-mixing. No serif. Bold emphasis in headline uses same-family italic.
- **Spacing:** section rhythm `py-32` desktop / `py-20` mobile. Max container `max-w-6xl`. Body copy `max-w-[62ch]`.
- **Radii lock:** buttons pill (`rounded-full`), cards 12px, inputs 8px.
- **Motion:** subtle only — fade+rise on scroll (Motion `whileInView`), 200ms hover states. No marquees, no parallax, no scroll-hijack. Respects `prefers-reduced-motion`.

---

## New Page Structure (7 sections, each a different layout family)

```text
1. Floating Nav (pill, glass, top-center)
2. Hero — asymmetric split, oversized statement + single CTA + credibility line
3. Trust strip — client/tech logos on hairline row (SVG marks, no labels)
4. Services — 2-col editorial list with numbered items (no cards)
5. Approach / Process — 3-step vertical rhythm with large numerals
6. Selected Work — 2-item featured grid with real imagery (Portfolio distilled)
7. Closing CTA — full-bleed statement with email CTA
8. Minimal footer — 3-col: brand / links / contact
```

Removed from landing: WhyChooseUs, TechStack (folded into trust strip), Testimonials (moved to About), ContactSection form (email CTA only, per prior memory).

---

## Section Details

### 1. Floating Navigation
- Fixed top-center, `top-4`, pill-shaped, backdrop-blur, 1px border, subtle shadow.
- Structure: **logo mark (left) · Home · About · Services · Contact · [Start a project] CTA (right)**.
- Height 56px. Single line at all breakpoints ≥ lg. Mobile: same pill collapses to logo + hamburger sheet.
- Uses semantic tokens; contrast-safe in both themes.

### 2. Hero (bold, client-attracting)
- Layout: 12-col grid. Left col-span-8 headline stack, right col-span-4 empty (intentional whitespace with a small meta block: "Est. 2019 · 250+ shipped").
- **Headline (max 2 lines, ~9 words):** "We build software that *earns* its place." (italic emphasis, same family).
- Subtext (≤20 words): "Cynosuric Tech Labs partners with founders and teams to ship web, product, and AI systems people actually use."
- Single primary CTA: `Start a project →` (cobalt accent). One secondary text link: `See selected work`.
- Small credibility line below CTAs: `Trusted by teams across fintech, health, and SaaS.`
- No hero image, no fake product mock. Whitespace + type IS the hero. `min-h-[100dvh]`, `pt-24` cap.
- Psychology: single focal point → single decision (Hick's Law), oversized type + generous negative space signals confidence.

### 3. Trust Strip
- Hairline top+bottom, 6 real SVG logos via `simple-icons` CDN, monochrome, evenly spaced.
- No "Trusted by" heading (logos speak). No labels under logos.

### 4. Services (editorial list, not cards)
- Section header left-aligned: "What we do."
- 4 numbered rows (01–04), each: left = title + one-line description, right = 3 keyword tags.
- Divided by hairlines. Hover: row background tint shift.
- Services: Web Development · Custom Software · AI Integration · Product Design.

### 5. Approach (3 steps)
- Vertical stack, each step: large numeral (display weight) + short label + 2-line body.
- Steps: Discover · Design & Build · Ship & Iterate.

### 6. Selected Work
- 2 featured projects in asymmetric grid (60/40). Real generated imagery (Picsum seeds or generated).
- Each: project name, one-line context, "View case →" link.

### 7. Closing CTA
- Full-bleed section, centered manifesto-style: "Have something worth building?" + email CTA `hello@cynosurictechlabs.com`.

### 8. Footer
- Minimal 3-col: brand + tagline / nav links / contact + socials. Copyright line. One hairline top border.

---

## Files Changed

**Rewritten:**
- `src/components/Navbar.tsx` — floating pill nav
- `src/components/sections/HeroSection.tsx` — new minimalist hero
- `src/components/sections/ServicesSection.tsx` — editorial list layout
- `src/components/sections/PortfolioSection.tsx` — reduced to 2 featured
- `src/components/sections/CTASection.tsx` — closing manifesto
- `src/components/Footer.tsx` — minimal 3-col
- `src/pages/Index.tsx` — new section order, remove WhyChooseUs / TechStack / Testimonials / ContactSection
- `src/index.css` — palette tokens (mono + cobalt accent), spacing scale

**New:**
- `src/components/sections/TrustStrip.tsx`
- `src/components/sections/ApproachSection.tsx`

**Untouched:** other routes (About, Services, Contact pages), SEO components, data files.

---

## Anti-Slop Guarantees (per skill)

- Zero em-dashes anywhere.
- One accent color, one radius system, one theme locked.
- No cards where hairlines will do. No 3-equal-column feature row.
- No AI-purple gradients, no glow, no glassmorphism except the nav pill.
- Real SVG logos in trust strip (not text wordmarks).
- Hero fits viewport, ≤4 text elements, no trust micro-strip inside hero.
- Max 1 eyebrow across the whole page (used on Approach only, if at all).
- Motion is motivated (entrance reveal only), reduced-motion honored.
- No scroll cues, no version tags, no locale strips, no decorative dots.

---

## Technical Notes

- All color values as HSL CSS variables in `index.css`; components use `bg-background`, `text-foreground`, `text-muted-foreground`, `bg-accent` semantic tokens (no hardcoded hex in JSX).
- Motion via existing `framer-motion`/`motion` install; check `package.json` before adding.
- Navigation uses `<a href="#section">` smooth scroll for landing anchors; router links for other routes.
- All existing routes (`/about`, `/services`, `/contact`) remain; only landing page structure changes.

Ready to implement on approval.
