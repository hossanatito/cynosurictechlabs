
import React from "react";
import { Users, Calendar, MapPin, Trophy } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
            <div className="w-16 h-1 bg-primary mb-8"></div>
            <p className="text-muted-foreground mb-4">
              Founded in 2020, Cynosuric Tech Labs emerged from a simple vision: to bridge the gap between complex technology 
              and elegant user experiences. Our founders, with backgrounds in engineering and design, recognized that 
              many businesses struggle to transform their technical requirements into engaging digital products.
            </p>
            <p className="text-muted-foreground mb-6">
              The name "Cynosuric" comes from the word "cynosure" — something that strongly attracts attention by its 
              brilliance. This reflects our mission to create digital solutions that stand out and captivate users 
              while delivering exceptional technical performance.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Users className="text-primary h-5 w-5" />
                <span>Global Team</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-primary h-5 w-5" />
                <span>Founded 2020</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary h-5 w-5" />
                <span>Remote-First</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="text-primary h-5 w-5" />
                <span>Award-Winning</span>
              </div>
            </div>
          </div>
          
          <div className="bg-muted rounded-lg p-6 hover-scale animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="aspect-square bg-card rounded-md flex items-center justify-center border border-border">
              <p className="text-primary font-medium">Company Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
