import { motion, useReducedMotion } from "framer-motion";
import HeroBackground from "@/components/ui/HeroBackground";

const testimonials = [
  {
    quote:
      "They understood the product before writing a line of code. What shipped felt inevitable — like it had always been the answer.",
    name: "Sarah Johnson",
    role: "CTO, HealthTech Innovations",
  },
  {
    quote:
      "Weekly demos, honest scope, no theatre. We launched on time and I actually understood the codebase they handed us.",
    name: "Michael Roberts",
    role: "CEO, Retail Plus",
  },
  {
    quote:
      "The kind of team you introduce to your investors. Sharp taste, low ego, and they made our roadmap tighter, not longer.",
    name: "Jessica Chen",
    role: "Founder, FinanceApp",
  },
];

export default function TestimonialsSection() {
  const reduce = useReducedMotion();

  return (
    <section id="testimonials" className="relative py-24 md:py-40 bg-white overflow-hidden">
      <HeroBackground violetAt="100% 20%" blueAt="0% 80%" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-6xl tracking-[-0.03em] font-medium leading-[1] mb-16 md:mb-24 max-w-[16ch]">
          Words from the people we built with.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative pt-8 border-t border-foreground/10"
            >
              <blockquote className="text-lg md:text-xl tracking-[-0.01em] leading-[1.5] text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
