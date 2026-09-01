import { motion, useReducedMotion } from "framer-motion";

export default function AboutMission() {
  const reduce = useReducedMotion();
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-8"
        >
          Mission
        </motion.h2>
        <motion.blockquote
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.03em] font-medium max-w-5xl"
        >
          Build <span className="italic font-normal">fewer</span>, better things.
          Ship software that earns its place — and stays there.
        </motion.blockquote>
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-sm text-muted-foreground"
        >
          — The Cynosuric team
        </motion.p>
      </div>
    </section>
  );
}
