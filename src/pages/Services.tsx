
import { ArrowRight, Check, CircleCheck, Clock, Code, CreditCard, FileText, HelpCircle, Laptop, Lightbulb, PaintBucket, Rocket, Server, ShieldCheck, Smartphone, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-muted/30">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h1>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive technology solutions designed to transform your digital presence
                and drive business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
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

        {/* Service Packages */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Service Packages</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the right level of support and expertise for your project needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Starter Package",
                  price: "$4,999",
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
                  price: "$12,999",
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
                  price: "Custom",
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
              ].map((pkg, index) => (
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
                    <div className="mt-2 mb-2">
                      <span className="text-3xl font-bold">{pkg.price}</span>
                      {pkg.price !== "Custom" && <span className="text-muted-foreground ml-2">starting from</span>}
                    </div>
                    <p className="text-muted-foreground text-sm">{pkg.description}</p>
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
                    <Button className="w-full hover-scale">Get Started</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Development Process</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A transparent, collaborative approach to bringing your vision to life.
              </p>
            </div>
            
            <div className="relative">
              {/* Process line */}
              <div className="absolute top-0 left-16 md:left-1/2 h-full w-0.5 bg-border transform -translate-x-1/2 md:block hidden"></div>
              
              {/* Process steps */}
              {[
                {
                  title: "Discovery & Planning",
                  description: "We begin by understanding your business goals, target audience, and project requirements through in-depth consultation.",
                  icon: <Lightbulb className="h-8 w-8" />
                },
                {
                  title: "Design & Prototype",
                  description: "Our design team creates wireframes and interactive prototypes to visualize the solution before development begins.",
                  icon: <PaintBucket className="h-8 w-8" />
                },
                {
                  title: "Development",
                  description: "Our engineers build your solution using modern technologies and best practices for performance and security.",
                  icon: <Code className="h-8 w-8" />
                },
                {
                  title: "Testing & QA",
                  description: "Rigorous quality assurance ensures your product is bug-free and functions flawlessly across all devices.",
                  icon: <ShieldCheck className="h-8 w-8" />
                },
                {
                  title: "Deployment",
                  description: "We handle the launch process, ensuring a smooth transition to production environments.",
                  icon: <Rocket className="h-8 w-8" />
                },
                {
                  title: "Support & Maintenance",
                  description: "Ongoing support and regular updates keep your digital product secure and performing at its best.",
                  icon: <HelpCircle className="h-8 w-8" />
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="flex mb-12 items-start animate-fade-in"
                  style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                >
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-card border border-primary flex items-center justify-center z-10 mt-2 shrink-0">
                    <span className="text-lg md:text-xl font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="ml-6 md:ml-10 bg-card p-6 rounded-lg border border-border flex-1 hover-scale">
                    <div className="flex items-center mb-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Common questions about our services and processes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on complexity. A simple website might take 4-6 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during the discovery phase."
                },
                {
                  question: "What is your pricing structure?",
                  answer: "We offer both fixed-price and time-and-materials pricing models depending on the project requirements. We provide transparent quotes after a thorough consultation."
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally after launch."
                },
                {
                  question: "How do you handle project communication?",
                  answer: "We use project management tools like Jira or Asana and conduct regular video meetings. You'll have a dedicated project manager as your main point of contact."
                },
                {
                  question: "Can you work with our existing systems?",
                  answer: "Absolutely. We specialize in integration with existing systems and can extend or enhance your current digital infrastructure."
                },
                {
                  question: "Do you provide training for our team?",
                  answer: "Yes, we provide comprehensive training sessions to ensure your team can effectively use and manage the solutions we build."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-card p-6 rounded-lg border border-border animate-fade-in hover-scale"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <h3 className="text-lg font-semibold mb-3 flex items-start">
                    <FileText className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container-custom max-w-5xl mx-auto text-center animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and let's discuss how we can help bring your vision to life.
            </p>
            <Button size="lg" className="hover-scale">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
