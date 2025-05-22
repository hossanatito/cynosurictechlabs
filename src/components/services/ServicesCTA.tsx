
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container-custom max-w-5xl mx-auto text-center animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Contact us today for a free consultation and let's discuss how we can help bring your vision to life.
        </p>
        <Button size="lg" className="hover-scale">
          Get In Touch
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
