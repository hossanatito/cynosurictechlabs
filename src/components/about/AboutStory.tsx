import { motion, useReducedMotion } from "framer-motion";

export default function AboutStory() {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid md:grid-cols-12 gap-10">
          <motion.div {...fade(0)} className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Our story
            </p>
          </motion.div>
          <motion.div {...fade(0.1)} className="md:col-span-8 space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-[60ch]">
              Founded in 2019, Cynosuric Tech Labs emerged from a simple idea: bridge the gap
              between complex technology and elegant experience. We came together as engineers
              and designers who kept meeting teams stuck between technical requirements and
              products people would actually use.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
              The name comes from "cynosure" — something that draws attention by its brilliance.
              That's the standard we hold our work to: solutions that stand out because they
              perform, not because they shout.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
