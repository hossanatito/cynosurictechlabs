
import { Briefcase, Calendar, ChevronRight, Clock, GraduationCap, MapPin, Trophy, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-muted/30">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">About Cynosuric Tech Labs</h1>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground mb-8">
                We're a team of passionate engineers, designers, and problem solvers dedicated to 
                transforming digital experiences and driving business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
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

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Journey</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From our humble beginnings to becoming a recognized tech partner, here's how we've grown.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
              
              {/* Timeline items */}
              {[
                {
                  year: "2020",
                  title: "Company Founded",
                  description: "Started with a team of 3 developers focused on web applications."
                },
                {
                  year: "2021",
                  title: "First Major Client",
                  description: "Partnered with a Fortune 500 company to revamp their digital platform."
                },
                {
                  year: "2022",
                  title: "Team Expansion",
                  description: "Grew to 15 team members and expanded our service offerings."
                },
                {
                  year: "2023",
                  title: "International Recognition",
                  description: "Won multiple industry awards for UI/UX excellence."
                },
                {
                  year: "2024",
                  title: "Global Presence",
                  description: "Established partnerships across 25+ countries with diverse clients."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center mb-12 animate-fade-in`} 
                  style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'hidden'}`}>
                    <div className="mb-1 font-bold text-xl">{item.year}</div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"></div>
                  
                  <div className={`w-1/2 ${index % 2 === 1 ? 'pl-8' : 'hidden'}`}>
                    <div className="mb-1 font-bold text-xl">{item.year}</div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
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
              {[
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
              ].map((member, index) => (
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

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Core Values</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our work and relationships.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Technical Excellence",
                  description: "We maintain the highest standards in our code, design, and delivery."
                },
                {
                  title: "User-Centered",
                  description: "Every decision we make prioritizes the end user's experience and needs."
                },
                {
                  title: "Continuous Innovation",
                  description: "We constantly explore new technologies and methodologies to stay ahead."
                },
                {
                  title: "Transparency",
                  description: "Open communication and visibility into our processes and progress."
                },
                {
                  title: "Collaborative Spirit",
                  description: "We believe the best solutions emerge from diverse perspectives working together."
                },
                {
                  title: "Result-Oriented",
                  description: "Focused on delivering tangible business outcomes, not just features."
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover-scale animate-fade-in"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container-custom max-w-5xl mx-auto text-center animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our expertise can help transform your digital presence and drive your business forward.
            </p>
            <Button size="lg" className="hover-scale">
              Get In Touch
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
