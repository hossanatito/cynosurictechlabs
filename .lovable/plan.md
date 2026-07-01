## Rotating word in hero headline

Cycle the word "software" through: `software` → `websites` → `automations`, then loop.

### Change in `src/components/sections/HeroSection.tsx`

- Add a small `useState` + `useEffect` interval (3s) that advances an index through `["software", "websites", "automations"]`.
- Replace the static `software` word in the second line of the `<h1>` with an inline `<span>` that renders the current word.
- Wrap the word in Framer Motion's `AnimatePresence` + `motion.span` with a fade + slight y-shift (200ms) keyed on the word so each swap animates in place.
- Use `inline-block` and set the span's `min-width` via `ch` sizing (widest word = `automations`, ~11ch) so the line length doesn't jump between words.
- Respect `useReducedMotion`: skip the transform, keep only the opacity change.

No copy, layout, or styling changes elsewhere. The `that` following the rotating word stays on the same line.
