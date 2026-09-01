import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A focused website is typically 4–6 weeks; larger applications run 3–6 months. We give you a real timeline after discovery.",
  },
  {
    q: "What is your pricing structure?",
    a: "Either fixed-price or time-and-materials, depending on how well-defined the work is. Every quote is transparent and itemized.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes — we offer maintenance and support arrangements so the product stays healthy after launch.",
  },
  {
    q: "How do you handle project communication?",
    a: "You get a single point of contact, weekly demos, and a shared workspace. No black boxes, no status theater.",
  },
  {
    q: "Can you work with our existing systems?",
    a: "Yes. Most of our work integrates with something — CRMs, ERPs, data warehouses, legacy code. We're comfortable in existing systems.",
  },
  {
    q: "Do you provide training for our team?",
    a: "We hand over documentation and run training sessions so your team owns the product after we ship.",
  },
];

export default function ServicesFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-[-0.035em] font-medium">
            Common questions.
          </h2>
        </div>
        <div>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="border-t border-border last:border-b"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-medium text-foreground group-hover:opacity-70 transition-opacity">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  )}
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-sm md:text-base text-muted-foreground leading-relaxed max-w-[60ch]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
