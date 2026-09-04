const tools = [
  { name: "React", slug: "react", color: "#61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "#000000" },
  { name: "TypeScript", slug: "typescript", color: "#3178C6" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4" },
  { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
  { name: "Supabase", slug: "supabase", color: "#3FCF8E" },
  { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
  { name: "OpenAI", slug: "openai", color: "#412991" },
  { name: "Vercel", slug: "vercel", color: "#000000" },
  { name: "Stripe", slug: "stripe", color: "#635BFF" },
  { name: "n8n", slug: "n8n", color: "#FF6D5A" },
  { name: "Zapier", slug: "zapier", color: "#FF4A00" },
];

export default function TrustStrip() {
  const loop = [...tools, ...tools];

  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-8 md:pb-10">
        <div className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground mb-4">
          Tooling
        </div>
        <h2 className="text-3xl md:text-5xl tracking-[-0.03em] font-medium leading-[1.05]">
          Tools we build with.
        </h2>
      </div>

      <div
        className="relative overflow-hidden pb-20 md:pb-28 pt-2"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
        aria-label="Tools we build with"
      >
        <div className="flex w-max animate-marquee gap-14 md:gap-20 pr-14 md:pr-20">
          {loop.map((t, i) => (
            <div key={`${t.slug}-${i}`} className="flex shrink-0 items-center justify-center">
              <img
                src={`https://cdn.simpleicons.org/${t.slug}/${t.color.replace("#", "")}`}
                alt={t.name}
                title={t.name}
                className="h-7 md:h-8 w-auto opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-300"
                loading="lazy"
                width={32}
                height={32}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
