
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
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
