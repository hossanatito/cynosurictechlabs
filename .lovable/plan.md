## Hero section rebalance

The current hero pushes the headline to the top-left and the subhead/CTA into a right-offset column, creating a visual gap and awkward alignment. Goal: tighter, more intentional vertical rhythm with proper left-anchored alignment.

### Changes to `src/components/sections/HeroSection.tsx`

1. **Section padding**
   - Replace `min-h-[100dvh] flex items-end pt-24 pb-20 md:pb-32` with a centered layout: `min-h-[90dvh] flex items-center pt-32 pb-24 md:pt-40 md:pb-28`.
   - Keeps generous top clearance for the floating nav without forcing content to the bottom of the viewport.

2. **Alignment**
   - Drop the 12-col grid split. Use a single left-aligned column: `max-w-5xl` container, everything flush-left.
   - Subhead and CTAs align under the headline (not offset to `md:col-start-6`), fixing the disconnected right-column feel.

3. **Vertical rhythm**
   - Eyebrow → headline: `mb-6` (was `mb-8`).
   - Headline → subhead: `mt-8 md:mt-10` (was `mt-10 md:mt-16`).
   - Subhead → CTA row: `mt-6` (was `mt-8`).
   - CTA → trust line: `mt-10` (was `mt-8`) for a clear terminal break.

4. **Headline sizing**
   - Keep current sizes (`md:text-[5.25rem] lg:text-[6rem]`) but tighten `leading` to `1.05` so the three-line stack feels cohesive.

5. **Subhead width**
   - Constrain to `max-w-[46ch]` so the paragraph sits comfortably under the headline instead of stretching to match it.

No changes to copy, colors, motion, or other sections.
