import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";

import diyGroupWorkshop from "@/assets/diy-group-workshop.webp";
import studioFlowers from "@/assets/studio-flowers.webp";
import diyGreeneryWork from "@/assets/diy-greenery-work.webp";
import diyStudioWorkspace from "@/assets/diy-studio-workspace.webp";
import diyBrideColorful from "@/assets/diy-bride-colorful.webp";
import diyFiveBridesmaids from "@/assets/diy-five-bridesmaids.webp";
import fallArrangement from "@/assets/gallery/fall-arrangement.webp";
import bouquetRomanticPink from "@/assets/gallery/bouquet-romantic-pink.webp";
import bouquetIvoryEucalyptus from "@/assets/gallery/bouquet-ivory-eucalyptus.webp";
import diyGroupGreenery from "@/assets/diy-group-greenery.webp";

const features = [
  "Personal Petal Planner to help curate your flower vision",
  "Premium blooms sourced and prepped for you",
  "Full access to our studio + tools",
  "Stem Stylist support on design day",
  "Hybrid option available: we design your focal pieces (bridal, groom, special items), and your crew DIYs the rest",
];

const galleryImages = [
  { src: diyBrideColorful, alt: "Bride with colorful cascading bouquet", position: "object-top" },
  { src: diyFiveBridesmaids, alt: "Five bridesmaids with white bouquets", position: "object-top" },
  { src: fallArrangement, alt: "Fall DIY arrangement", position: "object-center" },
  { src: bouquetRomanticPink, alt: "Romantic pink DIY design", position: "object-center" },
  { src: bouquetIvoryEucalyptus, alt: "Ivory and eucalyptus bouquet", position: "object-center" },
  { src: diyGroupGreenery, alt: "Wedding party with greenery wall", position: "object-[center_20%]" },
];

const DIY = () => {
  const heroAnimation = useScrollAnimation();
  const descriptionAnimation = useScrollAnimation();
  const galleryAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  return (
    <PageLayout>
        {/* Hero Section */}
        <section className="py-8 lg:py-12">
          <div ref={heroAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className={`text-center max-w-3xl mx-auto mb-12 ${getAnimationClasses(heroAnimation.isVisible, 0).className}`} style={getAnimationClasses(heroAnimation.isVisible, 0).style}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
                Our DIY Wedding Flower <span className="italic text-primary">Experience</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Our DIY Wedding Flower Experience is made for creative brides who want to be hands-on with their wedding florals — without feeling overwhelmed.
              </p>
            </div>

            {/* Three Images */}
            <div className="grid md:grid-cols-3 gap-4">
              <div {...getStaggeredAnimationClasses(heroAnimation.isVisible, 0, 100)}>
                <ImageWithSkeleton
                  src={diyGroupWorkshop}
                  alt="Group DIY workshop in studio"
                  className="w-full h-72 lg:h-96 object-cover object-top rounded-lg"
                  containerClassName="w-full h-72 lg:h-96 rounded-lg"
                />
              </div>
              <div {...getStaggeredAnimationClasses(heroAnimation.isVisible, 1, 100)}>
                <ImageWithSkeleton
                  src={studioFlowers}
                  alt="Fresh flowers in studio"
                  className="w-full h-72 lg:h-96 object-cover object-center rounded-lg"
                  containerClassName="w-full h-72 lg:h-96 rounded-lg"
                />
              </div>
              <div {...getStaggeredAnimationClasses(heroAnimation.isVisible, 2, 100)}>
                <ImageWithSkeleton
                  src={diyGreeneryWork}
                  alt="Creating greenery arrangements"
                  className="w-full h-72 lg:h-96 object-cover object-top rounded-lg"
                  containerClassName="w-full h-72 lg:h-96 rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 bg-brand-cream/40">
          <div ref={descriptionAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={getAnimationClasses(descriptionAnimation.isVisible, 0).className} style={getAnimationClasses(descriptionAnimation.isVisible, 0).style}>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium tracking-wide uppercase text-accent">Elevated Experience</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-light mb-6">
                  This Isn't "Figure It Out Yourself" DIY
                </h2>
                <p className="text-muted-foreground mb-4">
                  This isn't the kind of DIY where you're left to "figure it out." It's a curated, feel-good experience inside our professional studio, with premium blooms, all the tools you need, and our Stem Stylists right there to support you as you design.
                </p>
                <p className="text-muted-foreground mb-8">
                  You'll leave with florals that feel personal, elevated, and totally wedding-ready — designed by you, with a little Nashville Flower Market magic sprinkled in.
                </p>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={feature} className={`flex items-start gap-3 ${getStaggeredAnimationClasses(descriptionAnimation.isVisible, index, 200).className}`} style={getStaggeredAnimationClasses(descriptionAnimation.isVisible, index, 200).style}>
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={getAnimationClasses(descriptionAnimation.isVisible, 200).className} style={getAnimationClasses(descriptionAnimation.isVisible, 200).style}>
                <ImageWithSkeleton
                  src={diyStudioWorkspace}
                  alt="Studio workspace with pink flower buckets"
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
                DIY Creations
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See what our DIY brides have designed in our studio. Every piece is one-of-a-kind.
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

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-brand-gold/20 text-center">
          <div ref={ctaAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className={`font-serif text-3xl sm:text-4xl font-light mb-4 ${getAnimationClasses(ctaAnimation.isVisible, 0).className}`} style={getAnimationClasses(ctaAnimation.isVisible, 0).style}>
              Ready to create?
            </h2>
            <p className={`text-muted-foreground max-w-xl mx-auto mb-8 ${getAnimationClasses(ctaAnimation.isVisible, 100).className}`} style={getAnimationClasses(ctaAnimation.isVisible, 100).style}>
              Schedule a consultation and let's plan your DIY wedding flower experience together.
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

export default DIY;