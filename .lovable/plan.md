## Add dual-gradient grid background to Hero Section

Update `src/components/sections/HeroSection.tsx`:

1. Change the root `<section>` to include `bg-white overflow-hidden` and keep `relative`.
2. Insert an absolutely-positioned decorative `<div aria-hidden>` as the first child of the section, behind content, using the provided background:
   - Grid lines: `rgba(229,231,235,0.8)` at 48px spacing (horizontal + vertical).
   - Radial gradient 500px at 0% 20% in violet `rgba(139,92,246,0.3)`.
   - Radial gradient 500px at 100% 0% in blue `rgba(59,130,246,0.3)`.
   - `z-0`, with `pointer-events-none`.
3. Wrap the existing inner content container with `relative z-10` so text sits above the background.

No other files touched. Rotating headline, layout, spacing, and typography remain unchanged.

### Notes
- Colors are hardcoded per the user-provided snippet (intentional visual treatment for the hero only); the rest of the site keeps semantic tokens.
- Works in light mode as designed; in dark mode the white base will still show — acceptable since the site is light-themed.
