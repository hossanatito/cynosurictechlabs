import { motion, useReducedMotion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "@/lib/router-compat";

const outcomes = [
  {
    n: "01",
    title: "Assistants that answer from your data",
    body: "Support and internal assistants grounded in your documents, tickets, and product data — not generic model knowledge. Scoped to what each user is allowed to see.",
  },
  {
    n: "02",
    title: "Retrieval workflows",
    body: "Ingestion, chunking, embeddings, and hybrid search wired into a pipeline that stays fresh as your content changes. Answers cite the source they came from.",
  },
  {
    n: "03",
    title: "Workflow automation",
    body: "The repetitive middle of a process — triage, extraction, summarisation, routing — handed to a model with clear guardrails and a human checkpoint where it matters.",
  },
  {
    n: "04",
    title: "Evals before launch",
    body: "A test set built from your real cases, scored on every prompt or model change, so quality is a number you can watch rather than a feeling.",
  },
];

const steps = [
  {
    k: "Scope",
    body: "One week to find the workflow worth automating, agree the success metric, and rule out the ideas that only look good in a demo.",
  },
  {
    k: "Prototype",
    body: "A working slice against your real data — enough to judge quality, latency, and cost before anyone commits to a build.",
  },
  {
    k: "Harden",
    body: "Evals, fallbacks, rate limits, cost caps, logging, and access rules. This is the part that separates a demo from production.",
  },
  {
    k: "Ship & watch",
    body: "Rollout behind a flag, dashboards for usage and spend, and a review loop so the system improves on evidence rather than vibes.",
  },
];

const stack = [
  "OpenAI",
  "Google Gemini",
  "Anthropic Claude",
  "Vector search",
  "Postgres / pgvector",
  "n8n",
  "TypeScript",
  "Python",
];

export default function AiIntegration() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 md:pt-44 pb-20 md:pb-28">
          <div className="mx-auto w-full max-w-5xl px-6">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                <li>
                  <Link to="/services" className="hover:text-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-foreground">AI Integration</li>
              </ol>
            </nav>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.035em] leading-[1.02] max-w-4xl"
            >
              AI integration that ships.
            </motion.h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-[58ch] leading-relaxed"
            >
              We build assistants, retrieval workflows, and automations into products
              that already have users — with evals, cost controls, and a clear owner
              for every failure mode.
            </motion.p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-6 py-3 text-sm font-medium transition-transform active:scale-[0.98]"
              >
                Scope an AI project
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary/60"
              >
                All services
              </Link>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 md:py-28 border-t border-border">
          <div className="mx-auto w-full max-w-5xl px-6">
            <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.03em] mb-12 md:mb-16">
              What we build.
            </h2>
            <div className="border-t border-border divide-y divide-border">
              {outcomes.map((o, i) => (
                <motion.div
                  key={o.n}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="grid md:grid-cols-12 gap-4 md:gap-10 py-10"
                >
                  <div className="md:col-span-4 flex items-start gap-4">
                    <span className="text-xs font-mono text-muted-foreground pt-2">{o.n}</span>
                    <h3 className="text-xl md:text-2xl font-medium tracking-[-0.02em]">
                      {o.title}
                    </h3>
                  </div>
                  <p className="md:col-span-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
                    {o.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28 bg-foreground text-background">
          <div className="mx-auto w-full max-w-5xl px-6">
            <p className="text-xs uppercase tracking-[0.22em] opacity-60 mb-6">Process</p>
            <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.03em] mb-12 md:mb-16">
              How an AI build moves.
            </h2>
            <div className="grid sm:grid-cols-2 gap-px bg-background/10">
              {steps.map((s) => (
                <div key={s.k} className="bg-foreground p-8 md:p-10">
                  <h3 className="text-lg md:text-xl font-medium mb-3">{s.k}</h3>
                  <p className="text-sm md:text-base opacity-70 leading-relaxed max-w-[46ch]">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="py-20 md:py-28 border-t border-border">
          <div className="mx-auto w-full max-w-5xl px-6">
            <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.03em] mb-8">
              Tools we reach for.
            </h2>
            <ul className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <li
                  key={t}
                  className="text-sm px-4 py-2 rounded-full border border-border bg-muted text-foreground/80"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 border-t border-border">
          <div className="mx-auto w-full max-w-5xl px-6 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.035em] max-w-2xl leading-[1.05]">
              Have a workflow that could use AI?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-6 py-3 text-sm font-medium transition-transform active:scale-[0.98] self-start md:self-auto"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
