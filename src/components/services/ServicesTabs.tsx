import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/lib/router-compat";

const services = [
  {
    name: "Web Development",
    description:
      "Modern, responsive web applications optimized for performance, UX, and search visibility.",
    capabilities: [
      "React & Next.js",
      "Progressive Web Apps",
      "WordPress & CMS",
      "API integration",
      "Performance tuning",
    ],
  },
  {
    name: "Custom Software",
    description:
      "Bespoke internal tools and platforms tailored to how your team actually works.",
    capabilities: [
      "SaaS platforms",
      "CRM & ERP systems",
      "Business process automation",
      "Legacy modernization",
      "Database design",
    ],
  },
  {
    name: "UI/UX Design",
    description:
      "User-centered design that balances aesthetics with functionality end to end.",
    capabilities: [
      "User research",
      "Wireframing & prototyping",
      "Interface design",
      "Design systems",
      "Accessibility",
    ],
  },
  {
    name: "E-Commerce",
    description:
      "Scalable storefronts with clean checkout, honest analytics, and real conversion focus.",
    capabilities: [
      "Shopify",
      "WooCommerce",
      "Custom platforms",
      "Payment gateways",
      "E-commerce SEO",
    ],
  },
  {
    name: "AI & Automation",
    href: "/services/ai-integration",
    description:
      "Practical AI features and workflow automation grounded in your actual business.",
    capabilities: [
      "OpenAI & Gemini integrations",
      "Zapier & n8n workflows",
      "Custom agents",
      "Data pipelines",
      "Chat interfaces",
    ],
  },
];

export default function ServicesList() {
  const reduce = useReducedMotion();
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-12">
          Practices
        </p>
        <div className="divide-y divide-border border-t border-b border-border">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 transition-colors duration-300 hover:bg-muted/30"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-[2px] bg-accent scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
              />
              <div className="md:col-span-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border bg-background text-xs font-mono text-muted-foreground mb-4 group-hover:border-accent/30 group-hover:text-accent transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] group-hover:text-accent transition-colors duration-300">
                  {s.name}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[52ch] mb-6">
                  {s.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {s.capabilities.map((c) => (
                    <li
                      key={c}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted text-foreground/80 border border-border group-hover:border-accent/20 group-hover:bg-accent/5 transition-colors duration-300"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                {s.href && (
                  <Link
                    to={s.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    Explore AI integration services
                    <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
