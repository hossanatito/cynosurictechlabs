
import React from "react";

const coreValues = [
  {
    title: "Technical Excellence",
    description: "We maintain the highest standards in our code, design, and delivery.",
    colorClass: "border-l-primary"
  },
  {
    title: "User-Centered",
    description: "Every decision we make prioritizes the end user's experience and needs.",
    colorClass: "border-l-secondary"
  },
  {
    title: "Continuous Innovation",
    description: "We constantly explore new technologies and methodologies to stay ahead.",
    colorClass: "border-l-accent"
  },
  {
    title: "Transparency",
    description: "Open communication and visibility into our processes and progress.",
    colorClass: "border-l-primary"
  },
  {
    title: "Collaborative Spirit",
    description: "We believe the best solutions emerge from diverse perspectives working together.",
    colorClass: "border-l-secondary"
  },
  {
    title: "Result-Oriented",
    description: "Focused on delivering tangible business outcomes, not just features.",
    colorClass: "border-l-accent"
  }
];

export default function AboutValues() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-card/50">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Core Values</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide our work and relationships.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div 
              key={index}
              className={`bg-card p-6 rounded-lg border border-border border-l-[4px] ${value.colorClass} hover-lift hover:shadow-lg transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
