import { motion, useReducedMotion } from "framer-motion";

const values = [
  {
    title: "Craft",
    description:
      "Every detail is considered. We ship work we'd be proud to put our name on, at every scale.",
  },
  {
    title: "Clarity",
    description:
      "Straight talk on scope, tradeoffs, and timelines. No jargon, no theater, no surprises at invoice time.",
  },
  {
    title: "Longevity",
    description:
      "We build systems meant to last — clean code, honest architecture, and documentation that survives us.",
  },
];

export default function AboutValues() {
  const reduce = useReducedMotion();
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6">
        <h2 className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-12">
          What we value
        </h2>
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-xs text-muted-foreground mb-4">
                0{i + 1}
              </p>
              <h3 className="text-xl md:text-2xl font-medium tracking-[-0.02em] mb-3">
                {v.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
