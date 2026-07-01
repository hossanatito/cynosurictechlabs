## Goal
Redesign the "tools" logo strip so it reads as *tools we work with* (not partners/clients), and add the site logo to the footer. Footer already renders on all 4 pages — confirm it stays visually identical everywhere.

## 1. Reframe & redesign `TrustStrip.tsx`
Rename intent from social-proof to capability. Rebuild as a minimal, purposeful section:

- **Section eyebrow + headline**: small mono label `TOOLING` + one-line headline: *"Tools we build with."* + one-sentence sub: *"A pragmatic stack — picked per project, not per trend."* This removes any "trusted by / partnered with" reading.
- **Expanded, curated tool set** (grayscale SVGs via `cdn.simpleicons.org/<slug>/9ca3af`), grouped visually in a single quiet row/grid: React, Next.js, TypeScript, Tailwind CSS, Node.js, Supabase, PostgreSQL, OpenAI, Vercel, Stripe, n8n, Zapier.
- **Layout**: responsive grid (`grid-cols-3 sm:grid-cols-4 md:grid-cols-6`), generous vertical rhythm, hairline top/bottom borders, no cards. Logos at `h-6 md:h-7`, `opacity-60 hover:opacity-100`, `grayscale`, with `title`/`alt` for a11y. No labels under logos (per skill: logo-only rule).
- **Motion**: subtle `whileInView` fade/stagger, respects reduced-motion.
- **No AI tells**: no decorative dots, no em-dashes, no "Trusted by / Partners / Powered by" language, no version tags.

## 2. Add logo to `Footer.tsx`
- Import `@/assets/logo.png` (same asset used in Navbar).
- Replace the plain "Cynosuric Tech Labs" text lockup with logo (28px, rounded) + wordmark side-by-side, keeping current tagline below.
- Keep everything else in the footer identical so it remains visually consistent across Home, About, Services, Contact (Footer is already shared — no per-page changes needed).

## 3. Verification
- Visual check that footer renders identically on `/`, `/about`, `/services`, `/contact`.
- Confirm logos load from Simple Icons CDN and section reads as tooling, not partnerships.

## Out of scope
No copy changes elsewhere, no nav/hero changes, no new dependencies.
