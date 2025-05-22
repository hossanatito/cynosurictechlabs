
import React from "react";

export default function ContactMap() {
  return (
    <section className="py-12 bg-gradient-to-t from-primary/5 to-background">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Our Global Presence</h2>
          <p className="text-muted-foreground mt-2">
            We operate globally with team members and clients around the world
          </p>
        </div>
        
        <div className="aspect-video bg-muted relative rounded-lg overflow-hidden shadow-md">
          {/* This is where you'd typically embed a Google Map or similar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-muted-foreground">
              Interactive map would be displayed here in a production environment
            </p>
          </div>
          
          {/* Decorative dots to represent global locations */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full"></div>
          <div className="absolute top-1/3 left-2/3 w-3 h-3 bg-primary rounded-full"></div>
          <div className="absolute top-2/3 left-1/5 w-3 h-3 bg-primary rounded-full"></div>
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-primary rounded-full"></div>
          <div className="absolute top-3/4 left-2/5 w-3 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
