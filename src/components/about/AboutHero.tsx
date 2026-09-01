import { motion, useReducedMotion } from "framer-motion";
import HeroBackground from "@/components/ui/HeroBackground";

export default function AboutHero() {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
      <HeroBackground violetAt="0% 20%" blueAt="100% 0%" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">

        <motion.p
          {...fade(0)}
          className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6"
        >
          About / Since 2022
        </motion.p>
        <motion.h1
          {...fade(0.08)}
          className="text-[10vw] leading-[1.05] tracking-[-0.035em] font-medium md:text-[4.5rem] lg:text-[5.5rem] max-w-4xl"
        >
          A small studio building<br />
          software that <span className="italic font-normal">lasts</span>.
        </motion.h1>
        <motion.p
          {...fade(0.2)}
          className="mt-8 md:mt-10 text-base md:text-lg text-muted-foreground max-w-[52ch] leading-relaxed"
        >
          We're engineers and designers partnering with founders to ship products people actually use.
        </motion.p>
      </div>
    </section>
  );
}
