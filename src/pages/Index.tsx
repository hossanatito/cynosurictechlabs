import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesSection from "@/components/sections/ServicesSection";
import ApproachSection from "@/components/sections/ApproachSection";
import TechStackSection from "@/components/sections/TechStackSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import SEOHead from "@/components/SEO/SEOHead";
import { organizationSchema, webPageSchema, faqSchema } from "@/data/structuredData";

const Index = () => {
  const structuredData = [
    organizationSchema,
    webPageSchema(
      "Cynosuric Tech Labs | Future-Ready Web & Software Solutions",
      "Expert web development, custom software, and AI integration services. Transform your business with scalable, secure solutions.",
      typeof window !== 'undefined' ? window.location.href : ""
    ),
    faqSchema,
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cynosuric Tech Labs | Future-Ready Web & Software Solutions"
        description="We partner with founders and teams to ship web, product, and AI systems people actually use. 6+ years, 250+ projects delivered."
        keywords="web development company, custom software development, AI integration services, React development agency"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <ApproachSection />
        <TechStackSection />
        <PortfolioSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
