Replace all references to Space Grotesk with Host Grotesk:

1. `index.html` (line 30): Update Google Fonts `<link>` to load `family=Host+Grotesk:wght@300;400;500;600;700&display=swap`.
2. `tailwind.config.ts` (line 23): Change `sans: ['Space Grotesk', 'sans-serif']` to `sans: ['Host Grotesk', 'sans-serif']`.
3. `src/index.css` (lines 71 & 74): Update the comment and `font-family` to `'Host Grotesk', sans-serif`.

No other logic or styles change.