import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";

import fullserviceReceptionFireplace from "@/assets/fullservice-reception-fireplace.webp";
import fullserviceBridalBouquet from "@/assets/fullservice-bridal-bouquet.webp";
import fullserviceCenterpieceCandles from "@/assets/fullservice-centerpiece-candles.webp";
import fullserviceCeremonyVenue from "@/assets/fullservice-ceremony-venue.webp";
import fullserviceReceptionCandelabra from "@/assets/fullservice-reception-candelabra.webp";
import fullserviceRiversideVenue from "@/assets/fullservice-riverside-venue.webp";
import fullserviceTropicalEvent from "@/assets/fullservice-tropical-event.webp";
import fullserviceChurchAltar from "@/assets/fullservice-church-altar.webp";

const features = [
  "Personal Stem Stylist assigned to your wedding day",
  "Premium blooms curated to match your color palette and style",
  "Full design consultation + custom mood board",
  "Access to curated collection of rental pieces",
  "All florals designed for celebration (bouquets, ceremony, reception + more)",
  "Delivery + professional on-site installation",
  "Tear-down + cleanup included",
];

const galleryImages = [
  { src: fullserviceReceptionCandelabra, alt: "Elegant reception with candelabra centerpieces", position: "object-center" },
  { src: fullserviceRiversideVenue, alt: "Modern riverside venue table settings", position: "object-center" },
  { src: fullserviceTropicalEvent, alt: "Vibrant tropical outdoor event", position: "object-center" },
  { src: fullserviceChurchAltar, alt: "Classic church altar arrangement", position: "object-center" },
];

const FullService = () => {
  const heroAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const galleryAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  return (
    <PageLayout>
        {/* Hero Section - Three Images */}
        <section className="py-8 lg:py-12">
          <div ref={heroAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <div {...getStaggeredAnimationClasses(heroAnimation.isVisible, 0, 0)}>
                <ImageWithSkeleton
                  src={fullserviceReceptionFireplace}
                  alt="Elegant white roses by fireplace"
                  className="w-full h-72 lg:h-96 object-cover object-center rounded-lg"
                  containerClassName="w-full h-72 lg:h-96 rounded-lg"
                />
              </div>
              <div {...getStaggeredAnimationClasses(heroAnimation.isVisible, 1, 0)}>
                <ImageWithSkeleton
                  src={fullserviceBridalBouquet}
                  alt="Beautiful white bridal bouquet"
                  className="w-full h-72 lg:h-96 object-cover object-center rounded-lg"
                  containerClassName="w-full h-72 lg:h-96 rounded-lg"
                />
              </div>
              <div {...getStaggeredAnimationClasses(heroAnimation.isVisible, 2, 0)}>
                <ImageWithSkeleton
                  src={fullserviceCenterpieceCandles}
                  alt="Tall centerpiece with candles"
                  className="w-full h-72 lg:h-96 object-cover object-center rounded-lg"
                  containerClassName="w-full h-72 lg:h-96 rounded-lg"
                />
              </div>
            </div>

            <div className={`text-center max-w-3xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 300).className}`} style={getAnimationClasses(heroAnimation.isVisible, 300).style}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
                Luxury Wedding <span className="italic text-primary">Florals</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Elevated, timeless, and personalized florals for your wedding day. From your first consultation to the last petal placed, our team creates stunning floral designs that bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-brand-cream/40">
          <div ref={featuresAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={getAnimationClasses(featuresAnimation.isVisible, 0).className} style={getAnimationClasses(featuresAnimation.isVisible, 0).style}>
                <h2 className="font-serif text-3xl sm:text-4xl font-light mb-6">
                  What's Included
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our Full Service experience is designed for couples who want to be fully present — while we bring their floral vision to life.
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
                  src={fullserviceCeremonyVenue}
                  alt="Dramatic ceremony venue with chandelier"
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
                Our Work
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here's a glimpse of the beautiful <span className="font-medium">pieces</span> we've been honored to design.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className={`overflow-hidden rounded-lg ${getStaggeredAnimationClasses(galleryAnimation.isVisible, index, 100).className}`} style={getStaggeredAnimationClasses(galleryAnimation.isVisible, index, 100).style}>
                  <ImageWithSkeleton
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-72 object-cover ${image.position} hover:scale-105 transition-transform duration-500`}
                    containerClassName="w-full h-72"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-brand-gold/20 text-center">
          <div ref={ctaAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className={`font-serif text-3xl sm:text-4xl font-light mb-4 ${getAnimationClasses(ctaAnimation.isVisible, 0).className}`} style={getAnimationClasses(ctaAnimation.isVisible, 0).style}>
              Ready to Start Planning?
            </h2>
            <p className={`text-muted-foreground max-w-xl mx-auto mb-8 ${getAnimationClasses(ctaAnimation.isVisible, 100).className}`} style={getAnimationClasses(ctaAnimation.isVisible, 100).style}>
              Schedule a consultation and let's bring your wedding floral dreams to life.
            </p>
            <div className={getAnimationClasses(ctaAnimation.isVisible, 200).className} style={getAnimationClasses(ctaAnimation.isVisible, 200).style}>
              <Button
                size="lg"
                className="bg-brand-terracotta hover:bg-brand-terracotta/90 text-primary-foreground"
                onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
    </PageLayout>
  );
};

export default FullService;