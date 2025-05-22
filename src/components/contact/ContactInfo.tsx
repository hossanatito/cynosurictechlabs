
import React from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="shadow-md border-primary/10 hover:border-primary/30 transition-all duration-300">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Email</h3>
              <a href="mailto:support@cynosurictechlabs.net" className="text-primary hover:underline">
                support@cynosurictechlabs.net
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-muted-foreground">Available upon request</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-muted-foreground">Remote-First Company</p>
              <p className="text-muted-foreground">Serving clients worldwide</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Business Hours</h3>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground">Weekend: By appointment</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-md border-primary/10 hover:border-primary/30 transition-all duration-300">
        <CardHeader>
          <CardTitle>Connect With Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:border-primary/30">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:border-primary/30">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:border-primary/30">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:border-primary/30">
              <Facebook className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
