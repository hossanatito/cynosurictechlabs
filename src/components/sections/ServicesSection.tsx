
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BrainCircuit, Code, Database, Laptop, PaintBucket, ShoppingCart, Smartphone } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive web applications built with the latest technologies and frameworks.",
    icon: "web-development",
    subheading: "React, Next.js, Vue"
  },
  {
    title: "Custom Software Development",
    description: "Tailored software solutions designed to address your specific business challenges.",
    icon: "custom-software-development",
    subheading: "Enterprise Solutions & Platforms"
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that balances aesthetics with intuitive user experiences.",
    icon: "ui-ux-design",
    subheading: "Wireframing, Prototypes, User Testing"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: "mobile-app-development",
    subheading: "React Native, Flutter, Swift"
  },
  {
    title: "E-Commerce Development",
    description: "Scalable and secure online stores with seamless payment processing and inventory management.",
    icon: "e-commerce-development",
    subheading: "Shopify, WooCommerce, Custom Stores"
  },
  {
    title: "Custom AI Automations",
    description: "Leverage AI to automate workflows and processes with no-code solutions that save time and reduce errors.",
    icon: "ai-automation",
    subheading: "n8n, Zapier, GPT Integration"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-20 lg:py-24">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive technical solutions to help businesses thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300 group">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  {service.icon === "web-development" ? (
                    <Code className="h-6 w-6 text-primary" />
                  ) : service.icon === "custom-software-development" ? (
                    <Laptop className="h-6 w-6 text-primary" />
                  ) : service.icon === "ui-ux-design" ? (
                    <PaintBucket className="h-6 w-6 text-primary" />
                  ) : service.icon === "mobile-app-development" ? (
                    <Smartphone className="h-6 w-6 text-primary" />
                  ) : service.icon === "e-commerce-development" ? (
                    <ShoppingCart className="h-6 w-6 text-primary" />
                  ) : (
                    <BrainCircuit className="h-6 w-6 text-primary" />
                  )}
                </div>
                <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                <p className="text-xs uppercase tracking-wider text-primary/80 mt-1">{service.subheading}</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
