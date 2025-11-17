export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cynosuric Tech Labs",
  "url": typeof window !== 'undefined' ? window.location.origin : "https://cynosurictechlabs.com",
  "logo": typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : "",
  "description": "Future-ready web and software solutions with 6+ years of experience delivering 250+ successful projects worldwide",
  "email": "support@cynosurictechlabs.net",
  "foundingDate": "2018",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Remote-First Company",
    "addressCountry": "Worldwide"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "250",
    "bestRating": "5"
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
    "url": typeof window !== 'undefined' ? window.location.origin : "https://cynosurictechlabs.com"
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

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to build a custom website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project timelines vary based on complexity. A basic website takes 2-4 weeks, while complex web applications can take 8-16 weeks. We provide detailed timelines during our initial consultation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide ongoing support after launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our packages include post-launch support. We offer maintenance plans, updates, and technical support to ensure your application runs smoothly."
      }
    },
    {
      "@type": "Question",
      "name": "What technologies do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use modern technologies including React, TypeScript, Node.js, Python, and cloud platforms like AWS and Azure. We select the best tech stack based on your project requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work with our existing systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We specialize in integrating new solutions with existing systems and can work with various APIs, databases, and legacy systems."
      }
    },
    {
      "@type": "Question",
      "name": "What is your project process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our process includes Discovery & Planning, Design & Prototyping, Development & Testing, and Launch & Support. We maintain transparent communication throughout each phase."
      }
    }
  ]
};

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
