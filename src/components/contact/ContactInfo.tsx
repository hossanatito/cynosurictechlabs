import { motion, useReducedMotion } from "framer-motion";

const channels = [
  { label: "Email", value: "support@cynosurictechlabs.net", href: "mailto:support@cynosurictechlabs.net" },
  { label: "Response time", value: "Within 1 business day" },
  { label: "Working hours", value: "Mon–Fri · 9:00–18:00 IST" },
  { label: "Remote", value: "Working with teams worldwide" },
];

export default function ContactInfo() {
  const reduce = useReducedMotion();
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-8">
            Write to us
          </p>
          <a
            href="mailto:support@cynosurictechlabs.net"
            className="block text-3xl md:text-5xl lg:text-6xl tracking-[-0.03em] font-medium leading-[1.1] underline underline-offset-[8px] decoration-border hover:decoration-foreground transition-colors break-all md:break-normal"
          >
            support@cynosurictechlabs.net
          </a>
        </motion.div>

        <div className="mt-20 md:mt-24">
          {channels.map((c, i) => (
            <motion.div
              key={c.label}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid md:grid-cols-12 gap-4 py-5 border-t border-border last:border-b"
            >
              <div className="md:col-span-4">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {c.label}
                </p>
              </div>
              <div className="md:col-span-8">
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-base text-foreground hover:opacity-70 transition-opacity"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="text-base text-foreground">{c.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
