import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutCTA from "@/components/about/AboutCTA";
import AboutMission from "@/components/about/AboutMission";
import SEOHead from "@/components/SEO/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import { organizationSchema, webPageSchema, breadcrumbSchema } from "@/data/structuredData";

export default function About() {
  const structuredData = [
    organizationSchema,
    webPageSchema(
      "About Us - Innovation & Excellence Since 2018",
      "Meet the team behind 250+ successful projects. Learn about our mission, values, and commitment to delivering future-ready digital solutions.",
      typeof window !== 'undefined' ? window.location.href : ""
    ),
    breadcrumbSchema([
      { name: "About", url: typeof window !== 'undefined' ? `${window.location.origin}/about` : "/about" }
    ])
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Us - Innovation & Excellence Since 2018"
        description="Meet the team behind 250+ successful projects. Learn about our mission, values, and commitment to delivering future-ready digital solutions."
        keywords="about cynosuric tech labs, web development team, software development company, tech consulting experts, digital transformation specialists"
        structuredData={structuredData}
      />
      <Navbar />
      <div className="container-custom">
        <Breadcrumb items={[{ name: "About", url: "/about" }]} />
      </div>
      <main>
        <AboutHero />
        <AboutStory />
        <AboutMission />
        <AboutValues />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
