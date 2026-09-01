import { createFileRoute } from "@tanstack/react-router";

import Contact from "@/pages/Contact";
import { seoHead } from "@/lib/seo";
import { organizationSchema, webPageSchema, breadcrumbSchema } from "@/data/structuredData";

const title = "Contact Us - Get a Free Consultation";
const description =
  "Ready to transform your digital presence? Contact Cynosuric Tech Labs for a free consultation. Email: support@cynosurictechlabs.net";

export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead({
      title,
      description,
      keywords:
        "contact web development company, software development consultation, tech consulting contact, get a quote, free consultation",
      path: "/contact",
      structuredData: [
        organizationSchema,
        webPageSchema(title, description, "https://cynosurictechlabs.com/contact"),
        breadcrumbSchema([{ name: "Contact", url: "https://cynosurictechlabs.com/contact" }]),
      ],
    }),
  component: Contact,
});
