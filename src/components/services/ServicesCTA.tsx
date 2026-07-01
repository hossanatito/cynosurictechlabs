import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

export default function ServicesCTA() {
  const reduce = useReducedMotion();
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.035em] font-medium max-w-2xl">
            Ready when you are.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-6 py-3 text-sm font-medium transition-transform active:scale-[0.98] self-start md:self-auto"
          >
            Start a project
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
