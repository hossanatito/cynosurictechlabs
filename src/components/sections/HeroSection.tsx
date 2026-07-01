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
    <section className="relative min-h-[100dvh] flex items-end pt-24 pb-20 md:pb-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-9">
            <motion.p
              {...fade(0)}
              className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-8"
            >
              Cynosuric Tech Labs / Est. 2019
            </motion.p>

            <motion.h1
              {...fade(0.08)}
              className="text-[13vw] leading-[0.95] tracking-[-0.04em] font-medium md:text-[7.5rem] lg:text-[8.5rem]"
            >
              We build<br />
              software that<br />
              <span className="italic font-normal pr-1">earns</span> its place.
            </motion.h1>
          </div>

          <div className="col-span-12 md:col-span-3" />

          <motion.div
            {...fade(0.2)}
            className="col-span-12 md:col-start-6 md:col-span-7 mt-10 md:mt-16"
          >
            <p className="text-base md:text-lg text-muted-foreground max-w-[52ch] leading-relaxed">
              We partner with founders and teams to ship web, product, and AI systems that people actually use.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
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

            <p className="mt-8 text-xs text-muted-foreground">
              Trusted by teams across fintech, health, and SaaS.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
