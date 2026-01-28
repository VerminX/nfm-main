import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { ArrowRight, CheckCircle, Heart, Mail } from "lucide-react";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";

import eventsBallroomOverview from "@/assets/events-ballroom-overview.webp";
import eventsCenterpieceCandles from "@/assets/events-centerpiece-candles.webp";
import eventsFireplaceRoses from "@/assets/events-fireplace-roses.webp";
import eventsReceptionCandelabra from "@/assets/events-reception-candelabra.webp";
import eventsRiversideVenue from "@/assets/events-riverside-venue.webp";
import eventsBridalBouquet from "@/assets/events-bridal-bouquet.webp";
import eventsStudioWorkspace from "@/assets/events-studio-workspace.webp";
import eventsArrangingFlowers from "@/assets/events-arranging-flowers.webp";


const features = [
  "Brand-forward floral design + styling",
  "On-site venue walk-throughs + layout planning",
  "Delivery, setup + professional installation",
  "Scalable floral options for intimate to large-scale events",
  "Corporate gifting + client appreciation florals",
  "Custom proposals tailored to event priorities",
];

const galleryImages = [
  { src: eventsRiversideVenue, alt: "Riverside venue table setting", position: "object-center" },
  { src: eventsBridalBouquet, alt: "White bridal bouquet", position: "object-center" },
  { src: eventsStudioWorkspace, alt: "Studio workspace with pink buckets", position: "object-center" },
  { src: eventsArrangingFlowers, alt: "Woman arranging flowers in studio", position: "object-top" },
  { src: eventsCenterpieceCandles, alt: "Elegant centerpiece with candles", position: "object-center" },
  { src: eventsBallroomOverview, alt: "Grand ballroom with tall centerpieces", position: "object-center" },
];

