
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Rocket, Crown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function ServicesPackages() {
  const packages = [
    {
      title: "Starter Package",
      icon: Zap,
      gradient: "from-primary/20 to-primary/5",
      starting: "$2,999",
      description: "Perfect for small businesses looking to establish their digital presence.",
      features: [
        "Custom Website Design",
        "Responsive Development",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Month of Support"
      ],
      popular: false
    },
    {
      title: "Professional Package",
      icon: Rocket,
      gradient: "from-primary/30 to-primary/10",
      starting: "$7,999",
      description: "Comprehensive solution for established businesses looking to expand.",
      features: [
        "Advanced Website/App Design",
        "CMS Implementation",
        "E-commerce Functionality",
        "SEO & Analytics Setup",
        "Payment Gateway Integration",
        "3 Months of Support"
      ],
      popular: true
    },
    {
      title: "Enterprise Package",
      icon: Crown,
      gradient: "from-primary/25 to-primary/8",
      starting: "Custom",
      description: "Tailored for organizations with complex requirements and large-scale projects.",
      features: [
        "Custom Software Development",
        "Enterprise Integration",
        "Advanced Security Features",
        "Performance Optimization",
        "Dedicated Project Manager",
        "Ongoing Maintenance Plans"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container-custom max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary/20">
            Flexible Solutions
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Service Packages
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible packages designed to meet your needs and budget.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <Card 
                key={index} 
                className={cn(
                  "animate-fade-in group relative overflow-hidden",
                  "bg-card/50 backdrop-blur-sm border-border/50",
                  "hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10",
                  "transition-all duration-500 hover:-translate-y-2",
                  pkg.popular && "border-primary/50 shadow-xl shadow-primary/10"
                )}
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  pkg.gradient
                )} />

                {pkg.popular && (
                  <div className="absolute top-0 right-0 z-10">
                    <Badge className="rounded-tl-none rounded-br-none bg-primary text-primary-foreground border-0">
                      ⭐ Recommended
                    </Badge>
                  </div>
                )}

                <CardHeader className="relative z-10">
                  <div className={cn(
                    "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4",
                    pkg.gradient,
                    "border border-primary/20 group-hover:scale-110 transition-transform duration-500"
                  )}>
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{pkg.title}</CardTitle>
                  <div className="text-muted-foreground text-sm mb-4">
                    Starting from <span className="text-xl font-bold text-primary">{pkg.starting}</span>
                  </div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-start group/item hover:translate-x-1 transition-transform duration-200"
                      >
                        <div className="p-1 rounded-full bg-primary/10 mr-3 mt-0.5 shrink-0">
                          <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="relative z-10">
                  <Button 
                    className={cn(
                      "w-full group/btn",
                      pkg.popular ? "hover-scale" : ""
                    )} 
                    variant={pkg.popular ? "default" : "outline"} 
                    asChild
                  >
                    <Link to="/contact">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
