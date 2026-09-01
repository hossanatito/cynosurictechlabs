import { createFileRoute } from "@tanstack/react-router";

import About from "@/pages/About";
import { seoHead } from "@/lib/seo";
import { organizationSchema, webPageSchema, breadcrumbSchema } from "@/data/structuredData";

const title = "About Us — Our Team & Story";
const description =
  "Meet the team behind 250+ delivered projects. Learn about our mission, values, and commitment to delivering future-ready digital solutions.";

export const Route = createFileRoute("/about")({
  head: () =>
    seoHead({
      title,
      description,
      keywords:
        "about cynosuric tech labs, web development team, software development company, tech consulting experts, digital transformation specialists",
      path: "/about",
      structuredData: [
        organizationSchema,
        webPageSchema(title, description, "https://cynosurictechlabs.com/about"),
        breadcrumbSchema([{ name: "About", url: "https://cynosurictechlabs.com/about" }]),
      ],
    }),
  component: About,
});
