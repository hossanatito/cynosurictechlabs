# Update "The tools we reach for" section

## What to change

1. **Frontend stack**: add **TanStack** to the list.
2. **AI & Automation stack**: remove **Zapier**.
3. **Add more color** while keeping the minimalist direction: use the existing cobalt accent (`--accent`) for category numbers/labels, give each group a subtle tinted surface, and add a soft hover state on the tech tags.

## Files to edit

- `src/components/sections/TechStackSection.tsx`

## Approach

- Update the `groups` array: insert `"TanStack"` into `Frontend`, remove `"Zapier"` from `AI & Automation`.
- Introduce a small per-category color token map (still using the design-system palette) so each group gets a faint background tint and an accent-colored index/label.
- Keep the layout, spacing, and typography unchanged; only enhance visual interest through restrained color.
- Verify the build passes and the section remains responsive.
