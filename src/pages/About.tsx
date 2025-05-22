
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutTeam from "@/components/about/AboutTeam";
import AboutValues from "@/components/about/AboutValues";
import AboutCTA from "@/components/about/AboutCTA";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutTimeline />
        <AboutTeam />
        <AboutValues />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
