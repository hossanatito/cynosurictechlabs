
import React from "react";
import { FileText } from "lucide-react";

export default function ServicesFAQ() {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website might take 4-6 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during the discovery phase."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer both fixed-price and time-and-materials pricing models depending on the project requirements. We provide transparent quotes after a thorough consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally after launch."
    },
    {
      question: "How do you handle project communication?",
      answer: "We use project management tools like Jira or Asana and conduct regular video meetings. You'll have a dedicated project manager as your main point of contact."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in integration with existing systems and can extend or enhance your current digital infrastructure."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes, we provide comprehensive training sessions to ensure your team can effectively use and manage the solutions we build."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Common questions about our services and processes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg border border-border animate-fade-in hover-scale"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <h3 className="text-lg font-semibold mb-3 flex items-start">
                <FileText className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                {faq.question}
              </h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
