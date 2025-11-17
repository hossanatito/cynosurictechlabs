
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container-custom text-center relative z-10 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Build Something Amazing?</h2>
        <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
          Let's discuss your project and see how our expertise can transform your digital presence.
        </p>
        <Button size="lg" className="hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group border border-primary/20 min-h-[48px] md:min-h-[56px] text-base">
          Schedule a Free Discovery Call
          <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
