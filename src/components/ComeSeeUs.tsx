import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { useScrollAnimation, getAnimationClasses } from "@/hooks/useScrollAnimation";

export const ComeSeeUs = () => {
  const animation = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div ref={animation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <p
              {...getAnimationClasses(animation.isVisible, 0)}
              className={`text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 ${getAnimationClasses(animation.isVisible, 0).className}`}
            >
              Visit Our Studio
            </p>
            <h2
              {...getAnimationClasses(animation.isVisible, 100)}
              className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light mb-6 ${getAnimationClasses(animation.isVisible, 100).className}`}
            >
              Come See Us Friday
            </h2>
            <p
              {...getAnimationClasses(animation.isVisible, 200)}
              className={`text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 ${getAnimationClasses(animation.isVisible, 200).className}`}
            >
              Stop by our studio to browse fresh blooms, get inspired, and chat with our team about
              your next floral project. Walk-ins welcome every Friday!
            </p>

            <div
              {...getAnimationClasses(animation.isVisible, 300)}
              className={`space-y-4 mb-8 ${getAnimationClasses(animation.isVisible, 300).className}`}
            >
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground">2615 Lebanon Pike, Suite B, Nashville TN</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground">Fridays: 10am - 4pm</span>
              </div>
            </div>

            <Button
              {...getAnimationClasses(animation.isVisible, 400)}
              size="lg"
              className={`bg-primary hover:bg-primary/90 text-primary-foreground ${getAnimationClasses(animation.isVisible, 400).className}`}
              onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=2615+Lebanon+Pike+Suite+B+Nashville+TN', '_blank')}
            >
              Get Directions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
