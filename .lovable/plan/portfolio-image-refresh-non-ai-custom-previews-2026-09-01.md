# Portfolio Image Refresh — Non-AI Custom Previews

## Goal
Replace the generic placeholder photos in the "Selected work" portfolio section with authentic, square preview images of the actual projects, generated without AI image models.

## Approach
Use real website screenshots as the source, then run them through the product-shot generator to create consistent, polished, square browser-mockup previews.

## Steps

1. **Capture source screenshots**
   - Use Playwright to take full-page or viewport screenshots of the live project sites:
     - Stelar: https://usestelar.com/
     - Sumo Check: https://sumocheck.appsdyno.com/
   - Default to the homepage/hero unless the user specifies a different screen.

2. **Generate square preview images with product-shot**
   - Copy the product-shot skill script and run it against each screenshot.
   - Output square PNGs to `/mnt/documents/` (e.g., `stelar-preview.png`, `sumocheck-preview.png`).
   - Choose a gradient preset that matches the site's minimalist cobalt-accent palette.

3. **Upload previews as project assets**
   - Use `lovable-assets create` to externalize the final PNGs into CDN-backed `.asset.json` pointers in `src/assets/`.

4. **Update `PortfolioSection.tsx`**
   - Replace the Picsum URLs with the new asset URLs.
   - Change both card images to a square `aspect-square` ratio.
   - Adjust the grid layout and card sizing so square images feel balanced in the existing two-column composition.
   - Keep the grayscale-to-color hover transition and minimalist typography.

5. **Verify**
   - Confirm the build passes.
   - Check the portfolio section on desktop and mobile to ensure the square images display cleanly.

## Deliverables
- Two square preview images saved as project assets.
- Updated `src/components/sections/PortfolioSection.tsx` using real project screenshots.

## Notes
- No AI image generation is used; previews are derived from actual website screenshots.
- The user can later swap the screenshots by providing new source images or URLs.
