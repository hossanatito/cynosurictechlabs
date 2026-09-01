import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
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
      <Navbar />
      <main>
        <ContactHero />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}
