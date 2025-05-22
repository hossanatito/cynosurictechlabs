
import React from "react";
import { Code, HelpCircle, Lightbulb, PaintBucket, Rocket, ShieldCheck } from "lucide-react";

export default function ServicesProcess() {
  const processSteps = [
    {
      title: "Discovery & Planning",
      description: "We begin by understanding your business goals, target audience, and project requirements through in-depth consultation.",
      icon: <Lightbulb className="h-8 w-8" />
    },
    {
      title: "Design & Prototype",
      description: "Our design team creates wireframes and interactive prototypes to visualize the solution before development begins.",
      icon: <PaintBucket className="h-8 w-8" />
    },
    {
      title: "Development",
      description: "Our engineers build your solution using modern technologies and best practices for performance and security.",
      icon: <Code className="h-8 w-8" />
    },
    {
      title: "Testing & QA",
      description: "Rigorous quality assurance ensures your product is bug-free and functions flawlessly across all devices.",
      icon: <ShieldCheck className="h-8 w-8" />
    },
    {
      title: "Deployment",
      description: "We handle the launch process, ensuring a smooth transition to production environments.",
      icon: <Rocket className="h-8 w-8" />
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing support and regular updates keep your digital product secure and performing at its best.",
      icon: <HelpCircle className="h-8 w-8" />
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Development Process</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A transparent, collaborative approach to bringing your vision to life.
          </p>
        </div>
        
        <div className="relative">
          {/* Process line */}
          <div className="absolute top-0 left-16 md:left-1/2 h-full w-0.5 bg-border transform -translate-x-1/2 md:block hidden"></div>
          
          {/* Process steps */}
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="flex mb-12 items-start animate-fade-in"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-card border border-primary flex items-center justify-center z-10 mt-2 shrink-0">
                <span className="text-lg md:text-xl font-bold">{index + 1}</span>
              </div>
              
              <div className="ml-6 md:ml-10 bg-card p-6 rounded-lg border border-border flex-1 hover-scale">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
