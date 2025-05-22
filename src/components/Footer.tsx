
import { cn } from "@/lib/utils";

const navigation = {
  main: [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
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
                  <a 
                    href={item.href} 
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
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
