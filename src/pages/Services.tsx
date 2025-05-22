
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesTabs from "@/components/services/ServicesTabs"; 
import ServicesPackages from "@/components/services/ServicesPackages";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
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
