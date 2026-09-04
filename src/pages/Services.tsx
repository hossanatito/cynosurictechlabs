import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesTabs from "@/components/services/ServicesTabs";
import ServicesPackages from "@/components/services/ServicesPackages";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCTA from "@/components/services/ServicesCTA";
import { organizationSchema, webPageSchema, serviceSchema, faqPageSchema, breadcrumbSchema } from "@/data/structuredData";
import { faqs as servicesFaqs } from "@/components/services/ServicesFAQ";

export default function Services() {
  const structuredData = [
    organizationSchema,
    webPageSchema(
      "Web & Software Development Services",
      "Comprehensive tech services: custom web development, AI integration, cloud solutions. Starter to Enterprise packages. Get a free consultation.",
      "https://cynosurictechlabs.com/services"
    ),
    serviceSchema,
    faqPageSchema(servicesFaqs),
    breadcrumbSchema([
      { name: "Services", url: "https://cynosurictechlabs.com/services" },
    ]),
  ];

  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
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
