import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { Users, Wine, Sparkles, Heart, ArrowRight, Check, Calendar, ExternalLink, Mail, Phone, MapPin, Download } from "lucide-react";
import { useScrollAnimation, getAnimationClasses } from "@/hooks/useScrollAnimation";
import workshopGroup from "@/assets/workshop-group.webp";
import workshopAction from "@/assets/workshop-action.webp";
import workshopColorfulGroup from "@/assets/gallery/workshop-colorful-group.webp";
import workshopIntimateThree from "@/assets/gallery/workshop-intimate-three.webp";

const Workshops = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: publicRef, isVisible: publicVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: privateRef, isVisible: privateVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: onTheGoRef, isVisible: onTheGoVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: pricingRef, isVisible: pricingVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.1 });

  const whatToExpect = [
    "Seasonal themes",
    "Guided by our floral team",
    "All supplies included",
    "No experience necessary",
  ];

  const whyBookWithUs = [
    { title: "No experience required", description: "We guide you every step of the way" },
    { title: "Turnkey setup", description: "Everything is ready when you arrive" },
    { title: "Creative & social", description: "A memorable experience with friends or colleagues" },
    { title: "Beautiful florals to take home", description: "Leave with your own stunning creation" },
    { title: "Ideal for teams", description: "Perfect for team-building and client appreciation" },
  ];

  const pricingOptions = [
    { package: "Bloom Bar Jars", price: "$25–30/person" },
    { package: "Wrapped Bouquets", price: "$55–60/person" },
    { package: "Small Arrangements", price: "$45–50/person" },
  ];

  const privateInStudioFeatures = [
    "90-minute guided session",
    "Fresh flowers & all supplies",
    "Support from our floral designers",
    "BYOB welcome",
  ];

  const onTheGoFeatures = [
    "Full setup & breakdown",
    "Flowers, tools & supplies",
    "90-minute experience",
    "Professional Stem Stylist",
  ];

  const handleViewSchedule = () => {
    window.open('https://buytickets.at/nashvilleflowermarket', '_blank');
  };

  const handlePrivateWorkshop = () => {
    const subject = encodeURIComponent("Private Workshop Inquiry");
    const body = encodeURIComponent("Hi Nashville Flower Market,\n\nI'm interested in booking a private workshop. Here are the details:\n\n- Event Type: \n- Number of Guests: \n- Preferred Date(s): \n- Any special requests: \n\nThank you!");
    window.open(`mailto:hello@nashvilleflowermarket.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handleOffSiteWorkshop = () => {
    const subject = encodeURIComponent("Off-Site Workshop Inquiry");
    const body = encodeURIComponent("Hi Nashville Flower Market,\n\nI'm interested in booking a DIY On-The-Go workshop at my location. Here are the details:\n\n- Event Type: \n- Number of Guests: \n- Location/Venue: \n- Preferred Date(s): \n- Any special requests: \n\nThank you!");
    window.open(`mailto:hello@nashvilleflowermarket.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithSkeleton src={workshopGroup} alt="Workshop at Nashville Flower Market" className="w-full h-full object-cover" containerClassName="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 lg:to-transparent" />
        </div>
        <div ref={heroRef} className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <div className={`max-w-2xl space-y-6 ${getAnimationClasses(heroVisible).className}`} style={getAnimationClasses(heroVisible).style}>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent">Floral Workshops</p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
              Floral Workshops That <span className="italic text-primary">Bring People Together</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
              Join us for hands-on floral workshops at Nashville Flower Market — or book a private DIY flower experience for your team, clients, or celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group" onClick={handleViewSchedule}>
                View Workshop Schedule <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-brand-cream border-brand-espresso text-brand-espresso hover:bg-brand-espresso hover:text-brand-cream"
                onClick={handlePrivateWorkshop}
              >
                Plan a Private Workshop <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Public Workshops */}
      <section
        ref={publicRef}
        className={`py-16 sm:py-20 lg:py-24 bg-background ${getAnimationClasses(publicVisible).className}`}
        style={getAnimationClasses(publicVisible).style}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">Public Workshops</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
                Ticketed Events <span className="italic text-primary">Open to All</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our public workshops are perfect for anyone who wants to learn, create, and have fun with flowers. No experience necessary!
              </p>
            </div>

            <Card className="p-8 bg-brand-cream/30 border-brand-gold/20">
              <h3 className="font-serif text-xl font-medium mb-6 text-center">What to Expect</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {whatToExpect.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group" onClick={handleViewSchedule}>
                  View & Book Workshops <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section
        ref={galleryRef}
        className={`py-16 sm:py-20 lg:py-24 bg-brand-cream/50 ${getAnimationClasses(galleryVisible).className}`}
        style={getAnimationClasses(galleryVisible).style}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">Gallery</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-light">
              Hands-On Fun in <span className="italic text-primary">Our Studio</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-xl">
              <ImageWithSkeleton src={workshopGroup} alt="Workshop group creating arrangements" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" containerClassName="w-full h-full" aspectRatio="square" />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <ImageWithSkeleton src={workshopAction} alt="Hands-on floral design" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" containerClassName="w-full h-full" aspectRatio="square" />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <ImageWithSkeleton src={workshopColorfulGroup} alt="Colorful workshop creations" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" containerClassName="w-full h-full" aspectRatio="square" />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <ImageWithSkeleton src={workshopIntimateThree} alt="Intimate workshop session" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" containerClassName="w-full h-full" aspectRatio="square" />
            </div>
          </div>
        </div>
      </section>

      {/* Private DIY Workshops - In Studio */}
      <section
        ref={privateRef}
        className={`py-16 sm:py-20 lg:py-24 bg-background ${getAnimationClasses(privateVisible).className}`}
        style={getAnimationClasses(privateVisible).style}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">Private Workshops</p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
                  DIY Workshops <span className="italic text-primary">In Studio</span>
                </h2>
                <p className="text-muted-foreground">
                  Perfect for teams, client appreciation, birthdays, bridal showers, and more. Book our studio for your private group experience.
                </p>
              </div>

              <ul className="space-y-4">
                {privateInStudioFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>Minimum: 5 participants</span>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handlePrivateWorkshop}>
                Book a Private Workshop <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              <ImageWithSkeleton
                src={workshopAction}
                alt="Private workshop in studio"
                className="rounded-2xl shadow-medium w-full"
                containerClassName="w-full rounded-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/30 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* DIY On-The-Go */}
      <section
        ref={onTheGoRef}
        className={`py-16 sm:py-20 lg:py-24 bg-brand-gold/10 ${getAnimationClasses(onTheGoVisible).className}`}
        style={getAnimationClasses(onTheGoVisible).style}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <ImageWithSkeleton
                src={workshopIntimateThree}
                alt="On-the-go workshop experience"
                className="rounded-2xl shadow-medium w-full"
                containerClassName="w-full rounded-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">We Come to You</p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
                  DIY <span className="italic text-primary">On-The-Go</span>
                </h2>
                <p className="text-muted-foreground">
                  Host a floral workshop at your office, venue, or home. We bring everything you need for a memorable experience.
                </p>
              </div>

              <ul className="space-y-4">
                {onTheGoFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Minimum: 10 participants</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Additional: $75 flat setup fee</span>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleOffSiteWorkshop}>
                Request an Off-Site Workshop <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        ref={pricingRef}
        className={`py-16 sm:py-20 lg:py-24 bg-background ${getAnimationClasses(pricingVisible).className}`}
        style={getAnimationClasses(pricingVisible).style}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">Pricing</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light mb-10">
              Workshop <span className="italic text-primary">Options</span>
            </h2>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {pricingOptions.map((option, index) => (
                <Card key={index} className="p-6 text-center bg-brand-cream/30 border-brand-gold/20">
                  <h3 className="font-serif text-lg font-medium mb-2">{option.package}</h3>
                  <p className="text-xl font-semibold text-primary">{option.price}</p>
                </Card>
              ))}
            </div>

            <p className="text-sm text-muted-foreground italic">
              Available in Seasonal, Boho, or Garden styles
            </p>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section
        ref={whyRef}
        className={`py-16 sm:py-20 lg:py-24 bg-brand-cream/50 ${getAnimationClasses(whyVisible).className}`}
        style={getAnimationClasses(whyVisible).style}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">Why Choose Us</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light">
                Why Book <span className="italic text-primary">With Us</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyBookWithUs.map((item, index) => (
                <Card key={index} className="p-6 bg-background border-brand-gold/20">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center mb-4">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PDF Download Section */}
      <section className="py-12 sm:py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-light mb-4">
              Want All the <span className="italic text-primary">Details?</span>
            </h3>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => {
                // Placeholder - can be updated with actual PDF link
                window.open('mailto:hello@nashvilleflowermarket.com?subject=Request%20DIY%20Flower%20Menu%20PDF', '_blank');
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Full DIY Flower Menu (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        ref={ctaRef}
        className={`py-16 sm:py-20 lg:py-24 bg-brand-espresso text-primary-foreground ${getAnimationClasses(ctaVisible).className}`}
        style={getAnimationClasses(ctaVisible).style}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <Heart className="h-10 w-10 mx-auto opacity-80" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light">
              Ready to Create Something <span className="italic">Beautiful?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group" 
                onClick={handleViewSchedule}
              >
                View Workshop Schedule <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={handlePrivateWorkshop}
              >
                Plan a Private Workshop <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="pt-8 space-y-2 text-primary-foreground/80">
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                <span>615.928.8001</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@nashvilleflowermarket.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Workshops;