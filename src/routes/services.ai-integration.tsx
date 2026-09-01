import { createFileRoute } from "@tanstack/react-router";

import AiIntegration from "@/pages/AiIntegration";
import { seoHead } from "@/lib/seo";
import {
  organizationSchema,
  webPageSchema,
  breadcrumbSchema,
} from "@/data/structuredData";

const title = "AI Integration Services";
const description =
  "We build production AI into existing products: assistants grounded in your data, retrieval workflows, automation, and evals with cost and quality controls.";
const url = "https://cynosurictechlabs.com/services/ai-integration";

const aiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Integration Services",
  serviceType: "AI Integration",
  description,
  url,
  provider: {
    "@type": "Organization",
    name: "Cynosuric Tech Labs",
    url: "https://cynosurictechlabs.com",
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Integration",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI assistants",
          description:
            "Support and internal assistants grounded in your documents, tickets, and product data with per-user access scoping.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retrieval workflows",
          description:
            "Ingestion, embeddings, and hybrid search pipelines that keep answers current and cite their sources.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Workflow automation",
          description:
            "Model-driven triage, extraction, summarisation, and routing with guardrails and human checkpoints.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Evals and monitoring",
          description:
            "Test sets built from real cases, scored on every prompt or model change, with usage and cost dashboards.",
        },
      },
    ],
  },
};

export const Route = createFileRoute("/services/ai-integration")({
  head: () =>
    seoHead({
      title,
      description,
      keywords:
        "AI integration services, RAG development, AI assistant development, LLM integration, retrieval augmented generation, AI workflow automation, LLM evals",
      path: "/services/ai-integration",
      structuredData: [
        organizationSchema,
        webPageSchema(title, description, url),
        aiServiceSchema,
        breadcrumbSchema([
          { name: "Services", url: "https://cynosurictechlabs.com/services" },
          { name: "AI Integration", url },
        ]),
      ],
    }),
  component: AiIntegration,
});
