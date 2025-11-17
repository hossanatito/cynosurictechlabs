
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Award, ThumbsUp, TrendingUp } from "lucide-react";
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

const iconGradients: Record<string, string> = {
  "bg-blue-500": "from-blue-500 to-blue-600 shadow-blue-500/50",
  "bg-purple-500": "from-purple-500 to-purple-600 shadow-purple-500/50",
  "bg-green-500": "from-green-500 to-green-600 shadow-green-500/50",
  "bg-amber-500": "from-amber-500 to-amber-600 shadow-amber-500/50",
  "bg-rose-500": "from-rose-500 to-rose-600 shadow-rose-500/50",
  "bg-cyan-500": "from-cyan-500 to-cyan-600 shadow-cyan-500/50",
  "bg-indigo-500": "from-indigo-500 to-indigo-600 shadow-indigo-500/50",
  "bg-emerald-500": "from-emerald-500 to-emerald-600 shadow-emerald-500/50",
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Dot grid background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => {
              const IconComponent = testimonial.icon;
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className={cn(
                    "group relative overflow-hidden h-full rounded-2xl",
                    "bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg",
                    "border-2 border-transparent hover:border-primary/30",
                    "hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02]",
                    "transition-all duration-500"
                  )}>
                    <CardHeader className="pb-4">
                      <div className={cn(
                        "relative w-14 h-14 md:w-16 md:h-16 rounded-full",
                        "flex items-center justify-center mb-4",
                        "bg-gradient-to-br shadow-2xl",
                        "group-hover:scale-110 transition-transform duration-300",
                        iconGradients[testimonial.color]
                      )}>
                        <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <CardDescription className={cn(
                        "relative text-foreground/90 leading-relaxed",
                        "text-base md:text-lg pl-6",
                        "before:content-['\\201C'] before:text-6xl before:text-primary/20",
                        "before:absolute before:-left-2 before:-top-6",
                        "before:font-serif"
                      )}>
                        {testimonial.quote}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-sm md:text-base">{testimonial.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{testimonial.position}</p>
                      <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                        <TrendingUp className="w-3 h-3 text-primary" />
                        <span className="text-xs md:text-sm text-primary font-semibold">
                          {testimonial.result}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="hidden md:flex">
            <CarouselPrevious className="-left-12 bg-card/80 backdrop-blur-md border-primary/20 hover:bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10" />
            <CarouselNext className="-right-12 bg-card/80 backdrop-blur-md border-primary/20 hover:bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
