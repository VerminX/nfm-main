import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { Heart, Phone, Sparkles, MapPin, ArrowRight, Quote } from "lucide-react";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";
import workshopImg from "@/assets/workshop.webp";
import arrangement1 from "@/assets/arrangement-1.webp";
import { getBrideTestimonials } from "@/data/testimonials";

const About = () => {
  const heroAnimation = useScrollAnimation();
  const storyAnimation = useScrollAnimation();
  const differentiatorAnimation = useScrollAnimation();
  const valuesAnimation = useScrollAnimation();
  const testimonialAnimation = useScrollAnimation();
  const locationAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();

  const values = [
    { icon: Phone, title: "Real Conversations", description: "We answer. We text back. We love to talk flowers—and listen." },
    { icon: Heart, title: "True Partnership", description: "We don't hand you flowers and disappear. We're with you throughout." },
    { icon: Sparkles, title: "Uniquely Nashville", description: "Bold, beautiful, not traditional. Designed with intention." },
  ];

  const differentiators = ["We answer the phone", "Personal Stem Stylist", "100+ stem varieties", "DIY as luxury", "DoorDash's #1 florist", "Check-ins before events", "We redirect helpers", "Real guidance always"];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-brand-cream to-background">
        <div ref={heroAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <p {...getAnimationClasses(heroAnimation.isVisible, 0)} className={`text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 ${getAnimationClasses(heroAnimation.isVisible, 0).className}`}>About Us</p>
            <h1 {...getAnimationClasses(heroAnimation.isVisible, 100)} className={`font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight max-w-4xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 100).className}`}>
              We're With You <span className="italic text-primary">Every Petal</span> of the Way
            </h1>
            <p {...getAnimationClasses(heroAnimation.isVisible, 200)} className={`text-lg text-muted-foreground mt-6 max-w-2xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 200).className}`}>
              Real people. Real conversations. Expert guidance from consultation to celebration.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div ref={storyAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p {...getAnimationClasses(storyAnimation.isVisible, 0)} className={`text-sm font-medium tracking-[0.2em] uppercase text-accent ${getAnimationClasses(storyAnimation.isVisible, 0).className}`}>Our Story</p>
                <h2 {...getAnimationClasses(storyAnimation.isVisible, 100)} className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light ${getAnimationClasses(storyAnimation.isVisible, 100).className}`}>Not Just Another <span className="italic text-primary">Florist</span></h2>
                <div {...getAnimationClasses(storyAnimation.isVisible, 200)} className={`space-y-4 text-muted-foreground ${getAnimationClasses(storyAnimation.isVisible, 200).className}`}>
                  <p>We started with a belief: you shouldn't feel abandoned with your flowers. Too many florists hand you a quote and disappear.</p>
                  <p>We're different. We're your floral partner—studio access, expertise, and guidance at every turn.</p>
                  <p>Our team loves to talk. Call us, text us, ask us anything. We promise to pick up.</p>
                </div>
              </div>
              <div {...getAnimationClasses(storyAnimation.isVisible, 200)} className={`grid grid-cols-2 gap-4 ${getAnimationClasses(storyAnimation.isVisible, 200).className}`}>
                <ImageWithSkeleton src={arrangement1} alt="Arrangements" className="rounded-lg shadow-soft aspect-square object-cover" aspectRatio="square" containerClassName="rounded-lg shadow-soft" loading="lazy" />
                <ImageWithSkeleton src={workshopImg} alt="Workshop" className="rounded-lg shadow-soft aspect-square object-cover mt-8" aspectRatio="square" containerClassName="rounded-lg shadow-soft mt-8" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-16 sm:py-20 lg:py-24 bg-brand-cream/50">
          <div ref={differentiatorAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p {...getAnimationClasses(differentiatorAnimation.isVisible, 0)} className={`text-sm font-medium tracking-[0.2em] uppercase text-accent ${getAnimationClasses(differentiatorAnimation.isVisible, 0).className}`}>The Difference</p>
                <h2 {...getAnimationClasses(differentiatorAnimation.isVisible, 100)} className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light ${getAnimationClasses(differentiatorAnimation.isVisible, 100).className}`}>Why People <span className="italic text-primary">Choose Us</span></h2>
                <p {...getAnimationClasses(differentiatorAnimation.isVisible, 200)} className={`text-muted-foreground ${getAnimationClasses(differentiatorAnimation.isVisible, 200).className}`}>Other places hand you flowers and wish you luck. We're the opposite.</p>
                <div {...getAnimationClasses(differentiatorAnimation.isVisible, 300)} className={`grid grid-cols-2 gap-3 ${getAnimationClasses(differentiatorAnimation.isVisible, 300).className}`}>
                  {differentiators.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-sm">
                      <Sparkles className="h-3 w-3 text-accent flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card {...getAnimationClasses(differentiatorAnimation.isVisible, 200)} className={`p-6 sm:p-8 bg-background text-center ${getAnimationClasses(differentiatorAnimation.isVisible, 200).className}`}>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Trusted Partner</p>
                <h3 className="font-serif text-2xl text-primary mb-1">DoorDash's #1 Florist</h3>
                <p className="text-muted-foreground text-sm mb-6">in Nashville</p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open('https://www.doordash.com/store/nashville-flower-market-nashville-30912690/43286355/', '_blank')}>
                  Order on DoorDash
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div ref={valuesAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div {...getAnimationClasses(valuesAnimation.isVisible, 0)} className={`text-center mb-10 ${getAnimationClasses(valuesAnimation.isVisible, 0).className}`}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light">What We <span className="italic text-primary">Stand For</span></h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {values.map((v, index) => (
                <Card 
                  key={v.title} 
                  {...getStaggeredAnimationClasses(valuesAnimation.isVisible, index, 100, 100)}
                  className={`p-6 text-center ${getStaggeredAnimationClasses(valuesAnimation.isVisible, index, 100, 100).className}`}
                >
                  <div className="p-3 bg-brand-gold/20 rounded-full w-fit mx-auto mb-4">
                    <v.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-20 lg:py-24 bg-brand-cream/50">
          <div ref={testimonialAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div {...getAnimationClasses(testimonialAnimation.isVisible, 0)} className={`text-center mb-10 ${getAnimationClasses(testimonialAnimation.isVisible, 0).className}`}>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">What Brides Say</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light">Real Stories, <span className="italic text-primary">Real Love</span></h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {getBrideTestimonials().map((testimonial, index) => (
                <Card 
                  key={index} 
                  {...getStaggeredAnimationClasses(testimonialAnimation.isVisible, index, 100, 100)}
                  className={`p-6 bg-background ${getStaggeredAnimationClasses(testimonialAnimation.isVisible, index, 100, 100).className}`}
                >
                  <Quote className="h-5 w-5 text-accent mb-4" />
                  <p className="text-foreground italic leading-relaxed mb-4">"{testimonial.quote}"</p>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-brand-gold/20 via-brand-cream to-background">
          <div ref={locationAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-3xl">
            <Card {...getAnimationClasses(locationAnimation.isVisible, 0)} className={`p-8 sm:p-12 bg-background/80 backdrop-blur-sm text-center ${getAnimationClasses(locationAnimation.isVisible, 0).className}`}>
              <MapPin className="h-10 w-10 text-accent mx-auto mb-6" />
              <h3 className="font-serif text-2xl font-medium mb-4">Visit Us</h3>
              <div className="text-muted-foreground space-y-1 mb-6">
                <p>2615 Lebanon Pike, Suite B</p>
                <p>Nashville, TN 37214</p>
                <p className="text-sm">(615) 928-8001</p>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Tue–Fri: 9am–6pm | Sat: 9am–12pm</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group" onClick={() => window.open('https://www.google.com/maps/place/2615+Lebanon+Pike+Suite+B,+Nashville,+TN+37214', '_blank')}>
                  Get Directions <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}>
                  Start Consultation
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-20 lg:py-24 bg-brand-espresso text-primary-foreground">
          <div ref={statsAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[{ num: "500+", label: "Happy Couples" }, { num: "100+", label: "Stem Varieties" }, { num: "5★", label: "Google Rating" }, { num: "#1", label: "DoorDash Florist" }].map((s, index) => (
                <div 
                  key={s.label} 
                  {...getStaggeredAnimationClasses(statsAnimation.isVisible, index, 0, 100)}
                  className={`space-y-1 ${getStaggeredAnimationClasses(statsAnimation.isVisible, index, 0, 100).className}`}
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light">{s.num}</div>
                  <p className="text-sm text-primary-foreground/80">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    </PageLayout>
  );
};

export default About;