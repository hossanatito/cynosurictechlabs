import { Link } from "@/lib/router-compat";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    title: "Starter",
    description:
      "For small teams establishing a first serious digital presence.",
    features: [
      "Custom website design",
      "Responsive development",
      "Basic SEO setup",
      "Contact integration",
      "1 month of support",
    ],
    recommended: false,
  },
  {
    title: "Professional",
    description:
      "For established businesses expanding what they ship online.",
    features: [
      "Advanced site or app design",
      "CMS implementation",
      "E-commerce functionality",
      "SEO & analytics",
      "Payment gateway",
      "3 months of support",
    ],
    recommended: true,
  },
  {
    title: "Enterprise",
    description:
      "For organizations with complex requirements and larger scope.",
    features: [
      "Custom software development",
      "Enterprise integrations",
      "Advanced security",
      "Performance optimization",
      "Dedicated project manager",
      "Ongoing maintenance",
    ],
    recommended: false,
  },
];

export default function ServicesPackages() {
  const reduce = useReducedMotion();
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
            Packages
          </p>
          <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-[-0.035em] font-medium">
            Ways to work together.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col border border-border rounded-lg p-8 ${
                pkg.recommended ? "bg-foreground text-background" : "bg-background"
              }`}
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="text-xl font-medium tracking-[-0.02em]">
                  {pkg.title}
                </h3>
                {pkg.recommended && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">
                    Recommended
                  </span>
                )}
              </div>
              <p
                className={`text-sm leading-relaxed mb-8 ${
                  pkg.recommended ? "text-background/70" : "text-muted-foreground"
                }`}
              >
                {pkg.description}
              </p>
              <ul className="space-y-3 mb-10 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`h-4 w-4 mt-0.5 shrink-0 ${
                        pkg.recommended ? "text-background" : "text-foreground"
                      }`}
                      strokeWidth={1.5}
                    />
                    <span
                      className={pkg.recommended ? "text-background/90" : ""}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-transform active:scale-[0.98] ${
                  pkg.recommended
                    ? "bg-background text-foreground"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                Get a quote
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
