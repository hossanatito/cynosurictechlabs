import { motion, useReducedMotion } from "framer-motion";
import whyTeamsStayBg from "@/assets/why-teams-stay-bg.png.asset.json";

const reasons = [
  {
    title: "Senior hands only",
    body: "No juniors billed as seniors. Every engineer on your project has shipped production systems for years.",
  },
  {
    title: "Scope you can trust",
    body: "Fixed weekly cadence. If something changes, we say so — before the invoice, not after.",
  },
  {
    title: "You own everything",
    body: "Your code, your accounts, your keys. No lock-in, no retainer required to keep the lights on.",
  },
  {
    title: "Built to last",
    body: "Boring tech where it helps, modern tech where it matters. The stuff we build is still running years later.",
  },
];

export default function WhyChooseUsSection() {
  const reduce = useReducedMotion();

  return (
    <section id="why-choose-us" className="relative overflow-hidden py-24 md:py-40 bg-black text-white border-t border-white/10">
      <img
        src={whyTeamsStayBg.url}
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-auto opacity-30 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-12 gap-8 mb-16 md:mb-24">
          <h2 className="col-span-12 md:col-span-8 text-4xl md:text-6xl tracking-[-0.03em] font-medium leading-[1]">
            Why teams stay.
          </h2>
          <p className="col-span-12 md:col-span-4 md:pt-3 text-white/60 max-w-[38ch]">
            Four reasons clients keep sending the next project our way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative pt-6"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-px w-10 bg-white/30 transition-all duration-500 ease-out group-hover:w-24 group-hover:bg-white/70"
              />
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-sm font-mono text-white/50 tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <h3 className="text-2xl tracking-[-0.02em] font-medium mb-3">{r.title}</h3>
              <p className="text-white/60 leading-relaxed max-w-[46ch]">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
