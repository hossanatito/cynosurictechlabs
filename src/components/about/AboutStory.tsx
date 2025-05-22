
import React from "react";
import { Users, Calendar, MapPin, Trophy } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AboutStory() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-tr from-accent/5 to-background">
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
              <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                <Users className="text-primary h-5 w-5" />
                <span>Global Team</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors">
                <Calendar className="text-secondary h-5 w-5" />
                <span>Founded 2020</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors">
                <MapPin className="text-accent h-5 w-5" />
                <span>Remote-First</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                <Trophy className="text-primary h-5 w-5" />
                <span>Award-Winning</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-card/80 to-card rounded-lg p-6 hover-scale animate-fade-in shadow-lg border border-border/50" style={{ animationDelay: "0.4s" }}>
            <AspectRatio ratio={1/1} className="overflow-hidden rounded-md">
              <img 
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3" 
                alt="Abstract architectural design" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
