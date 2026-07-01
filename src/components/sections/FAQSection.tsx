import { motion, useReducedMotion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A focused marketing site takes 2–4 weeks. A product or internal platform usually runs 8–16 weeks, shipped in weekly increments so you see progress instead of promises.",
  },
  {
    q: "How do you price work?",
    a: "Fixed-scope engagements for defined outcomes, or a weekly rate for ongoing product work. You'll always see the number before we start — no billing surprises.",
  },
  {
    q: "Who owns the code and accounts?",
    a: "You do. Every repository, cloud account, domain, and API key is yours from day one. We work inside your infrastructure, not ours.",
  },
  {
    q: "What happens after launch?",
    a: "Launch is a checkpoint, not the end. You can bring us back for iteration, add an optional support retainer, or take the codebase in-house — no lock-in either way.",
  },
  {
    q: "Do you work with our existing stack?",
    a: "Yes. We regularly extend existing codebases, integrate with legacy systems, and hand work off to internal teams. We choose the stack that fits the problem, not the other way around.",
  },
  {
    q: "Can we start with something small?",
    a: "Please do. A short discovery engagement or a single well-scoped feature is often the best way to see how we work before committing to more.",
  },
];

export default function FAQSection() {
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="py-24 md:py-40 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-12 gap-8 mb-16 md:mb-24">
          <h2 className="col-span-12 md:col-span-8 text-4xl md:text-6xl tracking-[-0.03em] font-medium leading-[1]">
            Questions, answered plainly.
          </h2>
          <p className="col-span-12 md:col-span-4 md:pt-3 text-muted-foreground max-w-[38ch]">
            The things most people ask before the first call. If yours isn't here, just email us.
          </p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl tracking-[-0.01em] font-medium py-6 hover:no-underline hover:text-foreground/70">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6 max-w-[62ch]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
