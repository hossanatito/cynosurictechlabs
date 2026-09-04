import { createFileRoute } from "@tanstack/react-router";

import Services from "@/pages/Services";
import { seoHead } from "@/lib/seo";
import {
  organizationSchema,
  webPageSchema,
  serviceSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/data/structuredData";
import { faqs as servicesFaqs } from "@/components/services/ServicesFAQ";

const title = "Web & Software Development Services";
const description =
  "Comprehensive tech services: custom web development, AI integration, cloud solutions. Starter to Enterprise packages. Get a free consultation.";

export const Route = createFileRoute("/services/")({
  head: () =>
    seoHead({
      title,
      description,
      keywords:
        "web development services, custom software packages, AI integration services, enterprise solutions, cloud solutions, tech consulting",
      path: "/services",
      structuredData: [
        organizationSchema,
        webPageSchema(title, description, "https://cynosurictechlabs.com/services"),
        serviceSchema,
        faqPageSchema(servicesFaqs),
        breadcrumbSchema([{ name: "Services", url: "https://cynosurictechlabs.com/services" }]),
      ],
    }),
  component: Services,
});
