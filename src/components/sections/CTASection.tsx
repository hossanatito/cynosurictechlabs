
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-20 w-60 h-60 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-60 h-60 rounded-full bg-secondary/30 blur-3xl"></div>
      </div>
      
      <div className="container-custom text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss your project and see how our expertise can transform your digital presence.
        </p>
        <Button size="lg" className="hover-scale group">
          Schedule a Free Discovery Call
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
