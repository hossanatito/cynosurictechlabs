
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you'd send this data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Card className="shadow-md border-primary/10 hover:border-primary/30 transition-all duration-300">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Send Us a Message</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="focus-visible:ring-primary"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input 
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                className="focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input 
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
                className="focus-visible:ring-primary"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message"
              name="message"
              placeholder="Tell us about your project or inquiry..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="focus-visible:ring-primary"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full hover-scale group" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
