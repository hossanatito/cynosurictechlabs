
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with advanced filtering, cart functionality, and secure payments.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    results: "250% increase in online sales",
    image: "portfolio1",
  },
  {
    title: "Healthcare Management System",
    description: "A comprehensive system for patient management, scheduling, and record keeping for a multi-location clinic.",
    tech: ["Angular", "Java Spring", "PostgreSQL", "Docker"],
    results: "65% reduction in administrative work",
    image: "portfolio2",
  },
  {
    title: "FinTech Mobile App",
    description: "A secure, user-friendly mobile app for personal finance management and investment tracking.",
    tech: ["React Native", "AWS", "Firebase", "Swift"],
    results: "100,000+ downloads in first month",
    image: "portfolio3",
  },
  {
    title: "Property Rental Platform",
    description: "A marketplace connecting property owners with potential renters, featuring virtual tours and integrated messaging.",
    tech: ["Vue.js", "Python Django", "MySQL", "AWS"],
    results: "35% decrease in vacancy periods",
    image: "portfolio4",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of our recent projects and the results we've achieved for our clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
              <div className="h-52 bg-muted flex items-center justify-center">
                <p className="text-primary">Project Image</p>
              </div>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="mt-1">
                  {item.tech.join(" • ")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
                <div className="mt-4 py-2 px-4 bg-muted/50 rounded-md">
                  <p className="text-sm font-medium">Results: <span className="text-primary">{item.results}</span></p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">View Case Study</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button>View All Projects</Button>
        </div>
      </div>
    </section>
  );
}
