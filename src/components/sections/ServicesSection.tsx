
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    description: "Streamlining development operations with continuous integration/deployment and cloud infrastructure.",
    icon: "devops-cloud-engineering",
    subheading: "AI Models, ML Pipelines, GPT Integration"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive technical solutions to help businesses thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-border bg-card hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">{service.icon === "web-development" ? "🌐" : 
                                                           service.icon === "custom-software-development" ? "💻" : 
                                                           service.icon === "ui-ux-design" ? "🎨" : 
                                                           service.icon === "mobile-app-development" ? "📱" : 
                                                           service.icon === "e-commerce-development" ? "🛒" : "☁️"}</span>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <p className="text-xs uppercase tracking-wider text-primary/80 mt-1">{service.subheading}</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
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
