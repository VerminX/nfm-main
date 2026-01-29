import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Navigation } from "lucide-react";
import heroImage from "@/assets/hero-studio-welcome.webp";

export const Hero = () => {
  const handleGetDirections = () => {
    window.open('https://maps.google.com/?q=2615+Lebanon+Pike+Suite+B+Nashville+TN+37214', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Video/Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Hero background image */}
        <img
          src={heroImage}
          alt="Nashville Flower Market Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="max-w-2xl space-y-6 sm:space-y-8">
          <div className="space-y-4">
            {/* Location Badge - First to appear */}
            <div 
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full opacity-0 animate-[fadeSlideUp_0.7s_ease-out_0.1s_forwards]"
            >
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-xs sm:text-sm font-medium text-foreground">2615 Lebanon Pike, Suite B • Nashville, TN</span>
            </div>
            
            {/* Headline - Second to appear */}
            <h1 
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] text-foreground opacity-0 animate-[fadeSlideUp_0.7s_ease-out_0.2s_forwards]"
            >
              Come <span className="italic font-normal text-primary">See Us</span>
            </h1>
          </div>

          {/* Description - Third to appear */}
          <p 
            className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed opacity-0 animate-[fadeSlideUp_0.7s_ease-out_0.35s_forwards]"
          >
            Step into our Nashville studio—where creativity blooms and every arrangement tells a story. 
            We're real people who love what we do, and we'd love to meet you.
          </p>

          {/* Studio Hours */}
          <div className="opacity-0 animate-[fadeSlideUp_0.7s_ease-out_0.45s_forwards]">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Studio Hours:</span> Tue–Fri 9am–6pm | Sat 9am–12pm
            </p>
          </div>

          {/* Buttons - Fourth to appear */}
          <div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-[fadeSlideUp_0.7s_ease-out_0.55s_forwards]"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 sm:px-8 transition-all duration-300 shadow-md hover:shadow-lg group"
              onClick={handleGetDirections}
            >
              <Navigation className="mr-2 h-4 w-4" />
              Get Directions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-6 sm:px-8 transition-all duration-300"
              onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}
            >
              Book a Consultation
            </Button>
          </div>

          {/* Trust Indicators - Last to appear */}
          <div 
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-muted-foreground opacity-0 animate-[fadeSlideUp_0.7s_ease-out_0.7s_forwards]"
          >
            <div className="flex items-center gap-2">
              <span className="text-primary">★★★★★</span>
              <span>5.0 Google Rating</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div>500+ Happy Couples</div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div>DoorDash's #1 Nashville Florist</div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-12 right-12 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float hidden lg:block" />
    </section>
  );
};
