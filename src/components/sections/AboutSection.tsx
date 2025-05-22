
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're passionate about crafting innovative digital solutions that drive real business results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-xl font-semibold mb-4">
              Innovation. Speed. Craftsmanship.
            </h3>
            <p className="text-muted-foreground mb-4">
              Founded on the principles of technical excellence and unwavering client focus, Cynosuric Tech Labs has evolved into a global digital engineering partner helping businesses transform their digital presence.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team of senior engineers brings decades of combined experience across industries, technologies, and methodologies. We follow an iterative delivery approach that ensures transparency, adaptability, and continuous improvement throughout the development lifecycle.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Global Clients', value: '25+ Countries' },
                { label: 'Team Experience', value: '6+ Years Avg.' },
                { label: 'Delivery Model', value: 'Agile & Iterative' },
                { label: 'Support', value: '24/7 Available' }
              ].map((item, i) => (
                <div key={i} className="bg-card p-4 rounded-lg">
                  <p className="text-sm font-medium text-primary">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              ))}
            </div>
            
            <Button className="hover-scale">Learn More About Us</Button>
          </div>
          
          <div className="order-1 md:order-2 bg-card rounded-lg p-6 border border-border">
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
              <p className="text-primary font-medium">Company Video</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
