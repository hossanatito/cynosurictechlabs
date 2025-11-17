
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center pt-20 pb-8 md:pt-24 md:pb-16 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0">
        {/* Gradient overlays from corners */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/10 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-20 h-20 border border-white/10 rotate-45" style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm text-white text-sm font-medium border border-white/20 shadow-lg shadow-primary/10 animate-fade-in">
            Innovation • Precision • Excellence
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">
              Engineered for the
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We craft elegant digital experiences with scalable, secure, and performance-driven solutions that transform businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="hover-scale group border border-white/20"
              asChild
            >
              <Link to="/contact">
                Get a Free Consultation
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="hover-scale"
              asChild
            >
              <a href="#portfolio">
                View Our Work
              </a>
            </Button>
          </div>
          
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: '98%', label: 'Client Satisfaction' },
              { stat: '250+', label: 'Projects Delivered' },
              { stat: '6+', label: 'Years Experience' },
              { stat: '35+', label: 'Team Members' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="p-4 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in group"
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <p className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">{item.stat}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
