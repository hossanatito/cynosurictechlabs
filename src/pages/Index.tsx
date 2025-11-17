import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TechStackSection from "@/components/sections/TechStackSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import SEOHead from "@/components/SEO/SEOHead";
import { organizationSchema, webPageSchema } from "@/data/structuredData";

const Index = () => {
  const structuredData = [
    organizationSchema,
    webPageSchema(
      "Cynosuric Tech Labs | Future-Ready Web & Software Solutions",
      "Expert web development, custom software, and AI integration services. Transform your business with scalable, secure solutions. 6+ years experience, 250+ projects delivered.",
      typeof window !== 'undefined' ? window.location.href : ""
    )
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cynosuric Tech Labs | Future-Ready Web & Software Solutions"
        description="Expert web development, custom software, and AI integration services. Transform your business with scalable, secure solutions. 6+ years experience, 250+ projects delivered."
        keywords="web development company, custom software development, AI integration services, React development agency, enterprise software solutions, tech consulting services"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <PortfolioSection />
        <TechStackSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
