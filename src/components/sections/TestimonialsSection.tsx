
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Working with Cynosuric Tech Labs transformed our business. They delivered a solution that not only met our technical requirements but also drove measurable business results.",
    name: "Sarah Johnson",
    position: "CTO, HealthTech Innovations",
    company: "HealthTech Innovations",
    result: "65% reduction in patient wait times"
  },
  {
    quote: "Their senior engineers took the time to understand our unique challenges and built a custom solution that exceeded our expectations. The ongoing support has been exceptional.",
    name: "Michael Roberts",
    position: "CEO, Retail Plus",
    company: "Retail Plus",
    result: "40% increase in online conversion rate"
  },
  {
    quote: "As a startup, we needed a development partner who could scale with us. Cynosuric Tech Labs provided not just technical expertise but strategic guidance that helped us secure additional funding.",
    name: "Jessica Chen",
    position: "Founder, FinanceApp",
    company: "FinanceApp",
    result: "$2M in additional funding secured"
  },
  {
    quote: "The team's attention to detail and commitment to quality is unmatched. They delivered our project on time, on budget, and with exceptional quality.",
    name: "Daniel Martinez",
    position: "Product Director, LogisticsPro",
    company: "LogisticsPro",
    result: "28% improvement in supply chain efficiency"
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="border border-border h-full flex flex-col">
                    <CardHeader className="pb-2">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-primary text-lg">★</span>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="italic mb-6">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <CardDescription>{testimonial.position}</CardDescription>
                        <div className="mt-4 py-2 px-3 bg-muted/50 rounded-md inline-block text-sm">
                          <span className="font-medium">Result:</span> {testimonial.result}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
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
