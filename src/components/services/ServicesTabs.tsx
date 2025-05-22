
import React from "react";
import { ArrowRight, Check, Code, CreditCard, Laptop, PaintBucket, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ServicesTabs() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom max-w-5xl mx-auto">
        <Tabs defaultValue="web" className="w-full animate-fade-in">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="web" className="text-sm">Web Development</TabsTrigger>
            <TabsTrigger value="software" className="text-sm">Custom Software</TabsTrigger>
            <TabsTrigger value="design" className="text-sm">UI/UX Design</TabsTrigger>
            <TabsTrigger value="mobile" className="text-sm">Mobile Apps</TabsTrigger>
            <TabsTrigger value="ecommerce" className="text-sm">E-Commerce</TabsTrigger>
            <TabsTrigger value="ai" className="text-sm">AI Automation</TabsTrigger>
          </TabsList>
          
          {/* Web Development */}
          <TabsContent value="web" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Web Development</h2>
                <div className="w-16 h-1 bg-primary mb-6"></div>
                <p className="text-muted-foreground mb-6">
                  We build modern, responsive web applications optimized for performance, user experience, 
                  and search engine visibility. Our development process focuses on creating scalable solutions
                  that grow with your business.
                </p>
                
                <div className="space-y-3 mb-6">
                  {["React & Next.js Development", "Progressive Web Apps (PWAs)", "WordPress Development", 
                    "Custom API Integration", "Performance Optimization", "Responsive Designs"].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="text-primary shrink-0 mr-2 h-5 w-5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="hover-scale">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-muted rounded-lg p-6 hover-scale">
                <div className="aspect-video bg-card rounded-md flex items-center justify-center border border-border">
                  <Code className="h-12 w-12 text-primary/70" />
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Custom Software */}
          <TabsContent value="software" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Custom Software Development</h2>
                <div className="w-16 h-1 bg-primary mb-6"></div>
                <p className="text-muted-foreground mb-6">
                  We design and develop bespoke software solutions tailored to your specific business requirements. 
                  From enterprise platforms to specialized tools, we create robust applications that solve your unique challenges.
                </p>
                
                <div className="space-y-3 mb-6">
                  {["Enterprise Applications", "SaaS Solutions", "CRM & ERP Systems", 
                    "Business Process Automation", "Legacy System Modernization", "Database Design & Development"].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="text-primary shrink-0 mr-2 h-5 w-5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="hover-scale">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-muted rounded-lg p-6 hover-scale">
                <div className="aspect-video bg-card rounded-md flex items-center justify-center border border-border">
                  <Laptop className="h-12 w-12 text-primary/70" />
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* UI/UX Design */}
          <TabsContent value="design" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">UI/UX Design</h2>
                <div className="w-16 h-1 bg-primary mb-6"></div>
                <p className="text-muted-foreground mb-6">
                  Our user-centered design approach creates intuitive, engaging interfaces that balance aesthetics with functionality.
                  We focus on understanding your users' needs to deliver exceptional digital experiences.
                </p>
                
                <div className="space-y-3 mb-6">
                  {["User Research & Testing", "Wireframing & Prototyping", "Interface Design", 
                    "Design Systems Creation", "Usability Audits", "Accessibility Compliance"].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="text-primary shrink-0 mr-2 h-5 w-5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="hover-scale">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-muted rounded-lg p-6 hover-scale">
                <div className="aspect-video bg-card rounded-md flex items-center justify-center border border-border">
                  <PaintBucket className="h-12 w-12 text-primary/70" />
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Mobile Apps */}
          <TabsContent value="mobile" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Mobile App Development</h2>
                <div className="w-16 h-1 bg-primary mb-6"></div>
                <p className="text-muted-foreground mb-6">
                  We develop high-performance native and cross-platform mobile applications for iOS and Android.
                  Our mobile solutions combine elegant design with robust functionality to engage your users.
                </p>
                
                <div className="space-y-3 mb-6">
                  {["iOS App Development", "Android App Development", "React Native", 
                    "Flutter Development", "App Store Optimization", "Mobile App Maintenance"].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="text-primary shrink-0 mr-2 h-5 w-5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="hover-scale">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-muted rounded-lg p-6 hover-scale">
                <div className="aspect-video bg-card rounded-md flex items-center justify-center border border-border">
                  <Smartphone className="h-12 w-12 text-primary/70" />
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* E-Commerce */}
          <TabsContent value="ecommerce" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">E-Commerce Development</h2>
                <div className="w-16 h-1 bg-primary mb-6"></div>
                <p className="text-muted-foreground mb-6">
                  We build scalable, secure online stores with seamless payment processing and inventory management.
                  Our e-commerce solutions focus on conversion optimization and exceptional shopping experiences.
                </p>
                
                <div className="space-y-3 mb-6">
                  {["Shopify Development", "WooCommerce Solutions", "Custom E-commerce Platforms", 
                    "Payment Gateway Integration", "Inventory Management", "E-commerce SEO"].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="text-primary shrink-0 mr-2 h-5 w-5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="hover-scale">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-muted rounded-lg p-6 hover-scale">
                <div className="aspect-video bg-card rounded-md flex items-center justify-center border border-border">
                  <CreditCard className="h-12 w-12 text-primary/70" />
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* AI Automation */}
          <TabsContent value="ai" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">AI & Automation Solutions</h2>
                <div className="w-16 h-1 bg-primary mb-6"></div>
                <p className="text-muted-foreground mb-6">
                  We leverage artificial intelligence and no-code automation tools to streamline your workflows,
                  reduce manual effort, and unlock new capabilities for your business.
                </p>
                
                <div className="space-y-3 mb-6">
                  {["n8n Workflow Automation", "OpenAI Integration", "Hugging Face Models Implementation", 
                    "Custom AI Solutions", "Process Automation", "Intelligent Data Analysis"].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="text-primary shrink-0 mr-2 h-5 w-5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="hover-scale">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-muted rounded-lg p-6 hover-scale">
                <div className="aspect-video bg-card rounded-md flex items-center justify-center border border-border">
                  <Zap className="h-12 w-12 text-primary/70" />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
