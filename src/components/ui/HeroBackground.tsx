type HeroBackgroundProps = {
  /** Position of the violet radial glow */
  violetAt?: string;
  /** Position of the blue radial glow */
  blueAt?: string;
};

/**
 * Decorative dual-gradient grid backdrop used behind page hero sections.
 * Renders as an absolutely positioned layer — parent must be `relative` and
 * ideally `overflow-hidden`. Place before content and give content `relative z-10`.
 */
export default function HeroBackground({
  violetAt = "0% 20%",
  blueAt = "100% 0%",
}: HeroBackgroundProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
          radial-gradient(circle 500px at ${violetAt}, rgba(139,92,246,0.3), transparent),
          radial-gradient(circle 500px at ${blueAt}, rgba(59,130,246,0.3), transparent)
        `,
        backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
      }}
    />
  );
}
