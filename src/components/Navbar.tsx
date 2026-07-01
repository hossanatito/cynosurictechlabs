import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={cn(
            "pointer-events-auto flex items-center gap-1 rounded-full border border-border bg-background/70 backdrop-blur-xl transition-all duration-300",
            "pl-5 pr-2 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)]",
            scrolled && "bg-background/85"
          )}
        >
          <Link to="/" className="text-sm font-semibold tracking-tight mr-4">
            Cynosuric
          </Link>

          <ul className="hidden md:flex items-center">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "px-3.5 py-1.5 text-sm rounded-full transition-colors",
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            to="/contact"
            className="hidden md:inline-flex ml-2 items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium transition-transform active:scale-[0.98]"
          >
            Start a project
            <span aria-hidden>→</span>
          </Link>

          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-x-4 top-20 z-40 md:hidden rounded-2xl border border-border bg-background/95 backdrop-blur-xl p-3 shadow-lg transition-all duration-200",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-base rounded-lg text-foreground hover:bg-secondary transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center rounded-full bg-foreground text-background px-4 py-3 text-sm font-medium"
            >
              Start a project
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
