import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Calendar, FolderGit2, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesCTA() {
  const contactMethods = [
    { icon: Mail, label: "Email Us", value: "contact@cynosuric.com", href: "mailto:contact@cynosuric.com" },
    { icon: Calendar, label: "Schedule Call", value: "Book a Meeting", href: "/contact" }
  ];

  const trustIndicators = [
    { icon: Shield, text: "Secure & Confidential" },
    { icon: Zap, text: "Quick Response Time" }
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        {/* Dot Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          opacity: 0.3
        }} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="container-custom max-w-5xl mx-auto relative z-10">
        <div className="text-center animate-fade-in">
          <Badge variant="outline" className="mb-6 border-primary/20 bg-card/50 backdrop-blur-sm">
            Let's Build Together
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Contact us today for a free consultation and let's discuss how we can help bring your vision to life.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="hover-scale group" asChild>
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="hover-scale border-primary/20" asChild>
              <Link to="/#portfolio">
                View Our Work
                <FolderGit2 className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Contact Methods */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/30 hover:bg-card/70 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-sm text-muted-foreground mb-1">{method.label}</div>
                  <div className="font-semibold group-hover:text-primary transition-colors">{method.value}</div>
                </a>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{indicator.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
