
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
    <footer className="bg-card mt-16">
      <div className="container-custom pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Cynosuric Tech Labs</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              We craft elegant digital experiences with scalable, secure, and performance-driven solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  {item.isSection ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground text-sm mb-2">
              <span className="text-foreground">Email:</span>{" "}
              <a href="mailto:support@cynosurictechlabs.net" className="hover:text-primary transition-colors">
                support@cynosurictechlabs.net
              </a>
            </p>
            <p className="text-muted-foreground text-sm">
              <span className="text-foreground">Location:</span> Remote-First Company
            </p>
            <Link to="/contact" className="inline-block mt-3 text-primary hover:underline text-sm">
              Get in touch →
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Cynosuric Tech Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
