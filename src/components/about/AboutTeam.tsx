import { motion, useReducedMotion } from "framer-motion";
import titoAvatar from "@/assets/tito.png.asset.json";
import mmaAvatar from "@/assets/mma.png.asset.json";

const team = [
  {
    name: "Tito",
    role: "Founder",
    image: titoAvatar.url,
    alt: "Portrait illustration of Tito, founder of Cynosuric Tech Labs",
  },
  {
    name: "Mma",
    role: "Dev Team",
    image: mmaAvatar.url,
    alt: "Portrait illustration of Mma, developer at Cynosuric Tech Labs",
  },
];

export default function AboutTeam() {
  const reduce = useReducedMotion();
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-12">
          Meet the team
        </p>
        <div className="grid sm:grid-cols-2 gap-12 md:gap-16 max-w-2xl">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-muted mb-6">
                <img
                  src={member.image}
                  alt={member.alt}
                  width={256}
                  height={256}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-medium tracking-[-0.02em]">
                {member.name}
              </h3>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground mt-2">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
