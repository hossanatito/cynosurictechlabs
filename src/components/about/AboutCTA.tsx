
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container-custom max-w-5xl mx-auto text-center animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Work With Us?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Let's discuss how our expertise can help transform your digital presence and drive your business forward.
        </p>
        <Button size="lg" className="hover-scale">
          Get In Touch
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
