
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Move3D } from 'lucide-react';

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <a href="#hero" className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
            <Move3D className="h-6 w-6" />
            Cynosuric Tech Labs
          </a>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <Button size="sm">Get a Free Consultation</Button>
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
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="py-3 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button className="mt-3" onClick={() => setIsMenuOpen(false)}>Get a Free Consultation</Button>
        </div>
      </div>
    </header>
  );
}
