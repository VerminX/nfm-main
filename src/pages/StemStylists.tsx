import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Phone, Sparkles, ArrowRight } from "lucide-react";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";

const benefits = [
  { icon: Heart, title: "Your Personal Guide", description: "From consultation to event day, they know your vision inside and out." },
  { icon: Phone, title: "Always a Call Away", description: "Questions at 9pm? Text us. Nervous? We'll check in." },
  { icon: Sparkles, title: "Vision Translator", description: "We turn Pinterest inspo into plans that work with your budget." },
];

const StemStylists = () => {
  const heroAnimation = useScrollAnimation();
  const benefitsAnimation = useScrollAnimation();
  const teamAnimation = useScrollAnimation();
  const processAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-brand-cream to-background">
        <div ref={heroAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p {...getAnimationClasses(heroAnimation.isVisible, 0)} className={`text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 ${getAnimationClasses(heroAnimation.isVisible, 0).className}`}>Meet Your Team</p>
          <h1 {...getAnimationClasses(heroAnimation.isVisible, 100)} className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-light max-w-3xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 100).className}`}>
            Your Flower <span className="italic text-primary">Bestie</span> Awaits
          </h1>
          <p {...getAnimationClasses(heroAnimation.isVisible, 200)} className={`text-lg text-muted-foreground mt-6 max-w-2xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 200).className}`}>
            A Stem Stylist isn't just a florist—they're your guide from "I have no idea" to "I can't believe I made this!"
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 bg-background">
        <div ref={benefitsAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, index) => (
              <Card 
                key={b.title} 
                {...getStaggeredAnimationClasses(benefitsAnimation.isVisible, index, 0, 100)}
                className={`p-6 text-center ${getStaggeredAnimationClasses(benefitsAnimation.isVisible, index, 0, 100).className}`}
              >
                <div className="p-3 bg-brand-gold/20 rounded-full w-fit mx-auto mb-4">
                  <b.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-brand-cream">
        <div ref={teamAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div {...getAnimationClasses(teamAnimation.isVisible, 0)} className={`text-center mb-10 ${getAnimationClasses(teamAnimation.isVisible, 0).className}`}>
            <h2 className="font-serif text-3xl sm:text-4xl font-light">The <span className="italic text-primary">Dream Team</span></h2>
            <p className="text-muted-foreground mt-2">You'll be matched with a Stem Stylist who gets your style.</p>
          </div>
          
          {/* Elegant Coming Soon Card */}
          <Card {...getAnimationClasses(teamAnimation.isVisible, 100)} className={`max-w-2xl mx-auto p-8 sm:p-12 text-center bg-gradient-to-br from-brand-gold/30 via-background to-brand-cream/50 border-2 border-dashed border-accent/30 ${getAnimationClasses(teamAnimation.isVisible, 100).className}`}>
            <div className="w-20 h-20 mx-auto bg-brand-gold/20 rounded-full flex items-center justify-center mb-6">
              <Heart className="h-10 w-10 text-accent" />
            </div>
            <h3 className="font-serif text-2xl font-medium mb-3">Your Future Flower Bestie</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We're putting together something special. Our talented Stem Stylists can't wait to meet you and bring your floral vision to life.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Team profiles coming soon</span>
            </div>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div ref={processAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-3xl">
          <div {...getAnimationClasses(processAnimation.isVisible, 0)} className={`text-center mb-10 ${getAnimationClasses(processAnimation.isVisible, 0).className}`}>
            <h2 className="font-serif text-3xl sm:text-4xl font-light">How You'll Be <span className="italic text-primary">Matched</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Book", desc: "Start with a consultation" },
              { step: "02", title: "Match", desc: "We pair you with the perfect stylist" },
              { step: "03", title: "Connect", desc: "Your stylist reaches out" },
              { step: "04", title: "Create", desc: "They're with you every step" },
            ].map((item, index) => (
              <div 
                key={item.step} 
                {...getStaggeredAnimationClasses(processAnimation.isVisible, index, 100, 100)}
                className={`text-center ${getStaggeredAnimationClasses(processAnimation.isVisible, index, 100, 100).className}`}
              >
                <div className="text-3xl font-serif font-light text-accent mb-2">{item.step}</div>
                <h3 className="font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-brand-gold/20 via-brand-cream to-background">
        <div ref={ctaAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 {...getAnimationClasses(ctaAnimation.isVisible, 0)} className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light ${getAnimationClasses(ctaAnimation.isVisible, 0).className}`}>Ready to Meet Your <span className="italic text-primary">Flower Bestie</span>?</h2>
            <p {...getAnimationClasses(ctaAnimation.isVisible, 100)} className={`text-muted-foreground ${getAnimationClasses(ctaAnimation.isVisible, 100).className}`}>Book a consultation and let's start bringing your vision to life.</p>
            <Button 
              {...getAnimationClasses(ctaAnimation.isVisible, 200)}
              size="lg" 
              className={`bg-primary hover:bg-primary/90 text-primary-foreground group ${getAnimationClasses(ctaAnimation.isVisible, 200).className}`}
              onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}
            >
              Start Your Consultation <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default StemStylists;