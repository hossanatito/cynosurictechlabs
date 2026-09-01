import { createFileRoute } from "@tanstack/react-router";

import Index from "@/pages/Index";
import { seoHead } from "@/lib/seo";
import { organizationSchema, webPageSchema, faqPageSchema } from "@/data/structuredData";
import { faqs } from "@/components/sections/FAQSection";

const title = "Cynosuric Tech Labs | Future-Ready Web & Software Solutions";
const description =
  "We partner with founders and teams to ship web, product, and AI systems people actually use. 6+ years, 250+ projects delivered.";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title,
      description,
      keywords:
        "web development company, custom software development, AI integration services, React development agency",
      path: "/",
      structuredData: [
        organizationSchema,
        webPageSchema(
          title,
          "Expert web development, custom software, and AI integration services. Transform your business with scalable, secure solutions.",
          "https://cynosurictechlabs.com",
        ),
        faqPageSchema(faqs),
      ],
    }),
  component: Index,
});
