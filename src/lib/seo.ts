export const SITE_URL = "https://cynosurictechlabs.com";

type SeoInput = {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  ogType?: string;
  structuredData?: object[];
};

type HeadMeta = Record<string, string>;

/**
 * Builds TanStack Start `head()` entries for a page. Replaces the old
 * react-helmet-async <SEOHead /> component — meta now renders server-side, so
 * non-JS crawlers (LinkedIn, Slack) read per-page titles and descriptions.
 */
export function seoHead({
  title,
  description,
  keywords,
  path,
  ogType = "website",
  structuredData = [],
}: SeoInput) {
  const fullTitle = title.includes("Cynosuric") ? title : `${title} | Cynosuric Tech Labs`;
  const url = `${SITE_URL}${path}`;

  const meta: HeadMeta[] = [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "author", content: "Cynosuric Tech Labs" },
    { property: "og:type", content: ogType },
    { property: "og:url", content: url },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:site_name", content: "Cynosuric Tech Labs" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: url },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];

  if (keywords) meta.push({ name: "keywords", content: keywords });

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts: structuredData.map((schema) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema),
    })),
  };
}
