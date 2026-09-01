const SITE_URL = "https://cynosurictechlabs.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cynosuric Tech Labs",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "description": "Future-ready web and software solutions with 6+ years of experience delivering 250+ successful projects worldwide",
  "email": "support@cynosurictechlabs.net",
  "foundingDate": "2022",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Remote-First Company",
    "addressCountry": "Worldwide"
  },
  "sameAs": []
};

export const webPageSchema = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": name,
  "description": description,
  "url": url,
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Cynosuric Tech Labs",
    "url": SITE_URL
  }
});

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web & Software Development Services",
  "provider": {
    "@type": "Organization",
    "name": "Cynosuric Tech Labs"
  },
  "serviceType": ["Web Development", "Software Development", "Mobile App Development", "AI Integration", "Cloud Solutions"],
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Web Development",
          "description": "Professional web development with modern frameworks and technologies"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development",
          "description": "Tailored software solutions for enterprise and startups"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Native and cross-platform mobile applications"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Integration Services",
          "description": "Integrate AI and machine learning into your applications"
        }
      }
    ]
  }
};

export const faqPageSchema = (items: Array<{ q: string; a: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": items.map((item) => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a
    }
  }))
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
