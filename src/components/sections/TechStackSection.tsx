import { motion, useReducedMotion } from "framer-motion";

const groups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "TanStack"],
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
    items: ["OpenAI", "Gemini", "n8n", "Hugging Face"],
  },
];

const categoryTint = [
  "bg-blue-500/[0.04]",
  "bg-emerald-500/[0.04]",
  "bg-amber-500/[0.04]",
  "bg-violet-500/[0.04]",
];

const categoryAccent = [
  "text-blue-600 dark:text-blue-400",
  "text-emerald-600 dark:text-emerald-400",
  "text-amber-600 dark:text-amber-400",
  "text-violet-600 dark:text-violet-400",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl border border-border p-6 ${categoryTint[i]} overflow-hidden`}
            >
              <div
                className={`absolute top-0 left-6 w-12 h-[2px] ${(categoryAccent[i] ?? "").replace("text-", "bg-")}`}
                aria-hidden="true"
              />
              <div className="flex items-baseline gap-3 mb-5">
                <span className={`text-sm font-mono tracking-wider ${categoryAccent[i]}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl tracking-[-0.02em] font-medium">{g.label}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <li
                    key={t}
                    className="text-sm text-muted-foreground bg-background/60 border border-border rounded-full px-3.5 py-1.5 hover:text-foreground hover:border-foreground/40 hover:bg-background transition-colors"
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
