
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center pt-20 pb-8 md:pt-24 md:pb-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-white/10 blur-xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-muted text-white text-sm font-medium border border-white/10">
            Innovation • Precision • Excellence
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-white">
              Engineered for the
            </span>
            <br />
            <span className="text-white underline decoration-1 underline-offset-8">
              Digital Future
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We craft elegant digital experiences with scalable, secure, and performance-driven solutions that transform businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-scale group border border-white/20">
              Get a Free Consultation
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="hover-scale">
              View Our Work
            </Button>
          </div>
          
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: '98%', label: 'Client Satisfaction' },
              { stat: '250+', label: 'Projects Delivered' },
              { stat: '6+', label: 'Years Experience' },
              { stat: '35+', label: 'Team Members' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-card rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300">
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">{item.stat}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
