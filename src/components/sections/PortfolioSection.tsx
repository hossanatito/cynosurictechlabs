import { motion, useReducedMotion } from "framer-motion";
import stelarPreview from "@/assets/stelar-preview.png";
import sumocheckPreview from "@/assets/sumocheck-preview.png";
import springPreview from "@/assets/spring-preview.png.asset.json";
import bundlePreview from "@/assets/bundle-preview.png.asset.json";
import portfolioBg from "@/assets/portfolio-bg.webp.asset.json";

const featured = [
  {
    title: "Stelar",
    meta: "AI Platform / 2024",
    description: "AI kids' storybook maker that turns imagination into illustrated tales.",
    image: stelarPreview,
    url: "https://usestelar.com/",
  },
  {
    title: "Sumo Check",
    meta: "SaaS / 2024",
    description: "Expired deal checker that surfaces hidden savings on past purchases.",
    image: sumocheckPreview,
    url: "https://sumocheck.appsdyno.com/",
  },
  {
    title: "Springwater Immigration",
    meta: "Legal Tech / 2024",
    description: "Client-facing immigration portal for case tracking and document submission.",
    image: springPreview.url,
    url: "https://spring.appsdyno.com/",
  },
  {
    title: "Bundle Deals Market",
    meta: "E-Commerce / 2024",
    description: "Online marketplace for discovering and buying SaaS bundle deals.",
    image: bundlePreview.url,
    url: "https://bundle.cynoapps.cloud/",
  },
];

export default function PortfolioSection() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="py-24 md:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between border-b border-border pb-8 mb-16 md:mb-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0047FF] mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-6xl tracking-[-0.03em] font-light leading-[1]">
              Selected <span className="font-medium">Work</span>
            </h2>
          </div>
          <span className="hidden md:block text-sm text-muted-foreground font-medium tabular-nums">
            01 - 04
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-32">
          {featured.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={i % 2 === 1 ? "md:mt-24 group block" : "group block"}
            >
              <div className="relative overflow-hidden rounded-xl bg-secondary mb-6">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full aspect-video object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {p.meta}
                  </p>
                  <h3 className="text-xl md:text-2xl tracking-[-0.02em] font-medium text-foreground group-hover:text-[#0047FF] transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-sm">
                    {p.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-foreground font-medium group/btn shrink-0">
                  <span className="text-xs uppercase tracking-wider">View project</span>
                  <span className="w-8 h-px bg-border group-hover/btn:bg-[#0047FF] group-hover/btn:w-10 transition-all duration-300" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
