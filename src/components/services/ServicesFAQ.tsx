import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Clock, DollarSign, HeadphonesIcon, MessageSquare, Settings, GraduationCap, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServicesFAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website might take 4-6 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during the discovery phase.",
      icon: Clock,
      gradient: "from-primary/20 to-primary/5"
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer both fixed-price and time-and-materials pricing models depending on the project requirements. We provide transparent quotes after a thorough consultation.",
      icon: DollarSign,
      gradient: "from-primary/25 to-primary/8"
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally after launch.",
      icon: HeadphonesIcon,
      gradient: "from-primary/20 to-primary/5"
    },
    {
      question: "How do you handle project communication?",
      answer: "We use project management tools like Jira or Asana and conduct regular video meetings. You'll have a dedicated project manager as your main point of contact.",
      icon: MessageSquare,
      gradient: "from-primary/30 to-primary/10"
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in integration with existing systems and can extend or enhance your current digital infrastructure.",
      icon: Settings,
      gradient: "from-primary/20 to-primary/5"
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes, we provide comprehensive training sessions to ensure your team can effectively use and manage the solutions we build.",
      icon: GraduationCap,
      gradient: "from-primary/25 to-primary/8"
    }
  ];

  // Filter FAQs based on search
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container-custom max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary/20">
            Got Questions?
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Common questions about our services and processes.
          </p>

          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search questions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary/30"
            />
          </div>
        </div>
        
        {/* Accordion FAQ */}
        <Accordion type="single" collapsible className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={cn(
                  "bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 overflow-hidden",
                  "hover:border-primary/30 transition-all duration-300",
                  "data-[state=open]:border-primary/50 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/10",
                  "animate-fade-in"
                )}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <AccordionTrigger className="hover:no-underline py-5 group">
                  <div className="flex items-start gap-3 text-left">
                    <div className={cn(
                      "p-2 rounded-lg bg-gradient-to-br shrink-0 mt-0.5",
                      faq.gradient,
                      "border border-primary/20 group-hover:scale-110 transition-transform duration-300"
                    )}>
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-semibold text-base group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-2">
                  <div className="ml-11 text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-4">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* No Results */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No questions found matching "{searchQuery}"</p>
          </div>
        )}

        {/* Still have questions CTA */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              We're here to help. Reach out to our team for personalized assistance.
            </p>
            <a 
              href="mailto:contact@cynosuric.com" 
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              contact@cynosuric.com
              <MessageSquare className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
