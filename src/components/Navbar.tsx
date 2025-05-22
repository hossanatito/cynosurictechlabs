
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, CircuitBoard } from 'lucide-react';

const navItems = [
  { name: "Home", href: "/", isSection: false },
  { name: "About", href: "/about", isSection: false },
  { name: "Services", href: "/services", isSection: false },
  { name: "Portfolio", href: "/#portfolio", isSection: true },
  { name: "Tech Stack", href: "/#tech-stack", isSection: true },
  { name: "Testimonials", href: "/#testimonials", isSection: true },
  { name: "Contact", href: "/contact", isSection: false },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-lg md:text-xl font-bold text-primary flex items-center gap-2 transition-transform hover:scale-105 duration-300">
            <CircuitBoard className="h-5 w-5" />
            Cynosuric Tech Labs
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name} className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {item.isSection ? (
                  <a 
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    to={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button size="sm" className="hover-scale" asChild>
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
            </li>
          </ul>
          
          {/* Mobile Navigation Toggle */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </nav>
        
        {/* Mobile Navigation Menu */}
        <div className={cn(
          "flex flex-col md:hidden absolute left-0 right-0 bg-background border-b border-border px-4 pb-4 transition-all duration-300 ease-in-out",
          isMenuOpen ? "top-[68px] opacity-100" : "-top-[400px] opacity-0"
        )}>
          {navItems.map((item, idx) => (
            item.isSection ? (
              <a 
                key={item.name}
                href={item.href}
                className="py-3 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ) : (
              <Link 
                key={item.name}
                to={item.href}
                className="py-3 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
          <Button className="mt-3 hover-scale" onClick={() => setIsMenuOpen(false)} asChild>
            <Link to="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
