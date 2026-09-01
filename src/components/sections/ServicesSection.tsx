import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/lib/router-compat";

const services = [
  {
    n: "01",
    title: "Web Development",
    href: "/services",
    body: "Marketing sites, dashboards, and web apps built to load fast and last.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    n: "02",
    title: "Custom Software",
    href: "/services",
    body: "Internal tools, APIs, and platforms shaped around how your team actually works.",
    tags: ["Node", "Python", "Postgres"],
  },
  {
    n: "03",
    title: "AI Integration",
    href: "/services/ai-integration",
    body: "Practical AI features that ship: assistants, retrieval, workflows, and evals.",
    tags: ["OpenAI", "Gemini", "Zapier"],
  },
  {
    n: "04",
    title: "Product Design",
    href: "/services",
    body: "Interfaces designed with restraint. Fewer decisions for users, faster paths to value.",
    tags: ["UX", "UI", "Systems"],
  },
];

export default function ServicesSection() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="py-24 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-12 gap-8 mb-16 md:mb-24">
          <h2 className="col-span-12 md:col-span-8 text-4xl md:text-6xl tracking-[-0.03em] font-medium leading-[1]">
            What we do.
          </h2>
          <p className="col-span-12 md:col-span-4 md:pt-3 text-muted-foreground max-w-[38ch]">
            Four practices. One team. Every engagement scoped to a clear outcome.
          </p>
        </div>

        <ul className="border-t border-border">
          {services.map((s, i) => (
            <motion.li
              key={s.n}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-border group"
            >
              <Link
                to={s.href}
                className="grid grid-cols-12 gap-6 py-8 md:py-10 items-start transition-colors hover:bg-secondary/40 -mx-4 px-4 rounded-lg"
              >
                <div className="col-span-2 md:col-span-1 text-sm text-muted-foreground pt-2 font-mono">
                  {s.n}
                </div>
                <div className="col-span-10 md:col-span-6">
                  <h3 className="text-2xl md:text-3xl tracking-[-0.02em] font-medium">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground max-w-[52ch]">{s.body}</p>
                </div>
                <div className="col-span-12 md:col-span-5 flex md:justify-end gap-2 flex-wrap md:pt-3">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
