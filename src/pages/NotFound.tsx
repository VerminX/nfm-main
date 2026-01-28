import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="font-serif text-6xl font-light text-primary">404</h1>
          <p className="text-xl text-muted-foreground">Oops! This page doesn't exist.</p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;