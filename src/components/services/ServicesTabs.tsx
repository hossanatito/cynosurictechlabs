import { motion, useReducedMotion } from "framer-motion";

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
    name: "Mobile Apps",
    description:
      "High-performance native and cross-platform apps for iOS and Android.",
    capabilities: [
      "iOS & Android native",
      "React Native",
      "Flutter",
      "App Store optimization",
      "Maintenance",
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
        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 border-t border-border first:border-t-0"
            >
              <div className="md:col-span-4">
                <p className="font-mono text-xs text-muted-foreground mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.02em]">
                  {s.name}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[52ch] mb-6">
                  {s.description}
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {s.capabilities.map((c) => (
                    <li key={c} className="text-sm text-foreground/80">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
