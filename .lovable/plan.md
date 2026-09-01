# Hide Testimonials Section

## Goal
Temporarily remove the "Words from the people we built with" testimonials section from the landing page while keeping the component file intact so it can be re-enabled later.

## Changes
1. In `src/pages/Index.tsx`:
   - Comment out the `TestimonialsSection` import on line 9.
   - Comment out the `<TestimonialsSection />` JSX element on line 43.
2. Leave `src/components/sections/TestimonialsSection.tsx` unchanged so it can be unhidden by uncommenting the two lines above.

## Verification
- Confirm the build passes.
- Confirm the testimonials section no longer renders on the homepage.
