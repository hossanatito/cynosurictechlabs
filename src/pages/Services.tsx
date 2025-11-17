import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesTabs from "@/components/services/ServicesTabs"; 
import ServicesPackages from "@/components/services/ServicesPackages";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCTA from "@/components/services/ServicesCTA";
import SEOHead from "@/components/SEO/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import { organizationSchema, webPageSchema, serviceSchema, faqSchema, breadcrumbSchema } from "@/data/structuredData";

export default function Services() {
  const structuredData = [
    organizationSchema,
    webPageSchema(
      "Web & Software Development Services",
      "Comprehensive tech services: custom web development, mobile apps, AI integration, cloud solutions. Starter to Enterprise packages. Get a free consultation.",
      typeof window !== 'undefined' ? window.location.href : ""
    ),
    serviceSchema,
    faqSchema,
    breadcrumbSchema([
      { name: "Services", url: typeof window !== 'undefined' ? `${window.location.origin}/services` : "/services" }
    ])
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Web & Software Development Services"
        description="Comprehensive tech services: custom web development, mobile apps, AI integration, cloud solutions. Starter to Enterprise packages. Get a free consultation."
        keywords="web development services, custom software packages, AI integration services, enterprise solutions, mobile app development, cloud solutions, tech consulting"
        structuredData={structuredData}
      />
      <Navbar />
      <div className="container-custom">
        <Breadcrumb items={[{ name: "Services", url: "/services" }]} />
      </div>
      <main>
        <ServicesHero />
        <ServicesTabs />
        <ServicesPackages />
        <ServicesProcess />
        <ServicesFAQ />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}
