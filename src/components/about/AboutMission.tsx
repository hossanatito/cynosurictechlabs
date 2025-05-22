
import React from "react";
import { Rocket, Target, Globe, Lightbulb } from "lucide-react";

export default function AboutMission() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences that drive business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/30 hover:bg-card/80 group animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="mb-6 p-4 rounded-full bg-primary/10 inline-flex group-hover:bg-primary/15 transition-colors">
              <Target className="h-8 w-8 text-primary/90" />
            </div>
            <h3 className="text-xl font-bold mb-3">Strategic Vision</h3>
            <p className="text-muted-foreground">
              We work with businesses to identify opportunities for digital transformation and create roadmaps that align with their strategic goals.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:border-secondary/30 hover:bg-card/80 group animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="mb-6 p-4 rounded-full bg-secondary/10 inline-flex group-hover:bg-secondary/15 transition-colors">
              <Rocket className="h-8 w-8 text-secondary/90" />
            </div>
            <h3 className="text-xl font-bold mb-3">Technical Excellence</h3>
            <p className="text-muted-foreground">
              Our development process is built on industry best practices, ensuring scalable, maintainable, and high-performance solutions.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:border-accent/30 hover:bg-card/80 group animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="mb-6 p-4 rounded-full bg-accent/10 inline-flex group-hover:bg-accent/15 transition-colors">
              <Globe className="h-8 w-8 text-accent/90" />
            </div>
            <h3 className="text-xl font-bold mb-3">Global Impact</h3>
            <p className="text-muted-foreground">
              We're proud to work with clients across 25+ countries, helping businesses of all sizes make their mark in the digital landscape.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/30 hover:bg-card/80 group animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="mb-6 p-4 rounded-full bg-primary/10 inline-flex group-hover:bg-primary/15 transition-colors">
              <Lightbulb className="h-8 w-8 text-primary/90" />
            </div>
            <h3 className="text-xl font-bold mb-3">Innovative Solutions</h3>
            <p className="text-muted-foreground">
              We continuously explore emerging technologies to provide cutting-edge solutions that give our clients a competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
