import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutTeam from "@/components/about/AboutTeam";
import AboutCTA from "@/components/about/AboutCTA";
import AboutMission from "@/components/about/AboutMission";
import SEOHead from "@/components/SEO/SEOHead";
import { organizationSchema, webPageSchema, breadcrumbSchema } from "@/data/structuredData";

export default function About() {
  const structuredData = [
    organizationSchema,
    webPageSchema(
      "About Us - Innovation & Excellence Since 2018",
      "Meet the team behind 250+ successful projects. Learn about our mission, values, and commitment to delivering future-ready digital solutions.",
      typeof window !== "undefined" ? window.location.href : ""
    ),
    breadcrumbSchema([
      { name: "About", url: typeof window !== "undefined" ? `${window.location.origin}/about` : "/about" },
    ]),
  ];

  return (
    <div className="min-h-dvh bg-background">
      <SEOHead
        title="About Us - Innovation & Excellence Since 2018"
        description="Meet the team behind 250+ successful projects. Learn about our mission, values, and commitment to delivering future-ready digital solutions."
        keywords="about cynosuric tech labs, web development team, software development company, tech consulting experts, digital transformation specialists"
        structuredData={structuredData}
      />
      <Navbar />
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
