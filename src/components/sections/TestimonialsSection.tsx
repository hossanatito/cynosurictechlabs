
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Award, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Working with Cynosuric Tech Labs transformed our business. They delivered a solution that not only met our technical requirements but also drove measurable business results.",
    name: "Sarah Johnson",
    position: "CTO, HealthTech Innovations",
    company: "HealthTech Innovations",
    result: "65% reduction in patient wait times",
    color: "bg-blue-500",
    icon: Star
  },
  {
    quote: "Their senior engineers took the time to understand our unique challenges and built a custom solution that exceeded our expectations. The ongoing support has been exceptional.",
    name: "Michael Roberts",
    position: "CEO, Retail Plus",
    company: "Retail Plus",
    result: "40% increase in online conversion rate",
    color: "bg-purple-500",
    icon: ThumbsUp
  },
  {
    quote: "As a startup, we needed a development partner who could scale with us. Cynosuric Tech Labs provided not just technical expertise but strategic guidance that helped us secure additional funding.",
    name: "Jessica Chen",
    position: "Founder, FinanceApp",
    company: "FinanceApp",
    result: "$2M in additional funding secured",
    color: "bg-green-500",
    icon: Award
  },
  {
    quote: "The team's attention to detail and commitment to quality is unmatched. They delivered our project on time, on budget, and with exceptional quality.",
    name: "Daniel Martinez",
    position: "Product Director, LogisticsPro",
    company: "LogisticsPro",
    result: "28% improvement in supply chain efficiency",
    color: "bg-amber-500",
    icon: Star
  },
  {
    quote: "Cynosuric Tech Labs helped us modernize our legacy systems while maintaining business continuity. Their expertise in both new and existing technologies was invaluable.",
    name: "Emily Thompson",
    position: "CIO, FinServ Global",
    company: "FinServ Global",
    result: "52% reduction in system maintenance costs",
    color: "bg-rose-500",
    icon: ThumbsUp
  },
  {
    quote: "The AI-powered analytics dashboard they built has completely changed how we make decisions. We now have real-time insights that were previously impossible to obtain.",
    name: "David Wilson",
    position: "Data Director, MarketPulse",
    company: "MarketPulse",
    result: "3.5x ROI in the first year",
    color: "bg-cyan-500",
    icon: Award
  },
  {
    quote: "Their team seamlessly integrated with our internal developers, bringing best practices and new technologies that elevated our entire development process.",
    name: "Michelle Garcia",
    position: "VP Engineering, TechNova",
    company: "TechNova",
    result: "35% faster deployment cycles",
    color: "bg-indigo-500",
    icon: Star
  },
  {
    quote: "We approached Cynosuric with a complex technical challenge that three other agencies couldn't solve. Their team not only solved it but created an elegant solution that exceeded our expectations.",
    name: "Robert Kim",
    position: "Founder, InnovateX",
    company: "InnovateX",
    result: "Launched 2 months ahead of schedule",
    color: "bg-emerald-500",
    icon: ThumbsUp
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => {
              const IconComponent = testimonial.icon;
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="border-border/50 h-full hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className={cn("w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 shadow-lg", testimonial.color)}>
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <CardDescription className="text-foreground leading-relaxed italic text-sm md:text-base">
                        "{testimonial.quote}"
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium text-sm md:text-base">{testimonial.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-xs md:text-sm text-primary font-medium mt-2">{testimonial.result}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="hidden md:flex">
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