const Events = () => {
  const heroAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const galleryAnimation = useScrollAnimation();
  const givingBackAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const handleJoyJarInquiry = () => {
    const subject = encodeURIComponent("Joy Jar Fundraiser Inquiry");
    const body = encodeURIComponent("Hi there,\n\nI'm interested in learning more about hosting a Joy Jar fundraiser for my organization.\n\nOrganization Name:\nEvent Date (if known):\nTell us about your cause:\n\nThank you!");
    window.location.href = `mailto:hello@nashvilleflowermarket.com?subject=${subject}&body=${body}`;
  };

  return (
    <PageLayout>
        {/* Hero Section */}
        <section className="py-8 lg:py-12">
          <div ref={heroAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className={`text-center max-w-3xl mx-auto mb-12 ${getAnimationClasses(heroAnimation.isVisible, 0).className}`} style={getAnimationClasses(heroAnimation.isVisible, 0).style}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
                Events & <span className="italic text-primary">Celebrations</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                From corporate gatherings and brand activations to community celebrations and private parties—we bring intentional floral design that transforms any space into something unforgettable.
              </p>
            </div>

            {/* Three Images */}
            <div className="grid md:grid-cols-3 gap-4">
              <div {...getStaggeredAnimationClasses(heroAnimation.isVisible, 0, 100)}>
                <ImageWithSkeleton
                  src={eventsBallroomOverview}
                  alt="Grand ballroom with tall floral centerpieces"
                  className="w-full h-72 lg:h-96 object-cover object-center rounded-lg"
                  containerClassName="w-full h-72 lg:h-96 rounded-lg"
                />
              </div>
              <div {...getStaggeredAnimationClasses(heroAnimation.isVisible, 1, 100)}>
                <ImageWithSkeleton
                  src={eventsCenterpieceCandles}
                  alt="Tall white rose centerpiece with candles"
                  className="w-full h-72 lg:h-96 object-cover object-center rounded-lg"
                  containerClassName="w-full h-72 lg:h-96 rounded-lg"
                />
              </div>
              <div {...getStaggeredAnimationClasses(heroAnimation.isVisible, 2, 100)}>
                <ImageWithSkeleton
                  src={eventsFireplaceRoses}
                  alt="White roses by ornate fireplace"
                  className="w-full h-72 lg:h-96 object-cover object-center rounded-lg"
                  containerClassName="w-full h-72 lg:h-96 rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-brand-cream/40">
          <div ref={featuresAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={getAnimationClasses(featuresAnimation.isVisible, 0).className} style={getAnimationClasses(featuresAnimation.isVisible, 0).style}>
                <h2 className="font-serif text-3xl sm:text-4xl font-light mb-6">
                  What We Offer
                </h2>
                <p className="text-muted-foreground mb-4">
                  Whether you're hosting a corporate retreat, annual gala, product launch, or private
                  celebration, flowers set the tone. We work with you to understand your vision, your
                  brand, and your space to create something truly memorable.
                </p>
                <p className="text-muted-foreground mb-8">
                  Our team handles everything from initial concept to final installation, ensuring
                  your event looks flawless from every angle.
                </p>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={feature} className={`flex items-start gap-3 ${getStaggeredAnimationClasses(featuresAnimation.isVisible, index, 200).className}`} style={getStaggeredAnimationClasses(featuresAnimation.isVisible, index, 200).style}>
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={getAnimationClasses(featuresAnimation.isVisible, 200).className} style={getAnimationClasses(featuresAnimation.isVisible, 200).style}>
                <ImageWithSkeleton
                  src={eventsReceptionCandelabra}
                  alt="Reception table with candelabra and green napkins"
                  className="w-full h-96 object-cover object-center rounded-lg"
                  containerClassName="w-full h-96 rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div ref={galleryAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className={`text-center mb-12 ${getAnimationClasses(galleryAnimation.isVisible, 0).className}`} style={getAnimationClasses(galleryAnimation.isVisible, 0).style}>
              <h2 className="font-serif text-3xl sm:text-4xl font-light mb-4">
                Event Gallery
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A look at some of the corporate events and private parties we've had the pleasure of designing.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className={`overflow-hidden rounded-lg ${getStaggeredAnimationClasses(galleryAnimation.isVisible, index, 100).className}`} style={getStaggeredAnimationClasses(galleryAnimation.isVisible, index, 100).style}>
                  <ImageWithSkeleton
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-80 object-cover ${image.position} hover:scale-105 transition-transform duration-500`}
                    containerClassName="w-full h-80"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Giving Back Section */}
        <section className="py-12 sm:py-16 bg-secondary/30">
          <div ref={givingBackAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <div className={`flex items-center justify-center gap-2 mb-4 ${getAnimationClasses(givingBackAnimation.isVisible, 0).className}`} style={getAnimationClasses(givingBackAnimation.isVisible, 0).style}>
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium tracking-[0.15em] uppercase text-primary">Community</span>
              </div>
              <h2 className={`font-serif text-2xl sm:text-3xl font-light mb-4 ${getAnimationClasses(givingBackAnimation.isVisible, 100).className}`} style={getAnimationClasses(givingBackAnimation.isVisible, 100).style}>
                Giving Back, Together
              </h2>
              <p className={`text-muted-foreground mb-6 ${getAnimationClasses(givingBackAnimation.isVisible, 200).className}`} style={getAnimationClasses(givingBackAnimation.isVisible, 200).style}>
                Our Joy Jar fundraisers bring communities together for a hands-on floral experience
                while supporting causes that matter. Perfect for schools, nonprofits, and community
                organizations looking to host a meaningful event.
              </p>
              <div className={getAnimationClasses(givingBackAnimation.isVisible, 300).className} style={getAnimationClasses(givingBackAnimation.isVisible, 300).style}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={handleJoyJarInquiry}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Inquire About Joy Jar Fundraisers
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-nfm-gold/20 text-center">
          <div ref={ctaAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className={`font-serif text-3xl sm:text-4xl font-light mb-4 ${getAnimationClasses(ctaAnimation.isVisible, 0).className}`} style={getAnimationClasses(ctaAnimation.isVisible, 0).style}>
              Planning an Event?
            </h2>
            <p className={`text-muted-foreground max-w-xl mx-auto mb-8 ${getAnimationClasses(ctaAnimation.isVisible, 100).className}`} style={getAnimationClasses(ctaAnimation.isVisible, 100).style}>
              Let's discuss how we can transform your space with stunning florals.
            </p>
            <div className={getAnimationClasses(ctaAnimation.isVisible, 200).className} style={getAnimationClasses(ctaAnimation.isVisible, 200).style}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}
              >
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
    </PageLayout>
  );
};

export default Events;