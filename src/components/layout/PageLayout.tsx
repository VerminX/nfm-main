import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export const PageLayout = ({ children, showFooter = true }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 sm:pt-28">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};
