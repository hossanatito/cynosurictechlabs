import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Planning",
    description:
      "We start with your business goals, users, and constraints — the foundation for every decision after.",
    timeframe: "1–2 weeks",
  },
  {
    title: "Design & Prototype",
    description:
      "Wireframes and interactive prototypes so we can see and feel the product before building it.",
    timeframe: "2–3 weeks",
  },
  {
    title: "Development",
    description:
      "Focused builds using modern stacks, with performance and security baked in from the start.",
    timeframe: "4–8 weeks",
  },
  {
    title: "Testing & QA",
    description:
      "Rigorous quality checks across devices, browsers, and edge cases before anything ships.",
    timeframe: "1–2 weeks",
  },
  {
    title: "Deployment",
    description:
      "A smooth launch — CI/CD, monitoring, and handover so nothing breaks in production.",
    timeframe: "1 week",
  },
  {
    title: "Support & Maintenance",
    description:
      "Ongoing partnership. Updates, monitoring, and iteration to keep the product healthy.",
    timeframe: "Ongoing",
  },
];

export default function ServicesProcess() {
  const reduce = useReducedMotion();
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-white/50 mb-6">
            Process
          </p>
          <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-[-0.035em] font-medium">
            How the work moves.
          </h2>
        </div>
        <div>
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 border-t border-white/10 first:border-t-0"
            >
              <div className="md:col-span-2">
                <p className="font-mono text-xs text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-xl md:text-2xl font-medium tracking-[-0.02em] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-[48ch]">
                  {step.description}
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <p className="font-mono text-xs text-white/50">
                  {step.timeframe}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
