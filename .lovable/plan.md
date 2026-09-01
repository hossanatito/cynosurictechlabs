# Fix Hero Rotating-Word Spacing

## Problem
The headline "We build [software] that earns its place." reserves the width of the longest rotating word ("automations") via an invisible sizer. When a shorter word like "software" or "websites" is active, a visible gap appears between the word and the following "that," breaking the sentence flow.

## Goal
Make the rotating word feel like a natural part of the sentence — no dead space, no awkward alignment, while preserving the smooth vertical word-swap animation.

## Proposed Solution
Replace the fixed-width sizer with a smoothly animating inline container whose width adapts to each word. The surrounding text ("that") will follow the word naturally as the width transitions.

### Implementation Details
1. **Remove the invisible max-width sizer** from `src/components/sections/HeroSection.tsx`.
2. **Wrap the rotating word** in a `motion.span` with `layout` enabled and an inline-block display so Framer Motion can interpolate its width.
3. **Keep the `AnimatePresence` vertical slide** for the word swap, but add a width/opacity transition on the container so the trailing text glides with it.
4. **Preserve baseline alignment** by keeping the same font metrics (`leading-[1.05]`, tracking, weight) on both the container and the animated word.
5. **Add `overflow-hidden` / `clip-path` only on the vertical axis** so letters with descenders/ascenders are not clipped, while the width can still shrink and grow.
6. **Verify responsive behavior**: ensure the animation and spacing work at `text-[10vw]` on mobile and `md:text-[5.25rem]`/`lg:text-[6rem]` on larger screens.
7. **Accessibility check**: confirm the sentence remains readable for screen readers (the word should be announced as part of the heading, not duplicated).

## Files to Change
- `src/components/sections/HeroSection.tsx`

## Success Criteria
- No visible gap after "software" or "websites" before "that."
- Width transition feels smooth, not jarring.
- Baseline of the rotating word still matches the surrounding headline text.
- No console errors or layout shift on initial load.
