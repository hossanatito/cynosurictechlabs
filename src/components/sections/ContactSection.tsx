
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";
import contactCharacter from "@/assets/contact-hero-character.png.asset.json";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Background character image */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12] md:opacity-[0.18] lg:opacity-20"
        style={{
          backgroundImage: `url(${contactCharacter.url})`,
          backgroundPosition: "right -5% bottom -10%",
          backgroundSize: "auto 85%",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to learn more? Reach out via email and let's start a conversation.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-border/50 bg-card/70 backdrop-blur-md hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl md:text-2xl">Get in Touch</CardTitle>
              <CardDescription className="text-sm md:text-base">
                We're here to answer any questions you may have.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm md:text-base mb-1">Email</p>
                  <a 
                    href="mailto:support@cynosurictechlabs.net" 
                    className="text-primary hover:underline text-sm md:text-base break-all"
                  >
                    support@cynosurictechlabs.net
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm md:text-base mb-1">Location</p>
                  <p className="text-muted-foreground text-sm md:text-base">Remote-First Company</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm md:text-base mb-1">Working Hours</p>
                  <p className="text-muted-foreground text-sm md:text-base">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-center text-muted-foreground text-xs md:text-sm leading-relaxed">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

