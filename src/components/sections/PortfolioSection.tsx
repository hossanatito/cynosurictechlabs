import { motion, useReducedMotion } from "framer-motion";

const featured = [
  {
    title: "Stelar",
    context: "AI storytelling platform for illustrated children's books.",
    image: "https://picsum.photos/seed/stelar-editorial-mono/1200/900",
    url: "https://stelar.appsdyno.com",
  },
  {
    title: "Sumo Check",
    context: "Deal-tracking dashboard with real-time alerts for AppSumo.",
    image: "https://picsum.photos/seed/sumocheck-analytics/900/1100",
    url: "https://sumocheck.appsdyno.com/",
  },
];

export default function PortfolioSection() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="py-24 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-16 md:mb-24 gap-8">
          <h2 className="text-4xl md:text-6xl tracking-[-0.03em] font-medium leading-[1] max-w-[16ch]">
            Selected work.
          </h2>
          <a
            href="https://cynosurictechlabs.lovable.app"
            className="hidden md:inline text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-border whitespace-nowrap"
          >
            All projects →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {featured.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={i === 0 ? "md:col-span-7 group block" : "md:col-span-5 md:mt-24 group block"}
            >
              <div className="overflow-hidden rounded-xl bg-secondary">
                <img
                  src={p.image}
                  alt={p.title}
                  className={`w-full ${i === 0 ? "aspect-[4/3]" : "aspect-[3/4]"} object-cover grayscale group-hover:grayscale-0 transition-all duration-700`}
                  loading="lazy"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="text-xl md:text-2xl tracking-[-0.02em] font-medium">{p.title}</h3>
                <span className="text-sm text-muted-foreground">View case →</span>
              </div>
              <p className="mt-2 text-muted-foreground max-w-[42ch]">{p.context}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
