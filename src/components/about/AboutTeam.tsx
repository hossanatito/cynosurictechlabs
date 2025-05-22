
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    bio: "Former software architect with 15+ years of experience in enterprise solutions."
  },
  {
    name: "Samira Patel",
    role: "CTO",
    bio: "AI specialist and full-stack developer passionate about emerging technologies."
  },
  {
    name: "Marcus Chen",
    role: "Design Director",
    bio: "Award-winning UI/UX designer with background in psychology and user behavior."
  },
  {
    name: "Elena Rodriguez",
    role: "Lead Developer",
    bio: "Open-source contributor specializing in performant web and mobile applications."
  },
  {
    name: "Jamal Wilson",
    role: "Project Manager",
    bio: "Certified agile practitioner with experience delivering complex technical projects."
  },
  {
    name: "Lina Park",
    role: "Client Relations",
    bio: "Technical background combined with exceptional communication and interpersonal skills."
  }
];

export default function AboutTeam() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the talented individuals behind Cynosuric Tech Labs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CardContent className="p-6">
                <div className="aspect-square w-32 h-32 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                  <p className="text-primary/70">Photo</p>
                </div>
                <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                <p className="text-primary/80 text-sm text-center mb-3">{member.role}</p>
                <p className="text-muted-foreground text-center">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
