import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesHero() {
  const stats = [
    { icon: CheckCircle2, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "98%", label: "Client Satisfaction" },
    { icon: TrendingUp, value: "5+", label: "Years Experience" }
  ];

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-muted/30">
        {/* Dot Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          opacity: 0.3
        }} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="container-custom max-w-5xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 border-primary/20 bg-card/50 backdrop-blur-sm">
            <span className="text-primary">★</span> Professional Services
          </Badge>

          {/* Gradient Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Our Services
          </h1>
          
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Comprehensive technology solutions designed to transform your digital presence
            and drive business growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" asChild className="hover-scale group">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-scale border-primary/20">
              <Link to="/#portfolio">
                View Our Work
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 animate-slide-up" 
               style={{ animationDelay: '0.3s' }}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 md:p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
