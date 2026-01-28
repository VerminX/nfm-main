import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { Check, Heart, Sparkles, Users, Phone, Shield, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";
import weddingHero from "@/assets/wedding-hero.webp";
import arrangement1 from "@/assets/arrangement-1.webp";
import arrangement2 from "@/assets/arrangement-2.webp";

const WeddingFlowers = () => {
  const navigate = useNavigate();
  const fearsAnimation = useScrollAnimation();
  const tiersAnimation = useScrollAnimation();
  const processAnimation = useScrollAnimation();
  const faqAnimation = useScrollAnimation();
  const testimonialAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const fears = [
    {
      icon: Sparkles,
      title: "Worried It Won't Look Like Pinterest?",
      description: "That's literally what we're here for. Your Stem Stylist translates inspo into seasonal blooms that bring your vision to life.",
    },
    {
      icon: Users,
      title: "What If My Friends Mess It Up?",
      description: "We can be the bad guy. Your Stem Stylist redirects well-meaning helpers while protecting your vision.",
    },
    {
      icon: Phone,
      title: "Will Someone Actually Answer?",
      description: "Yes. Real conversations with real people who care. Text us, call us, ask us anything.",
    },
    {
      icon: Shield,
      title: "What If I Have No Floral Skills?",
      description: "That's what your Stem Stylist is for. They guide every step so you're never wondering what's next.",
    },
  ];

  const tiers = [
    {
      name: "DIY Experience",
      tagline: "Design alongside experts",
      description: "Create your wedding flowers in our studio with your Stem Stylist guiding every step. A luxury experience, not a budget alternative.",
      features: ["Personal Stem Stylist", "Full studio access", "Expert guidance", "Create with loved ones"],
    },
    {
      name: "Hybrid",
      tagline: "Best of both worlds",
      description: "We create your most important pieces while you and your crew handle the rest with our guidance.",
      features: ["Professional bridal bouquet", "Ceremony arrangements", "DIY station for extras", "Full consultation"],
      popular: true,
    },
    {
      name: "Full-Service",
      tagline: "We've got every petal",
      description: "Sit back and let us handle everything. From consultation to installation, you're covered.",
      features: ["Complete design", "Day-of delivery & setup", "Dedicated designer", "Unlimited revisions"],
    },
  ];

  const faqs = [
    {
      question: "What if I can't see exactly what my flowers will look like?",
      answer: "Your Stem Stylist walks you through seasonal options and describes the look in detail. Many brides say the result is even better than imagined.",
    },
    {
      question: "How quickly do you respond to quotes?",
      answer: "Currently 1-2 weeks for formal quotes. Book a consultation for faster personal attention.",
    },
    {
      question: "What if someone in my party doesn't do a good job?",
      answer: "Your Stem Stylist gently redirects helpers while protecting your vision. We can be the bad guy so you don't have to.",
    },
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithSkeleton src={weddingHero} alt="Wedding ceremony with floral centerpieces" className="w-full h-full object-cover" containerClassName="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 lg:to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-accent/20 backdrop-blur-sm rounded-full opacity-0 animate-fade-in">
              <Heart className="h-4 w-4 text-accent" />
              <span className="text-xs sm:text-sm font-medium">Your Flower Bestie Awaits</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Worried Your Flowers Won't Look Like{" "}
              <span className="italic text-primary">Pinterest</span>?
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
              We've got you. Your Stem Stylist guides you from first question to final bouquet toss.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group opacity-0 animate-fade-in"
              style={{ animationDelay: '300ms' }}
              onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}
            >
              Start Your Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-12 right-12 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float hidden lg:block" />
      </section>

      {/* Fears */}
      <section className="py-16 sm:py-20 lg:py-24 bg-warm-cream">
        <div ref={fearsAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div {...getAnimationClasses(fearsAnimation.isVisible, 0)} className={`text-center max-w-3xl mx-auto mb-12 ${getAnimationClasses(fearsAnimation.isVisible, 0).className}`}>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">We Hear You</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light">
              Your Fears? <span className="italic text-primary">We've Got Answers</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {fears.map((fear, index) => (
              <Card 
                key={fear.title} 
                {...getStaggeredAnimationClasses(fearsAnimation.isVisible, index, 100, 100)}
                className={`p-6 bg-background hover:shadow-medium transition-all ${getStaggeredAnimationClasses(fearsAnimation.isVisible, index, 100, 100).className}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blush-pink rounded-full flex-shrink-0">
                    <fear.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">{fear.title}</h3>
                    <p className="text-sm text-muted-foreground">{fear.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div ref={tiersAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div {...getAnimationClasses(tiersAnimation.isVisible, 0)} className={`text-center max-w-3xl mx-auto mb-12 ${getAnimationClasses(tiersAnimation.isVisible, 0).className}`}>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">Three Paths</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light">
              Every Option Is <span className="italic text-primary">Elevated</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {tiers.map((tier, index) => (
              <Card 
                key={tier.name} 
                {...getStaggeredAnimationClasses(tiersAnimation.isVisible, index, 100, 100)}
                className={`relative p-6 ${tier.popular ? 'border-2 border-primary shadow-medium' : ''} ${getStaggeredAnimationClasses(tiersAnimation.isVisible, index, 100, 100).className}`}
              >
                {tier.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-medium">{tier.name}</h3>
                    <p className="text-accent text-sm font-medium">{tier.tagline}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                  <ul className="space-y-2">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-accent flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${tier.popular ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}
                    onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}
                  >
                    Start Consultation
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-warm-cream">
        <div ref={processAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p {...getAnimationClasses(processAnimation.isVisible, 0)} className={`text-sm font-medium tracking-[0.2em] uppercase text-accent ${getAnimationClasses(processAnimation.isVisible, 0).className}`}>Meet Your Guide</p>
              <h2 {...getAnimationClasses(processAnimation.isVisible, 100)} className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light ${getAnimationClasses(processAnimation.isVisible, 100).className}`}>
                Your Personal <span className="italic text-primary">Stem Stylist</span>
              </h2>
              <p {...getAnimationClasses(processAnimation.isVisible, 200)} className={`text-muted-foreground ${getAnimationClasses(processAnimation.isVisible, 200).className}`}>
                A Stem Stylist isn't just a florist—they're your flower bestie who knows your vision inside and out.
              </p>
              <ul {...getAnimationClasses(processAnimation.isVisible, 300)} className={`space-y-3 ${getAnimationClasses(processAnimation.isVisible, 300).className}`}>
                {["Translates Pinterest to seasonal blooms", "Guides your DIY sessions", "Checks in before your big day", "Day-of support via text"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button {...getAnimationClasses(processAnimation.isVisible, 400)} variant="outline" className={`border-primary text-primary hover:bg-primary hover:text-primary-foreground ${getAnimationClasses(processAnimation.isVisible, 400).className}`} onClick={() => navigate('/stem-stylists')}>
                Meet Our Stem Stylists
              </Button>
            </div>
            <div {...getAnimationClasses(processAnimation.isVisible, 200)} className={`grid grid-cols-2 gap-4 ${getAnimationClasses(processAnimation.isVisible, 200).className}`}>
              <ImageWithSkeleton src={arrangement1} alt="Wedding bouquet" className="rounded-lg shadow-soft aspect-square object-cover" aspectRatio="square" containerClassName="rounded-lg shadow-soft" loading="lazy" />
              <ImageWithSkeleton src={arrangement2} alt="Centerpiece" className="rounded-lg shadow-soft aspect-square object-cover mt-8" aspectRatio="square" containerClassName="rounded-lg shadow-soft mt-8" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div ref={faqAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-3xl">
          <h2 {...getAnimationClasses(faqAnimation.isVisible, 0)} className={`font-serif text-3xl sm:text-4xl font-light text-center mb-10 ${getAnimationClasses(faqAnimation.isVisible, 0).className}`}>
            Common <span className="italic text-primary">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={faq.question} 
                {...getStaggeredAnimationClasses(faqAnimation.isVisible, index, 100, 100)}
                className={`p-5 ${getStaggeredAnimationClasses(faqAnimation.isVisible, index, 100, 100).className}`}
              >
                <h3 className="font-medium mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blush-pink via-warm-cream to-background">
        <div ref={testimonialAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <Card {...getAnimationClasses(testimonialAnimation.isVisible, 0)} className={`max-w-3xl mx-auto p-8 sm:p-12 bg-background/80 backdrop-blur-sm text-center ${getAnimationClasses(testimonialAnimation.isVisible, 0).className}`}>
            <Sparkles className="h-10 w-10 text-accent mx-auto mb-6" />
            <blockquote className="text-base sm:text-lg text-muted-foreground italic leading-relaxed mb-6">
              "This is such a special and unique experience. We saved thousands AND made memories with friends and family. The team was with us every step."
            </blockquote>
            <p className="font-serif text-lg font-medium">Sarah Topp</p>
            <p className="text-sm text-muted-foreground">Bride • DIY Experience</p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
        <div ref={ctaAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 {...getAnimationClasses(ctaAnimation.isVisible, 0)} className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light ${getAnimationClasses(ctaAnimation.isVisible, 0).className}`}>
              Ready to Talk <span className="italic">Wedding Flowers</span>?
            </h2>
            <p {...getAnimationClasses(ctaAnimation.isVisible, 100)} className={`text-primary-foreground/90 ${getAnimationClasses(ctaAnimation.isVisible, 100).className}`}>
              We'd love to hear your vision. Let's find the perfect path for you.
            </p>
            <Button 
              {...getAnimationClasses(ctaAnimation.isVisible, 200)}
              size="lg" 
              className={`bg-primary-foreground text-primary hover:bg-primary-foreground/90 group ${getAnimationClasses(ctaAnimation.isVisible, 200).className}`}
              onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}
            >
              Start Your Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WeddingFlowers;