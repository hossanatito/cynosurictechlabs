import { motion, useReducedMotion } from "framer-motion";

const groups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "PHP", "WordPress"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "Supabase"],
  },
  {
    label: "AI & Automation",
    items: ["OpenAI", "Gemini", "n8n", "Zapier", "Hugging Face"],
  },
];

export default function TechStackSection() {
  const reduce = useReducedMotion();

  return (
    <section id="tech-stack" className="py-24 md:py-40 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-12 gap-8 mb-16 md:mb-24">
          <h2 className="col-span-12 md:col-span-8 text-4xl md:text-6xl tracking-[-0.03em] font-medium leading-[1]">
            The tools we reach for.
          </h2>
          <p className="col-span-12 md:col-span-4 md:pt-3 text-muted-foreground max-w-[38ch]">
            Boring where boring works. Modern where it matters. Chosen for the problem, not the résumé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-border pt-6"
            >
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-sm font-mono text-muted-foreground tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl tracking-[-0.02em] font-medium">{g.label}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <li
                    key={t}
                    className="text-sm text-muted-foreground border border-border rounded-full px-3.5 py-1.5 hover:text-foreground hover:border-foreground/40 transition-colors"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
