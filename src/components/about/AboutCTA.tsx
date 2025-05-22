
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-card/80 to-card relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>
      
      <div className="container-custom max-w-5xl mx-auto text-center animate-fade-in relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Work With Us?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Let's discuss how our expertise can help transform your digital presence and drive your business forward.
        </p>
        <Button size="lg" className="hover-scale group bg-gradient-to-r from-primary/90 to-primary">
          Get In Touch
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
