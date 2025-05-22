
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    title: "Results-driven",
    description: "We focus on delivering tangible business outcomes, not just code."
  },
  {
    title: "Agile Methodology",
    description: "Flexible, iterative approach that adapts to changing requirements."
  },
  {
    title: "Senior Engineers Only",
    description: "Every team member has 5+ years of professional experience."
  },
  {
    title: "Security-first Approach",
    description: "Best practices in security integrated throughout the development lifecycle."
  },
  {
    title: "After-launch Support",
    description: "Comprehensive maintenance and support packages after project completion."
  }
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What makes Cynosuric Tech Labs different from other development agencies?
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="border border-border bg-card hover:border-primary/50 transition-all duration-300 text-center"
            >
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">{index + 1}</span>
                </div>
                <h3 className="text-lg font-medium mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
