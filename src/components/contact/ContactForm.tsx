
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // FormSubmit handles the actual submission via the form's action attribute
      // The form will be submitted to FormSubmit's servers, which will then email you
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch("https://formsubmit.co/ajax/support@cynosurictechlabs.net", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error("There was an error sending your message. Please try again.");
      }
      
      const data = await response.json();
      
      if (data.success === "true" || data.success === true) {
        setFormSubmitted(true);
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out! We'll get back to you shortly.",
        });
        
        // Reset form
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        throw new Error("There was an error sending your message. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-lg border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
      <CardHeader className="space-y-1 p-4 md:p-6">
        <CardTitle className="text-xl md:text-2xl">Send Us a Message</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        {formSubmitted ? (
          <div className="text-center py-6 md:py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Send className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
            <p className="text-muted-foreground mb-4">Thank you for reaching out. We'll be in touch shortly.</p>
            <Button 
              onClick={() => setFormSubmitted(false)} 
              variant="outline"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Hidden input for FormSubmit to know where to send the email */}
            <input type="hidden" name="_subject" value="New contact form submission" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={window.location.href} />
            
            {/* Honeypot field to prevent spam */}
            <input type="text" name="_honey" style={{ display: "none" }} />
            
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="focus-visible:ring-primary focus-visible:ring-2 min-h-[44px] text-base"
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
                  className="focus-visible:ring-primary focus-visible:ring-2 min-h-[44px] text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input 
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="focus-visible:ring-primary focus-visible:ring-2 min-h-[44px] text-base"
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
                  className="focus-visible:ring-primary focus-visible:ring-2 min-h-[44px] text-base"
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
                className="focus-visible:ring-primary focus-visible:ring-2 text-base resize-none"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full hover:-translate-y-0.5 hover:shadow-lg transition-all group min-h-[48px] text-base" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
