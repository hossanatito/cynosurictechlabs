import { motion, useReducedMotion } from "framer-motion";
import titoAvatar from "@/assets/tito.png";
import mmaAvatar from "@/assets/mma.png";
import cynosuricWorldAvatar from "@/assets/cynosuric-world-team.png.asset.json";

const team = [
  {
    name: "Tito",
    role: "Founder",
    image: titoAvatar,
    alt: "Portrait illustration of Tito, founder of Cynosuric Tech Labs",
    quote: "I turn 'that sounds impossible' into 'let's ship it Monday.'",
  },
  {
    name: "Mma",
    role: "Dev Team",
    image: mmaAvatar,
    alt: "Portrait illustration of Mma, developer at Cynosuric Tech Labs",
    quote: "I read the docs so your users never have to read an error message.",
  },
];

export default function AboutTeam() {
  const reduce = useReducedMotion();
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6 text-center">
        <h2 className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-12">
          Meet the team
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-start sm:items-stretch gap-12 md:gap-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center max-w-xs"
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
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground mt-2 mb-5">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                “{member.quote}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
