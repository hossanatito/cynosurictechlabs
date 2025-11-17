
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import logo from "@/assets/logo.png";

const navItems = [
  { name: "Home", href: "/", isSection: false },
  { name: "About", href: "/about", isSection: false },
  { name: "Services", href: "/services", isSection: false },
  { name: "Contact", href: "/contact", isSection: false },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container-custom py-3 md:py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-base md:text-lg font-bold text-primary flex items-center gap-2 transition-transform hover:scale-105 duration-300">
            <img src={logo} alt="Cynosuric Tech Labs Logo" className="h-6 md:h-8 w-6 md:w-8 object-contain bg-white rounded-md p-0.5" />
            <span className="hidden sm:inline">Cynosuric Tech Labs</span>
            <span className="sm:hidden">Cynosuric</span>
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
              <Button size="sm" className="hover-scale min-h-[44px]" asChild>
                <Link to="/contact">Free Consultation</Link>
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
          "flex flex-col md:hidden absolute left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-xl transition-all duration-300 ease-in-out px-4 pb-4",
          isMenuOpen ? "top-[60px] opacity-100" : "-top-[400px] opacity-0 pointer-events-none"
        )}>
          {navItems.map((item, idx) => (
            item.isSection ? (
              <a 
                key={item.name}
                href={item.href}
                className="py-4 text-base text-muted-foreground hover:text-primary transition-colors border-b border-border/30 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ) : (
              <Link 
                key={item.name}
                to={item.href}
                className="py-4 text-base text-muted-foreground hover:text-primary transition-colors border-b border-border/30 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
          <Button className="mt-4 w-full min-h-[48px] text-base" onClick={() => setIsMenuOpen(false)} asChild>
            <Link to="/contact">Free Consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
