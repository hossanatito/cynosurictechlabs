
import React from "react";
import { Code, HelpCircle, Lightbulb, PaintBucket, Rocket, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function ServicesProcess() {
  const processSteps = [
    {
      title: "Discovery & Planning",
      description: "We begin by understanding your business goals, target audience, and project requirements through in-depth consultation.",
      icon: Lightbulb,
      timeframe: "1-2 weeks",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: "Design & Prototype",
      description: "Our design team creates wireframes and interactive prototypes to visualize the solution before development begins.",
      icon: PaintBucket,
      timeframe: "2-3 weeks",
      gradient: "from-primary/25 to-primary/8"
    },
    {
      title: "Development",
      description: "Our engineers build your solution using modern technologies and best practices for performance and security.",
      icon: Code,
      timeframe: "4-8 weeks",
      gradient: "from-primary/30 to-primary/10"
    },
    {
      title: "Testing & QA",
      description: "Rigorous quality assurance ensures your product is bug-free and functions flawlessly across all devices.",
      icon: ShieldCheck,
      timeframe: "1-2 weeks",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: "Deployment",
      description: "We handle the launch process, ensuring a smooth transition to production environments.",
      icon: Rocket,
      timeframe: "1 week",
      gradient: "from-primary/25 to-primary/8"
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing support and regular updates keep your digital product secure and performing at its best.",
      icon: HelpCircle,
      timeframe: "Ongoing",
      gradient: "from-primary/15 to-primary/5"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary/20">
            Our Methodology
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Development Process
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A transparent, collaborative approach to bringing your vision to life.
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient connecting line - Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50"></div>
          </div>
          
          {/* Process steps - Zigzag Layout */}
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={cn(
                    "relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 animate-fade-in",
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  )}
                  style={{ animationDelay: `${0.15 * (index + 1)}s` }}
                >
                  {/* Content Card */}
                  <div className={cn(
                    "flex-1 w-full",
                    isEven ? "lg:text-right" : "lg:text-left"
                  )}>
                    <div className={cn(
                      "bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8",
                      "hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10",
                      "transition-all duration-500 hover:-translate-y-1 group"
                    )}>
                      {/* Gradient overlay */}
                      <div className={cn(
                        "absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                        step.gradient
                      )} />

                      <div className={cn(
                        "relative z-10 flex flex-col",
                        isEven ? "lg:items-end" : "lg:items-start",
                        "items-start"
                      )}>
                        <Badge variant="outline" className="mb-3 border-primary/20">
                          {step.timeframe}
                        </Badge>
                        
                        <h3 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-3">
                          <Icon className="h-6 w-6 text-primary" />
                          {step.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Number Badge */}
                  <div className="relative shrink-0 z-20 hidden lg:block">
                    <div className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center",
                      "bg-gradient-to-br border-2 border-primary shadow-lg",
                      step.gradient
                    )}>
                      <span className="text-2xl font-bold text-primary">{index + 1}</span>
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" 
                         style={{ animationDuration: '3s', animationDelay: `${index * 0.5}s` }} />
                  </div>

                  {/* Mobile Number Badge */}
                  <div className="lg:hidden absolute top-0 left-0">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      "bg-gradient-to-br border-2 border-primary",
                      step.gradient
                    )}>
                      <span className="text-lg font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
