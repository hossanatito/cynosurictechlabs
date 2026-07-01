import { motion, useReducedMotion } from "framer-motion";

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
  const reduce = useReducedMotion();

  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-8">
            <div className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground mb-4">
              Tooling
            </div>
            <h2 className="text-3xl md:text-5xl tracking-[-0.03em] font-medium leading-[1.05]">
              Tools we build with.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:pt-2 text-muted-foreground max-w-[38ch]">
            A pragmatic stack. Picked per project, not per trend.
          </p>
        </div>

        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-12 gap-x-6 items-center">
          {tools.map((t, i) => (
            <motion.li
              key={t.slug}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center"
            >
              <img
                src={`https://cdn.simpleicons.org/${t.slug}/9ca3af`}
                alt={t.name}
                title={t.name}
                className="h-6 md:h-7 w-auto opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
                width={28}
                height={28}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
