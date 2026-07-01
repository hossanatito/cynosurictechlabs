## Align /about, /services, /contact with the new minimalist landing style

Rewrite the section components on these three pages so they inherit the landing page's design language: floating nav clearance, warm off-white canvas, generous macro-whitespace, left-anchored typography, editorial hero, thin 1px borders, no colored cards or heavy shadows, no gradients or pill CTAs on large surfaces. The routes, imports, SEO data, and structured data stay untouched.

### Shared design rules (applied to every rewritten section)

- Container: `mx-auto w-full max-w-5xl px-6`
- Section spacing: `py-24 md:py-32`; hero uses `pt-32 pb-16 md:pt-40 md:pb-24` to sit under the floating nav
- Eyebrow: `text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6`
- H1/H2 typography matches landing: `tracking-[-0.035em] font-medium leading-[1.05]`, sizes scaled per section (hero `md:text-[5.25rem] lg:text-[6rem]`, section headers `md:text-5xl lg:text-6xl`)
- Body: `text-base md:text-lg text-muted-foreground leading-relaxed max-w-[52ch]`
- Dividers/cards: `border-t border-border` or `border border-border rounded-lg`, no shadows
- Primary CTA: reuse landing's `bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] rounded-full px-6 py-3 text-sm font-medium`
- Entry motion: reuse the `fade(delay)` pattern from `HeroSection.tsx` with `useReducedMotion`
- Hide the `<Breadcrumb />` on these pages — it collides visually with the floating nav and doesn't fit the minimalist frame

### /about — rewrite these components

- **AboutHero**: eyebrow "About / Since 2019", left-aligned h1 "A small studio building software that lasts.", one-line lede beneath.
- **AboutStory**: two-column editorial layout on `md+` (left: `Our story` label, right: 2 short paragraphs). Single column on mobile. Bordered top.
- **AboutMission**: single wide statement, oversized quote-style sentence in the editorial serif italic already used for "earns", followed by a short attribution line.
- **AboutValues**: 3-column list (`grid md:grid-cols-3 gap-10`), each item is number `01/02/03` in mono, title, one-sentence description. No cards, only vertical rhythm.
- **AboutCTA**: full-width minimal band with headline + accent CTA, matches landing's CTA pattern.

Remove AboutTeam and AboutTimeline references (already unused by `About.tsx`).

### /services — rewrite these components

- **ServicesHero**: same eyebrow + oversized headline + lede pattern as AboutHero.
- **ServicesTabs**: convert from tabs UI to a stacked bento-style list. Each service = one row: 2-col grid on `md+`, left column has a mono index + service name, right column has description and 3–5 capability bullets separated by `border-t border-border` between rows. Removes tab state entirely.
- **ServicesPackages**: 3 side-by-side minimal cards with `border border-border rounded-lg p-8`, package name, one-sentence positioning, feature list with `Check` icon at `stroke-1`. No pricing (memory rule). Single accent CTA per card, ghost style except for the recommended middle card which uses the accent button.
- **ServicesProcess**: numbered `01`–`0N` vertical list, mono numerals, title, one-sentence description. Same rhythm as AboutValues but stacked vertically with `border-t border-border` separators.
- **ServicesFAQ**: strip container boxes — each question is a `<details>`/accordion row separated by `border-b border-border`, `+`/`−` toggle indicator, no colored backgrounds.
- **ServicesCTA**: same band pattern as AboutCTA.

### /contact — rewrite these components

- **ContactHero**: eyebrow + h1 "Let's talk." + one-sentence lede.
- **ContactInfo**: single left-aligned block — large `mailto:` link rendered as a headline-sized anchor (uses landing's underline-hover treatment), plus a small list of channels (email, response time, location) with mono labels and border-top separators.
- Remove the extra `container-custom` wrapper in `Contact.tsx` so ContactInfo controls its own spacing; keep ContactForm/ContactMap files but do not import them (memory: no contact forms).

### Page shells

- Update `About.tsx`, `Services.tsx`, `Contact.tsx`: remove `<div className="container-custom">` wrapping the breadcrumb and remove the `<Breadcrumb />` block; keep `<SEOHead>`, `<Navbar>`, `<main>`, `<Footer>` intact.

### Out of scope

- No changes to routes, SEO data, structured data, Footer, Navbar, or the landing page.
- No new dependencies. Motion via existing `framer-motion`, icons via existing `lucide-react`.
