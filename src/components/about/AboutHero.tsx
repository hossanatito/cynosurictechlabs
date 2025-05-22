
import React from "react";

export default function AboutHero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-muted/30">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">About Cynosuric Tech Labs</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground mb-8">
            We're a team of passionate engineers, designers, and problem solvers dedicated to 
            transforming digital experiences and driving business growth.
          </p>
        </div>
      </div>
    </section>
  );
}
