import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation, getAnimationClasses } from "@/hooks/useScrollAnimation";

export const SeasonalPromo = () => {
  const navigate = useNavigate();
  const animation = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      
      <div ref={animation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div 
            {...getAnimationClasses(animation.isVisible, 0)}
            className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6 ${getAnimationClasses(animation.isVisible, 0).className}`}
          >
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-foreground">Valentine's Day 2025</span>
          </div>

          {/* Headline */}
          <h2 
            {...getAnimationClasses(animation.isVisible, 100)}
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light mb-6 ${getAnimationClasses(animation.isVisible, 100).className}`}
          >
            Make Their Heart <span className="italic text-primary">Bloom</span>
          </h2>

          {/* Description */}
          <p 
            {...getAnimationClasses(animation.isVisible, 200)}
            className={`text-lg text-muted-foreground mb-8 max-w-xl mx-auto ${getAnimationClasses(animation.isVisible, 200).className}`}
          >
            Skip the generic bouquets. Our Valentine's collection features unique, 
            hand-crafted arrangements that say "I really know you."
          </p>

          {/* Features */}
          <div 
            {...getAnimationClasses(animation.isVisible, 300)}
            className={`flex flex-wrap justify-center gap-6 mb-10 text-sm ${getAnimationClasses(animation.isVisible, 300).className}`}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">Pre-order now for guaranteed delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">Add a handwritten note</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">Same-day delivery available</span>
            </div>
          </div>

          {/* CTA */}
          <div 
            {...getAnimationClasses(animation.isVisible, 400)}
            className={`flex flex-col sm:flex-row gap-4 justify-center ${getAnimationClasses(animation.isVisible, 400).className}`}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 shadow-md hover:shadow-lg transition-all duration-300 group"
              onClick={() => navigate('/shop')}
            >
              Shop Valentine's Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8"
              onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
