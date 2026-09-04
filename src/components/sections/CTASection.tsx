import { motion, useReducedMotion } from "framer-motion";
import contactCharacter from "@/assets/contact-hero-character.png.asset.json";

export default function CTASection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-32 md:py-48 border-t border-border">
      <img
        src={contactCharacter.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 bottom-0 h-[70%] md:h-[85%] w-auto opacity-25 md:opacity-40"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl tracking-[-0.04em] font-medium leading-[0.95] max-w-[18ch] mx-auto"
        >
          Have something<br />worth building?
        </motion.h2>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12"
        >
          <a
            href="mailto:support@cynosurictechlabs.net"
            className="inline-flex items-center gap-3 text-lg md:text-xl font-medium border-b-2 border-foreground pb-1 hover:opacity-70 transition-opacity"
          >
            support@cynosurictechlabs.net
            <span aria-hidden>→</span>
          </a>
          <p className="mt-6 text-sm text-muted-foreground">
            Typical reply within one business day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
