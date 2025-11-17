
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Stelar",
    description: "An AI-powered storytelling platform that brings imagination to life. Create personalized, illustrated storybooks for children with the help of artificial intelligence.",
    tech: ["React", "AI/ML", "Tailwind CSS", "Creative Tools"],
    results: "Empowering parents and educators to create engaging stories",
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Stelar",
    url: "https://stelar.appsdyno.com",
  },
  {
    title: "Sumo Check",
    description: "Never miss a great deal again! Track and monitor AppSumo deals, get notified about expiring offers, and make informed purchasing decisions with comprehensive deal analytics.",
    tech: ["React", "Web Scraping", "Real-time Alerts", "Data Analytics"],
    results: "Helping users save money on software deals",
    image: "https://placehold.co/600x400/f59e0b/ffffff?text=SumoCheck",
    url: "https://sumocheck.appsdyno.com/",
  },
  {
    title: "WpScanrr",
    description: "A powerful WordPress vulnerability scanner that helps you discover hidden WordPress contents and identify security issues in your installation.",
    tech: ["React", "Tailwind CSS", "WordPress API", "Security"],
    results: "Improved security for hundreds of WordPress sites",
    image: "https://placehold.co/600x400/3b82f6/ffffff?text=WpScanrr",
    url: "https://wpscanrr.lovable.app/",
  },
  {
    title: "iNoty",
    description: "Simplify Payment Webhook Testing - The easiest way to test and debug Instant Payment Notifications from Stripe, PayPal, and Paddle - all in one place.",
    tech: ["React", "Tailwind CSS", "Webhook API", "Payment Integration"],
    results: "Streamlined payment debugging for developers",
    image: "https://placehold.co/600x400/6366f1/ffffff?text=iNoty",
    url: "https://inoty.lovable.app/",
  },
  {
    title: "SearchPad",
    description: "A customizable marketplace platform that connects buyers and sellers. Built with flexibility in mind, allowing businesses to create their own branded marketplace experience.",
    tech: ["React", "E-commerce", "Payment Integration", "Search Engine"],
    results: "Enabling businesses to launch their own marketplaces",
    image: "https://placehold.co/600x400/10b981/ffffff?text=SearchPad",
    url: "https://searchpad.appsdyno.com/",
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
    <section id="portfolio" className="py-12 md:py-20 lg:py-24">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Portfolio</h2>
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
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="h-full border-border/50 overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 bg-card/50 backdrop-blur-sm flex flex-col">
                <div className="relative aspect-video overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle className="text-lg md:text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-xs rounded-full border border-primary/20 bg-primary/5 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-primary mb-4 font-medium">{item.results}</p>
                  <Button className="w-full md:w-auto hover:-translate-y-0.5 hover:shadow-lg transition-all" variant="outline" asChild>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">Visit Project</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
