import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TrustBadge } from "@/components/TrustBadge";
import { TestimonialSnippet } from "@/components/TestimonialSnippet";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CTA = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-brand-cream via-brand-gold/20 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-12 left-12 w-48 sm:w-64 h-48 sm:h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-12 right-12 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Icon */}
          <div 
            className={`flex justify-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="p-3 sm:p-4 bg-background/80 backdrop-blur-sm rounded-full shadow-soft">
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h2 
              className={`font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-foreground leading-tight transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Let's Talk{" "}
              <span className="italic font-normal text-primary">Flowers</span>
            </h2>
            <p 
              className={`text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '200ms' }}
            >
              We love a good conversation. Share your Pinterest board, your wildest floral dreams, 
              or just your questions—we're here to listen and make it happen.
            </p>
          </div>

          {/* Testimonial Snippet */}
          <div 
            className={`max-w-md mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <TestimonialSnippet
              quote="My Pinterest board came to life. They understood my vision better than I did."
              name="Emily R."
              title="Spring Bride"
              variant="compact"
            />
          </div>

          {/* Trust Badge */}
          <div 
            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <TrustBadge />
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <Button 
              size="lg" 
              className="bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-medium px-6 sm:px-8 transition-all duration-300 shadow-md hover:shadow-lg group min-h-[44px]"
              onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}
            >
              Start Your Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-6 sm:px-8 transition-all duration-300 min-h-[44px]"
              onClick={() => navigate('/stem-stylists')}
            >
              Meet the Team
            </Button>
          </div>

          {/* Trust Indicators */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-4 sm:pt-8 text-xs sm:text-sm text-muted-foreground transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="flex items-center gap-2">
              <span className="text-primary">★★★★★</span>
              <span>5.0 Google Rating</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div>500+ Happy Couples</div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div>We Actually Pick Up</div>
          </div>
        </div>
      </div>
    </section>
  );
};
