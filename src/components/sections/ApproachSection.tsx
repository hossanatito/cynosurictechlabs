import { motion, useReducedMotion } from "framer-motion";
import HeroBackground from "@/components/ui/HeroBackground";
import discoverIcon from "@/assets/discover-icon.png.asset.json";
import designBuildIcon from "@/assets/design-build-icon.png.asset.json";
import shipIterateIcon from "@/assets/ship-iterate-icon.png.asset.json";

type Step = {
  n: string;
  title: string;
  body: string;
  icon: string | null;
  iconAlt?: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Discover",
    body: "We start with a short, sharp intake. Goals, constraints, and the shape of a good outcome.",
    icon: discoverIcon.url,
    iconAlt: "Discover — curious character inspecting a glowing orb",
  },
  {
    n: "02",
    title: "Design & Build",
    body: "Weekly demos, honest scope. You see the product take form, not slide decks about it.",
    icon: designBuildIcon.url,
    iconAlt: "Design & Build — creative character with brush and speech bubble",
  },
  {
    n: "03",
    title: "Ship & Iterate",
    body: "We ship early, measure real usage, and refine. The launch is a checkpoint, not the finish line.",
    icon: shipIterateIcon.url,
    iconAlt: "Ship & Iterate — character holding a small product interface",
  },
];

export default function ApproachSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative py-24 md:py-40 bg-white overflow-hidden">
      <HeroBackground violetAt="100% 100%" blueAt="0% 80%" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl tracking-[-0.03em] font-medium leading-[1] mb-16 md:mb-24 max-w-[14ch]"
        >
          A calm way of working.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative pt-6"
            >
              {/* Icon / placeholder */}
              <div className="mb-6 h-24 w-24 md:h-28 md:w-28 flex items-center justify-center rounded-2xl bg-muted/50 overflow-hidden">
                {s.icon ? (
                  <img
                    src={s.icon}
                    alt={s.iconAlt ?? s.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-xs font-mono text-muted-foreground tracking-wider">
                    {s.n}
                  </span>
                )}
              </div>

              {/* Hairline top divider — grows on hover for tactile feedback */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-px w-10 bg-foreground/30 transition-all duration-500 ease-out group-hover:w-24 group-hover:bg-foreground/70"
              />
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-sm font-mono text-muted-foreground tracking-wider">
                  {s.n}
                </span>
                <span className="h-px flex-1 bg-foreground/10" />
              </div>
              <h3 className="text-2xl tracking-[-0.02em] font-medium mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-[38ch]">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

