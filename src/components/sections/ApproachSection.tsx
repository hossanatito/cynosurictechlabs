import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We start with a short, sharp intake. Goals, constraints, and the shape of a good outcome.",
  },
  {
    n: "02",
    title: "Design & Build",
    body: "Weekly demos, honest scope. You see the product take form, not slide decks about it.",
  },
  {
    n: "03",
    title: "Ship & Iterate",
    body: "We ship early, measure real usage, and refine. The launch is a checkpoint, not the finish line.",
  },
];

export default function ApproachSection() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-6xl tracking-[-0.03em] font-medium leading-[1] mb-16 md:mb-24 max-w-[14ch]">
          A calm way of working.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-5xl md:text-6xl font-mono text-muted-foreground/60 mb-6">
                {s.n}
              </div>
              <h3 className="text-2xl tracking-[-0.02em] font-medium mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-[38ch]">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
