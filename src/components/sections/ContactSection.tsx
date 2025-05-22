
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you'd send this data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to learn more? Reach out and let's start a conversation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  We're here to answer any questions you may have.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a 
                    href="mailto:support@cynosurictechlabs.net" 
                    className="text-primary hover:underline"
                  >
                    support@cynosurictechlabs.net
                  </a>
                </div>
                <div>
                  <p className="font-medium mb-1">Location</p>
                  <p className="text-muted-foreground">Remote-First Company</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Working Hours</p>
                  <p className="text-muted-foreground">Monday - Friday: 9AM - 6PM</p>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link to="/contact" className="inline-flex items-center">
                    Visit Our Contact Page
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
