
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const navigation = {
  main: [
    { name: 'Home', href: '/', isSection: false },
    { name: 'About', href: '/about', isSection: false },
    { name: 'Services', href: '/services', isSection: false },
    { name: 'Portfolio', href: '/#portfolio', isSection: true },
    { name: 'Tech Stack', href: '/#tech-stack', isSection: true },
    { name: 'Testimonials', href: '/#testimonials', isSection: true },
    { name: 'Contact', href: '/contact', isSection: false },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card mt-16 border-t border-border/50" role="contentinfo">
      <div className="container-custom pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-primary">Cynosuric Tech Labs</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              We craft elegant digital experiences with scalable, secure, and performance-driven solutions that transform businesses.
            </p>
          </div>
          
          <nav aria-label="Footer navigation">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  {item.isSection ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          <address className="not-italic">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact Us</h3>
            <p className="text-muted-foreground text-sm mb-2">
              <span className="text-foreground font-medium">Email:</span>{" "}
              <a href="mailto:support@cynosurictechlabs.net" className="hover:text-primary transition-colors">
                support@cynosurictechlabs.net
              </a>
            </p>
            <p className="text-muted-foreground text-sm mb-3">
              <span className="text-foreground font-medium">Location:</span> Remote-First Company
            </p>
            <Link to="/contact" className="inline-block text-primary hover:underline text-sm font-medium">
              Get a Free Consultation →
            </Link>
          </address>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Cynosuric Tech Labs. All rights reserved. | 6+ Years of Excellence | 250+ Projects Delivered
          </p>
        </div>
      </div>
    </footer>
  );
}
