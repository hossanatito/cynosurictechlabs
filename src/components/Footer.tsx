import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <div className="text-lg font-semibold tracking-tight">Cynosuric Tech Labs</div>
            <p className="mt-3 text-sm text-muted-foreground max-w-[38ch]">
              A small team building web, product, and AI software worth keeping.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Site</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-foreground text-muted-foreground">Home</Link></li>
              <li><Link to="/about" className="hover:text-foreground text-muted-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground text-muted-foreground">Services</Link></li>
              <li><Link to="/contact" className="hover:text-foreground text-muted-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@cynosurictechlabs.com" className="hover:text-foreground text-muted-foreground">
                  hello@cynosurictechlabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© {year} Cynosuric Tech Labs. All rights reserved.</div>
          <div>Built with care.</div>
        </div>
      </div>
    </footer>
  );
}
