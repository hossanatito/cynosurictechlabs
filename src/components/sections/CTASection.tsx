
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 to-secondary/20">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss your project and see how our expertise can transform your digital presence.
        </p>
        <Button size="lg" className="hover-scale">
          Schedule a Free Discovery Call
        </Button>
      </div>
    </section>
  );
}
