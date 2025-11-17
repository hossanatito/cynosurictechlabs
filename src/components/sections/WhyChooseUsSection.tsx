
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
    <section id="why-choose-us" className="py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What makes Cynosuric Tech Labs different from other development agencies?
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300 text-center group"
            >
              <CardContent className="pt-6 px-4">
                <div className="mx-auto mb-4 h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-xl md:text-2xl font-semibold">{index + 1}</span>
                </div>
                <h3 className="text-base md:text-lg font-medium mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
