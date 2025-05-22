
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center pt-20 pb-8 md:pt-24 md:pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Future-Ready Web & Software Solutions. Built for Impact.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We craft elegant digital experiences with scalable, secure, and performance-driven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-scale">
              Get a Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="hover-scale">
              View Our Work
            </Button>
          </div>
          
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: '98%', label: 'Client Satisfaction' },
              { stat: '250+', label: 'Projects Delivered' },
              { stat: '12+', label: 'Years Experience' },
              { stat: '35+', label: 'Team Members' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-card rounded-lg hover:border hover:border-primary/30 transition-all duration-300">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">{item.stat}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
