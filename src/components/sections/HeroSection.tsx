import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative min-h-[90dvh] flex items-center pt-32 pb-24 md:pt-40 md:pb-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.p
          {...fade(0)}
          className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6"
        >
          Cynosuric Tech Labs / Est. 2019
        </motion.p>

        <motion.h1
          {...fade(0.08)}
          className="text-[10vw] leading-[1.05] tracking-[-0.035em] font-medium md:text-[5.25rem] lg:text-[6rem]"
        >
          We build<br />
          software that<br />
          <span className="italic font-normal pr-1">earns</span> its place.
        </motion.h1>

        <motion.div {...fade(0.2)} className="mt-8 md:mt-10">
          <p className="text-base md:text-lg text-muted-foreground max-w-[46ch] leading-relaxed">
            We partner with founders and teams to ship web, product, and AI systems that people actually use.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-6 py-3 text-sm font-medium transition-transform active:scale-[0.98]"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
            <a
              href="#work"
              className="text-sm font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              See selected work
            </a>
          </div>

          <p className="mt-10 text-xs text-muted-foreground">
            Trusted by teams across fintech, health, and SaaS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
