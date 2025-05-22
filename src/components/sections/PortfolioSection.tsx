
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "WpScanrr",
    description: "A powerful WordPress vulnerability scanner that helps you discover hidden WordPress contents and identify security issues in your installation.",
    tech: ["React", "Tailwind CSS", "WordPress API", "Security"],
    results: "Improved security for hundreds of WordPress sites",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    url: "https://wpscanrr.lovable.app/",
  },
  {
    title: "iNoty",
    description: "Simplify Payment Webhook Testing - The easiest way to test and debug Instant Payment Notifications from Stripe, PayPal, and Paddle - all in one place.",
    tech: ["React", "Tailwind CSS", "Webhook API", "Payment Integration"],
    results: "Streamlined payment debugging for developers",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    url: "https://inoty.lovable.app/",
  },
];

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out our latest projects and the solutions we've built for our clients.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {portfolioItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 h-full hover-lift hover-glow">
                <div className="h-52 bg-muted overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {item.tech.join(" • ")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                  <div className="mt-4 py-2 px-4 bg-muted/50 rounded-md">
                    <p className="text-sm font-medium">Results: <span className="text-primary">{item.results}</span></p>
                  </div>
                </CardContent>
                <CardFooter>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" size="sm" className="w-full">Visit Project</Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
