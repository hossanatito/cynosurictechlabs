
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ContactHero />
        <div className="container-custom py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
}
