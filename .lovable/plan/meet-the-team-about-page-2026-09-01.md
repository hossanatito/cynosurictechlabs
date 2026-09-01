# Meet the Team — About page

Add a minimal "Meet the team" section to the About page with two people and their uploaded avatars.

## Content

- **Tito** — Founder
- **Mma** — Dev Team

Avatar mapping (assumed, easy to swap): Tito uses the short-curly-hair portrait, Mma uses the locs portrait.

## Design

Matches the existing minimalist About sections (AboutValues / AboutMission):
- Full-width section, `py-24 md:py-32`, top hairline border, max-w-5xl container.
- Small uppercase tracked label: "Meet the team".
- Two-column grid (stacks on mobile), each entry: circular avatar (~112–128px) on a subtle neutral surface, name in medium tracking-tight type, role in muted small caps/mono.
- Framer-motion fade-up on scroll, staggered, respecting reduced motion.
- No cards, no gradients — whitespace does the work.

## Technical

- Upload both images via `lovable-assets` and commit `.asset.json` pointers in `src/assets/`; import the pointers and use `.url` on `<img>` with descriptive alt text.
- New component `src/components/about/AboutTeam.tsx` (replacing the stale unused legacy file of the same name).
- Render it in `src/pages/About.tsx` between `AboutValues` and `AboutCTA`.
- Images get `loading="lazy"`, fixed width/height to avoid layout shift.
