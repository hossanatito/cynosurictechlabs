const tools = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Supabase", slug: "supabase" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "OpenAI", slug: "openai" },
  { name: "Vercel", slug: "vercel" },
  { name: "Stripe", slug: "stripe" },
  { name: "n8n", slug: "n8n" },
  { name: "Zapier", slug: "zapier" },
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
                src={`https://cdn.simpleicons.org/${t.slug}/9ca3af`}
                alt={t.name}
                title={t.name}
                className="h-7 md:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
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
