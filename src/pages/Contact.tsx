import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import SEOHead from "@/components/SEO/SEOHead";
import { organizationSchema, webPageSchema, breadcrumbSchema } from "@/data/structuredData";

export default function Contact() {
  const structuredData = [
    organizationSchema,
    webPageSchema(
      "Contact Us - Get a Free Consultation",
      "Ready to transform your digital presence? Contact Cynosuric Tech Labs for a free consultation. Email: support@cynosurictechlabs.net",
      "https://cynosurictechlabs.com/contact"
    ),
    breadcrumbSchema([
      { name: "Contact", url: "https://cynosurictechlabs.com/contact" },
    ]),
  ];

  return (
    <div className="min-h-dvh bg-background">
      <SEOHead
        title="Contact Us - Get a Free Consultation"
        description="Ready to transform your digital presence? Contact Cynosuric Tech Labs for a free consultation. Email: support@cynosurictechlabs.net"
        keywords="contact web development company, software development consultation, tech consulting contact, get a quote, free consultation"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <ContactHero />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}
