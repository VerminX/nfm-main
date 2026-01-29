import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { Palette, Clock, Gift, Sparkles, Truck, ArrowRight } from "lucide-react";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";
import customMaking from "@/assets/custom-bouquet-making.webp";
import arrangement1 from "@/assets/arrangement-1.webp";
import arrangement2 from "@/assets/arrangement-2.webp";

const CustomBouquets = () => {
  const heroAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const deliveryAnimation = useScrollAnimation();
  const occasionsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const features = [
    { icon: Palette, title: "100+ Stem Varieties", description: "Blooms you won't find at traditional florists." },
    { icon: Sparkles, title: "Uniquely Nashville", description: "Bold, beautiful, not traditional. Designed with intention." },
    { icon: Clock, title: "In-Studio or Delivered", description: "Shop our cooler or order via DoorDash." },
    { icon: Gift, title: "Gift-Ready", description: "Beautiful wrapping included." },
  ];

  const occasions = ["Birthday", "Anniversary", "Just Because", "Sympathy", "Hostess Gift", "Teacher Appreciation", "Thank You", "Romantic Gesture"];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithSkeleton src={customMaking} alt="Custom flower bouquets" className="w-full h-full object-cover" containerClassName="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 lg:to-transparent" />
        </div>
        <div ref={heroAnimation.ref} className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <div className="max-w-2xl space-y-6">
            <div {...getAnimationClasses(heroAnimation.isVisible, 0)} className={`inline-flex items-center gap-2 px-3 py-2 bg-accent/20 backdrop-blur-sm rounded-full ${getAnimationClasses(heroAnimation.isVisible, 0).className}`}>
              <Truck className="h-4 w-4 text-accent" />
              <span className="text-xs sm:text-sm font-medium">Now on DoorDash</span>
            </div>
            <h1 {...getAnimationClasses(heroAnimation.isVisible, 100)} className={`font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight ${getAnimationClasses(heroAnimation.isVisible, 100).className}`}>
              Fresh Flowers, <span className="italic text-primary">Your Way</span>
            </h1>
            <p {...getAnimationClasses(heroAnimation.isVisible, 200)} className={`text-base sm:text-lg text-muted-foreground ${getAnimationClasses(heroAnimation.isVisible, 200).className}`}>
              Hand-pick premium blooms in our studio or have a beautiful arrangement delivered. Not cookie-cutter.
            </p>
            <div {...getAnimationClasses(heroAnimation.isVisible, 300)} className={`flex flex-col sm:flex-row gap-3 ${getAnimationClasses(heroAnimation.isVisible, 300).className}`}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group" onClick={() => window.open('https://www.doordash.com/store/nashville-flower-market-nashville-30912690/43286355/', '_blank')}>
                Order for Delivery <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.open('https://www.google.com/maps/place/2615+Lebanon+Pike+Suite+B,+Nashville,+TN+37214', '_blank')}>
                Visit Our Studio
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-12 right-12 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float hidden lg:block" />
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-cream/50">
        <div ref={featuresAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div {...getAnimationClasses(featuresAnimation.isVisible, 0)} className={`text-center mb-12 ${getAnimationClasses(featuresAnimation.isVisible, 0).className}`}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light">Why We're <span className="italic text-primary">Different</span></h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((f, index) => (
              <Card 
                key={f.title} 
                {...getStaggeredAnimationClasses(featuresAnimation.isVisible, index, 100, 100)}
                className={`p-4 sm:p-6 text-center bg-background ${getStaggeredAnimationClasses(featuresAnimation.isVisible, index, 100, 100).className}`}
              >
                <div className="p-3 bg-brand-gold/20 rounded-full w-fit mx-auto mb-3">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-sm sm:text-base mb-1">{f.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{f.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div ref={deliveryAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p {...getAnimationClasses(deliveryAnimation.isVisible, 0)} className={`text-sm font-medium tracking-[0.2em] uppercase text-accent ${getAnimationClasses(deliveryAnimation.isVisible, 0).className}`}>DoorDash Delivery</p>
              <h2 {...getAnimationClasses(deliveryAnimation.isVisible, 100)} className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light ${getAnimationClasses(deliveryAnimation.isVisible, 100).className}`}>
                Flowers Delivered <span className="italic text-primary">Fresh</span>
              </h2>
              <p {...getAnimationClasses(deliveryAnimation.isVisible, 200)} className={`text-muted-foreground ${getAnimationClasses(deliveryAnimation.isVisible, 200).className}`}>
                We've partnered with DoorDash for almost a year. We know the Dashers and package for safe, beautiful delivery.
              </p>
              <ul {...getAnimationClasses(deliveryAnimation.isVisible, 300)} className={`space-y-2 text-sm text-muted-foreground ${getAnimationClasses(deliveryAnimation.isVisible, 300).className}`}>
                {["Photo before it ships", "Careful packaging", "Trusted Dashers", "Same-day available"].map((item) => (
                  <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />{item}</li>
                ))}
              </ul>
              <Button {...getAnimationClasses(deliveryAnimation.isVisible, 400)} size="lg" className={`bg-primary hover:bg-primary/90 text-primary-foreground group ${getAnimationClasses(deliveryAnimation.isVisible, 400).className}`} onClick={() => window.open('https://www.doordash.com/store/nashville-flower-market-nashville-30912690/43286355/', '_blank')}>
                Order on DoorDash <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div {...getAnimationClasses(deliveryAnimation.isVisible, 200)} className={`grid grid-cols-2 gap-4 ${getAnimationClasses(deliveryAnimation.isVisible, 200).className}`}>
              <ImageWithSkeleton src={arrangement1} alt="Bouquet" className="rounded-lg shadow-soft aspect-square object-cover" aspectRatio="square" containerClassName="rounded-lg shadow-soft" loading="lazy" />
              <ImageWithSkeleton src={arrangement2} alt="Flowers" className="rounded-lg shadow-soft aspect-square object-cover mt-8" aspectRatio="square" containerClassName="rounded-lg shadow-soft mt-8" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-cream/50">
        <div ref={occasionsAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div {...getAnimationClasses(occasionsAnimation.isVisible, 0)} className={`text-center mb-10 ${getAnimationClasses(occasionsAnimation.isVisible, 0).className}`}>
            <h2 className="font-serif text-3xl sm:text-4xl font-light">Perfect for <span className="italic text-primary">Any Occasion</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {occasions.map((o, index) => (
              <Card 
                key={o} 
                {...getStaggeredAnimationClasses(occasionsAnimation.isVisible, index, 100, 50)}
                className={`p-4 bg-background text-center ${getStaggeredAnimationClasses(occasionsAnimation.isVisible, index, 100, 50).className}`}
              >
                <span className="text-sm font-medium">{o}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-espresso text-primary-foreground">
        <div ref={ctaAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 {...getAnimationClasses(ctaAnimation.isVisible, 0)} className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light ${getAnimationClasses(ctaAnimation.isVisible, 0).className}`}>Ready for <span className="italic">Beautiful Blooms</span>?</h2>
            <p {...getAnimationClasses(ctaAnimation.isVisible, 100)} className={`text-primary-foreground/90 ${getAnimationClasses(ctaAnimation.isVisible, 100).className}`}>Order for delivery or visit us in studio—no appointment needed.</p>
            <div {...getAnimationClasses(ctaAnimation.isVisible, 200)} className={`flex flex-col sm:flex-row gap-3 justify-center ${getAnimationClasses(ctaAnimation.isVisible, 200).className}`}>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" onClick={() => window.open('https://www.doordash.com/store/nashville-flower-market-nashville-30912690/43286355/', '_blank')}>Order on DoorDash</Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => window.open('https://www.google.com/maps/place/2615+Lebanon+Pike+Suite+B,+Nashville,+TN+37214', '_blank')}>Get Directions</Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CustomBouquets;