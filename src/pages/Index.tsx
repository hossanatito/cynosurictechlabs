import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesSection from "@/components/sections/ServicesSection";
import ApproachSection from "@/components/sections/ApproachSection";
import TechStackSection from "@/components/sections/TechStackSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
// import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { organizationSchema, webPageSchema, faqPageSchema } from "@/data/structuredData";
import { faqs } from "@/components/sections/FAQSection";

const Index = () => {
  const structuredData = [
    organizationSchema,
    webPageSchema(
      "Cynosuric Tech Labs | Future-Ready Web & Software Solutions",
      "Expert web development, custom software, and AI integration services. Transform your business with scalable, secure solutions.",
      "https://cynosurictechlabs.com"
    ),
    faqPageSchema(faqs),
  ];

  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <ApproachSection />
        <TechStackSection />
        <PortfolioSection />
        {/* <TestimonialsSection /> */}
        <WhyChooseUsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
