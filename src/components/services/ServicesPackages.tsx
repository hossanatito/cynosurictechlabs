
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";

export default function ServicesPackages() {
  const packages = [
    {
      title: "Starter Package",
      description: "Perfect for small businesses looking to establish their digital presence.",
      features: [
        "Custom Website Design",
        "Responsive Development",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Month of Support"
      ],
      popular: false
    },
    {
      title: "Business Growth",
      description: "Comprehensive solution for established businesses looking to expand.",
      features: [
        "Advanced Website/App Design",
        "CMS Implementation",
        "E-commerce Functionality",
        "SEO & Analytics Setup",
        "Payment Gateway Integration",
        "3 Months of Support"
      ],
      popular: true
    },
    {
      title: "Enterprise Solution",
      description: "Tailored for organizations with complex requirements and large-scale projects.",
      features: [
        "Custom Software Development",
        "Enterprise Integration",
        "Advanced Security Features",
        "Performance Optimization",
        "Dedicated Project Manager",
        "Ongoing Maintenance Plans"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Service Packages</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the right level of support and expertise for your project needs.
            Contact us for custom pricing based on your specific requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`border ${pkg.popular ? 'border-primary' : 'border-border'} animate-fade-in`}
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                  Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{pkg.title}</CardTitle>
                <p className="text-muted-foreground text-sm mt-2">{pkg.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CircleCheck className="text-primary shrink-0 mr-2 h-5 w-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full hover-scale" asChild>
                  <a href="/contact">Get a Quote</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
