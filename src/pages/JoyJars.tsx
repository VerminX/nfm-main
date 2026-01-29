import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { Heart, Calendar, Gift, Sparkles, Check, Truck, ArrowRight, Quote } from "lucide-react";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";
import arrangement1 from "@/assets/arrangement-1.webp";
import { getCustomerTestimonials } from "@/data/testimonials";

const JoyJars = () => {
  const heroAnimation = useScrollAnimation();
  const useCasesAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const plansAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const plans = [
    { name: "Just Because", frequency: "One-Time", price: "$45", description: "Brighten someone's day—or your own", features: ["Fresh seasonal blooms", "Signature mason jar", "Gift-ready"], popular: false },
    { name: "Weekly Joy", frequency: "Weekly", price: "$40/week", description: "Fresh flowers every week", features: ["Weekly delivery", "Rotating varieties", "Cancel anytime"], popular: true },
    { name: "Monthly Blooms", frequency: "Monthly", price: "$45/month", description: "Monthly floral happiness", features: ["Premium selection", "Free Nashville delivery", "Perfect for gifting"], popular: false },
  ];

  const useCases = [
    { title: "Hostess Gift", desc: "Order ahead, skip the extra stop." },
    { title: "Teacher Gifts", desc: "Scheduled delivery to your door." },
    { title: "Office Brightener", desc: "Weekly joy for you or a coworker." },
    { title: "Sympathy & Support", desc: "When you can't be there in person." },
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithSkeleton src={arrangement1} alt="Joy Jar" className="w-full h-full object-cover" containerClassName="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 lg:to-transparent" />
        </div>
        <div ref={heroAnimation.ref} className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <div className="max-w-2xl space-y-6">
            <div {...getAnimationClasses(heroAnimation.isVisible, 0)} className={`inline-flex items-center gap-2 px-3 py-2 bg-accent/20 backdrop-blur-sm rounded-full ${getAnimationClasses(heroAnimation.isVisible, 0).className}`}>
              <Truck className="h-4 w-4 text-accent" />
              <span className="text-xs sm:text-sm font-medium">DoorDash Delivery</span>
            </div>
            <h1 {...getAnimationClasses(heroAnimation.isVisible, 100)} className={`font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight ${getAnimationClasses(heroAnimation.isVisible, 100).className}`}>
              Fresh Flowers, <span className="italic text-primary">No Extra Stops</span>
            </h1>
            <p {...getAnimationClasses(heroAnimation.isVisible, 200)} className={`text-base sm:text-lg text-muted-foreground ${getAnimationClasses(heroAnimation.isVisible, 200).className}`}>
              Joy Jars are our signature arrangements in mason jars—delivered right to your door. Like ordering groceries, but flowers.
            </p>
            <Button {...getAnimationClasses(heroAnimation.isVisible, 300)} size="lg" className={`bg-primary hover:bg-primary/90 text-primary-foreground group ${getAnimationClasses(heroAnimation.isVisible, 300).className}`} onClick={() => window.open('https://www.doordash.com/store/nashville-flower-market-nashville-30912690/43286355/', '_blank')}>
              Order a Joy Jar <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-12 right-12 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float hidden lg:block" />
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-cream/50">
        <div ref={useCasesAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div {...getAnimationClasses(useCasesAnimation.isVisible, 0)} className={`text-center mb-10 ${getAnimationClasses(useCasesAnimation.isVisible, 0).className}`}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light">Flowers Made <span className="italic text-primary">Convenient</span></h2>
            <p className="text-muted-foreground mt-2">Life is busy. Your flowers shouldn't add stress.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {useCases.map((uc, index) => (
              <Card 
                key={uc.title} 
                {...getStaggeredAnimationClasses(useCasesAnimation.isVisible, index, 100, 100)}
                className={`p-5 bg-background ${getStaggeredAnimationClasses(useCasesAnimation.isVisible, index, 100, 100).className}`}
              >
                <h3 className="font-medium mb-1">{uc.title}</h3>
                <p className="text-sm text-muted-foreground">{uc.desc}</p>
              </Card>
            ))}
          </div>
          
          {/* Customer Testimonial */}
          <div {...getAnimationClasses(useCasesAnimation.isVisible, 500)} className={`mt-10 max-w-xl mx-auto ${getAnimationClasses(useCasesAnimation.isVisible, 500).className}`}>
            {getCustomerTestimonials().slice(0, 1).map((testimonial, index) => (
              <Card key={index} className="p-6 bg-background text-center">
                <Quote className="h-5 w-5 text-accent mx-auto mb-3" />
                <p className="text-foreground italic leading-relaxed mb-3">"{testimonial.quote}"</p>
                <p className="text-sm text-muted-foreground">— {testimonial.name}, {testimonial.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div ref={featuresAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
            {[{ icon: Sparkles, title: "Fresh & Seasonal" }, { icon: Gift, title: "Gift Ready" }, { icon: Heart, title: "Uniquely Ours" }].map((f, index) => (
              <Card 
                key={f.title} 
                {...getStaggeredAnimationClasses(featuresAnimation.isVisible, index, 0, 100)}
                className={`p-4 sm:p-6 text-center ${getStaggeredAnimationClasses(featuresAnimation.isVisible, index, 0, 100).className}`}
              >
                <div className="p-3 bg-brand-gold/20 rounded-full w-fit mx-auto mb-3">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-sm sm:text-base">{f.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-brand-cream">
        <div ref={plansAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div {...getAnimationClasses(plansAnimation.isVisible, 0)} className={`text-center mb-10 ${getAnimationClasses(plansAnimation.isVisible, 0).className}`}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light">Choose Your <span className="italic text-primary">Joy</span></h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                {...getStaggeredAnimationClasses(plansAnimation.isVisible, index, 100, 100)}
                className={`relative p-6 ${plan.popular ? 'border-2 border-brand-terracotta shadow-medium' : ''} ${getStaggeredAnimationClasses(plansAnimation.isVisible, index, 100, 100).className}`}
              >
                {plan.popular && <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">Popular</div>}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-accent">
                    <Calendar className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-wider font-medium">{plan.frequency}</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium">{plan.name}</h3>
                  <div className="text-3xl font-light">{plan.price}</div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  <ul className="space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-accent flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`} onClick={() => window.open('https://www.doordash.com/store/nashville-flower-market-nashville-30912690/43286355/', '_blank')}>
                    Order Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-espresso text-primary-foreground">
        <div ref={ctaAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <Gift {...getAnimationClasses(ctaAnimation.isVisible, 0)} className={`h-10 w-10 mx-auto ${getAnimationClasses(ctaAnimation.isVisible, 0).className}`} />
            <h2 {...getAnimationClasses(ctaAnimation.isVisible, 100)} className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light ${getAnimationClasses(ctaAnimation.isVisible, 100).className}`}>Spread Some <span className="italic">Joy</span></h2>
            <p {...getAnimationClasses(ctaAnimation.isVisible, 200)} className={`text-primary-foreground/90 ${getAnimationClasses(ctaAnimation.isVisible, 200).className}`}>Order for yourself or someone you love. Delivered fresh via DoorDash.</p>
            <Button 
              {...getAnimationClasses(ctaAnimation.isVisible, 300)}
              size="lg" 
              className={`bg-primary-foreground text-primary hover:bg-primary-foreground/90 group ${getAnimationClasses(ctaAnimation.isVisible, 300).className}`}
              onClick={() => window.open('https://www.doordash.com/store/nashville-flower-market-nashville-30912690/43286355/', '_blank')}
            >
              Order Your Joy Jar <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default JoyJars;