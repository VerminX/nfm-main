import { PageLayout } from "@/components/layout/PageLayout";
import { WeddingExperienceSelector } from "@/components/WeddingExperienceSelector";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { ArrowRight, Heart, Users, Building, Sparkles } from "lucide-react";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";
import weddingHero from "@/assets/wedding-hero.webp";

const eventTypes = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Your big day deserves flowers as special as your love story. From intimate elopements to grand celebrations.",
  },
  {
    icon: Building,
    title: "Corporate Events",
    description: "Elevate your brand with stunning florals. Product launches, galas, conferences, and more.",
  },
  {
    icon: Users,
    title: "Private Parties",
    description: "Birthdays, anniversaries, showers, and celebrations that call for something beautiful.",
  },
  {
    icon: Sparkles,
    title: "Special Occasions",
    description: "Holiday gatherings, memorial services, or any moment that deserves fresh blooms.",
  },
];

const WeddingsEvents = () => {
  const heroAnimation = useScrollAnimation();
  const eventTypesAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithSkeleton
            src={weddingHero}
            alt="Beautiful wedding floral arrangement"
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div ref={heroAnimation.ref} className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <div className="max-w-2xl space-y-6">
            <p {...getAnimationClasses(heroAnimation.isVisible, 0)} className={`text-sm font-medium tracking-[0.2em] uppercase text-accent ${getAnimationClasses(heroAnimation.isVisible, 0).className}`}>
              Weddings + Events
            </p>
            <h1 {...getAnimationClasses(heroAnimation.isVisible, 100)} className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] ${getAnimationClasses(heroAnimation.isVisible, 100).className}`}>
              Your Vision,{" "}
              <span className="italic text-primary">Our Expertise</span>
            </h1>
            <p {...getAnimationClasses(heroAnimation.isVisible, 200)} className={`text-lg text-muted-foreground max-w-xl ${getAnimationClasses(heroAnimation.isVisible, 200).className}`}>
              Whether you dream of designing alongside our experts or want us to handle every petal, we'll make your floral vision bloom.
            </p>
            <div {...getAnimationClasses(heroAnimation.isVisible, 300)} className={getAnimationClasses(heroAnimation.isVisible, 300).className}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}
              >
                Start Your Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Experience Selector */}
      <WeddingExperienceSelector />

      {/* Event Types */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div ref={eventTypesAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <p {...getAnimationClasses(eventTypesAnimation.isVisible, 0)} className={`text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 ${getAnimationClasses(eventTypesAnimation.isVisible, 0).className}`}>
              We Design For
            </p>
            <h2 {...getAnimationClasses(eventTypesAnimation.isVisible, 100)} className={`font-serif text-3xl sm:text-4xl font-light ${getAnimationClasses(eventTypesAnimation.isVisible, 100).className}`}>
              Every <span className="italic text-primary">Special Moment</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, index) => (
              <Card
                key={event.title}
                {...getStaggeredAnimationClasses(eventTypesAnimation.isVisible, index, 200, 100)}
                className={`p-6 text-center hover:shadow-medium transition-all ${getStaggeredAnimationClasses(eventTypesAnimation.isVisible, index, 200, 100).className}`}
              >
                <div className="mx-auto w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <event.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-20 bg-warm-cream">
        <div ref={testimonialsAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p {...getAnimationClasses(testimonialsAnimation.isVisible, 0)} className={`text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6 ${getAnimationClasses(testimonialsAnimation.isVisible, 0).className}`}>
              From Our Couples
            </p>
            <blockquote {...getAnimationClasses(testimonialsAnimation.isVisible, 100)} className={`font-serif text-2xl sm:text-3xl font-light italic text-foreground mb-6 ${getAnimationClasses(testimonialsAnimation.isVisible, 100).className}`}>
              "They made me feel like my wedding was the only one that mattered. The flowers were beyond anything I could have imagined."
            </blockquote>
            <p {...getAnimationClasses(testimonialsAnimation.isVisible, 200)} className={`text-muted-foreground ${getAnimationClasses(testimonialsAnimation.isVisible, 200).className}`}>
              — Sarah & Michael, Fall Wedding 2024
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-light mb-4">
            Ready to Start <span className="italic text-primary">Planning?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Book a free consultation and let's bring your floral vision to life together.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}
          >
            Book Your Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default WeddingsEvents;