import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const ROTATING_WORDS = ["software", "websites", "automations"] as const;

export default function HeroSection() {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);
  const word = ROTATING_WORDS[wordIndex];

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
          <span className="relative inline-grid align-baseline overflow-hidden [&>*]:[grid-area:1/1]">
            {/* Invisible sizer: reserves width of the widest word so layout never shifts */}
            <span aria-hidden className="invisible whitespace-pre">
              {ROTATING_WORDS.reduce((a, b) => (b.length > a.length ? b : a))}
            </span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={word}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: "0.4em" }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: "-0.4em" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-left whitespace-pre"
              >
                {word}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          that<br />
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
