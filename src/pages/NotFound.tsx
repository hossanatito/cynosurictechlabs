import { Link, useLocation } from "@/lib/router-compat";
import { useEffect } from "react";
import SEOHead from "@/components/SEO/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page not found"
        description="The page you're looking for doesn't exist."
      />
      <main className="min-h-dvh flex items-center justify-center bg-background text-foreground px-6">
        <div className="text-center">
          <h1 className="text-6xl font-medium tracking-tight mb-4">404</h1>
          <p className="text-lg text-muted-foreground mb-6">This page can't be found.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium"
          >
            Return home
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;
