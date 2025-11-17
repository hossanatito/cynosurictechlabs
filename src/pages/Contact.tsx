import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import SEOHead from "@/components/SEO/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import { organizationSchema, webPageSchema, breadcrumbSchema } from "@/data/structuredData";

export default function Contact() {
  const structuredData = [
    organizationSchema,
    webPageSchema(
      "Contact Us - Get a Free Consultation",
      "Ready to transform your digital presence? Contact Cynosuric Tech Labs for a free consultation. Email: support@cynosurictechlabs.net",
      typeof window !== 'undefined' ? window.location.href : ""
    ),
    breadcrumbSchema([
      { name: "Contact", url: typeof window !== 'undefined' ? `${window.location.origin}/contact` : "/contact" }
    ])
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Us - Get a Free Consultation"
        description="Ready to transform your digital presence? Contact Cynosuric Tech Labs for a free consultation. Email: support@cynosurictechlabs.net"
        keywords="contact web development company, software development consultation, tech consulting contact, get a quote, free consultation"
        structuredData={structuredData}
      />
      <Navbar />
      <div className="container-custom">
        <Breadcrumb items={[{ name: "Contact", url: "/contact" }]} />
      </div>
      <main>
        <ContactHero />
        <div className="container-custom py-12 md:py-20">
          <div className="max-w-2xl mx-auto">
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
