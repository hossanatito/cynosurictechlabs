
import React from "react";

export default function ServicesHero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-muted/30">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground mb-8">
            Comprehensive technology solutions designed to transform your digital presence
            and drive business growth.
          </p>
        </div>
      </div>
    </section>
  );
}
