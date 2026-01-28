import { PageLayout } from "@/components/layout/PageLayout";
import { ValentinesSection } from "@/components/ValentinesSection";
import { WeddingExperienceSelector } from "@/components/WeddingExperienceSelector";
import { OrderFlowersSection } from "@/components/OrderFlowersSection";

import { SocialProofToast } from "@/components/SocialProofToast";
import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { ArrowRight, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import rockyPhoto from "@/assets/rocky.png";

const Index = () => {
  const { ref: studioRef, isVisible: studioVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <PageLayout>
      <ValentinesSection />
      <WeddingExperienceSelector />
      <OrderFlowersSection />
      
      {/* Visit Our Studio Section */}
      <section 
        ref={studioRef}
        className={`py-16 sm:py-20 lg:py-24 bg-brand-cream/50 transition-all duration-700 ${studioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Rocky's photo */}
            <div className="relative">
              <ImageWithSkeleton
                src={rockyPhoto}
                alt="Rocky the studio dog"
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
                aspectRatio="4/3"
                containerClassName="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">Walk-Ins Welcome</p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light">
                  Stop in <span className="italic text-primary">Anytime</span>
                </h2>
              </div>
              
              <p className="text-muted-foreground text-lg">
                Stop in anytime to shop our flower cooler, choose your favorite blooms by the bunch, and create something beautiful on the spot. Grab a vase from us or bring your own vessel — our space is here for you to design, play, and leave with flowers you're obsessed with.
              </p>

              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <p className="font-medium text-foreground mb-1">
                  Flowers sold by the bunch • Walk-ins always welcome
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Rocky can't wait to see you! 🐾
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                  onClick={() => window.open('https://maps.google.com/?q=2615+Lebanon+Pike+Suite+B+Nashville+TN+37214', '_blank')}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialProofToast />
    </PageLayout>
  );
};

export default Index;