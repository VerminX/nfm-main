import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";
import bouquetSpringColorful from "@/assets/gallery/bouquet-spring-colorful.webp";
import bouquetPeachRanunculus from "@/assets/gallery/bouquet-peach-ranunculus.webp";
import bouquetWhiteGreenery from "@/assets/gallery/bouquet-white-greenery.webp";
import bouquetIvoryEucalyptus from "@/assets/gallery/bouquet-ivory-eucalyptus.webp";
import fallArrangement from "@/assets/gallery/fall-arrangement.webp";
import workshopAction from "@/assets/workshop-action.webp";
import workshopGroupHydrangeas from "@/assets/gallery/workshop-group-hydrangeas.webp";
import workshopIntimateThree from "@/assets/gallery/workshop-intimate-three.webp";
import workshopColorfulGroup from "@/assets/gallery/workshop-colorful-group.webp";
import workshopOwlWall from "@/assets/gallery/workshop-owl-wall.webp";
import tropicalCenterpiece from "@/assets/gallery/tropical-centerpiece.webp";

const Gallery = () => {
  const heroAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation();
  const testimonialAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const galleryItems = [
    { image: fallArrangement, category: "Centerpieces", title: "Fall Harvest Arrangement" },
    { image: workshopIntimateThree, category: "Workshop", title: "Bridal Party Bouquets" },
    { image: bouquetWhiteGreenery, category: "Weddings", title: "Classic White & Greenery" },
    { image: bouquetSpringColorful, category: "Bouquets", title: "Spring Garden Mix" },
    { image: workshopAction, category: "Workshop", title: "Designers at Work" },
    { image: workshopColorfulGroup, category: "Workshop", title: "Group Design Session" },
    { image: workshopOwlWall, category: "Studio", title: "Nashville FM Design Station" },
    { image: bouquetPeachRanunculus, category: "Bouquets", title: "Peach Ranunculus Spray" },
    { image: bouquetIvoryEucalyptus, category: "Weddings", title: "Ivory Rose & Eucalyptus" },
    { image: workshopGroupHydrangeas, category: "Workshop", title: "Hydrangea Bouquet Class" },
    { image: tropicalCenterpiece, category: "Events", title: "Tropical Reception Centerpiece" },
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-brand-cream to-background">
        <div ref={heroAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p {...getAnimationClasses(heroAnimation.isVisible, 0)} className={`text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 ${getAnimationClasses(heroAnimation.isVisible, 0).className}`}>Our Work</p>
          <h1 {...getAnimationClasses(heroAnimation.isVisible, 100)} className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-light max-w-3xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 100).className}`}>
            Flowers That Feel <span className="italic text-primary">Uniquely Yours</span>
          </h1>
          <p {...getAnimationClasses(heroAnimation.isVisible, 200)} className={`text-lg text-muted-foreground mt-6 max-w-2xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 200).className}`}>
            Not cookie-cutter. Not traditional. Uniquely Nashville.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div ref={gridAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                {...getStaggeredAnimationClasses(gridAnimation.isVisible, index, 0, 80)}
                className={`group relative aspect-[4/5] overflow-hidden rounded-xl shadow-elegant hover:shadow-glow transition-all duration-500 cursor-pointer ${getStaggeredAnimationClasses(gridAnimation.isVisible, index, 0, 80).className}`}
              >
                <ImageWithSkeleton
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  containerClassName="w-full h-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-accent font-medium mb-1">{item.category}</p>
                  <h3 className="font-serif text-sm sm:text-lg font-medium text-foreground leading-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-brand-gold/20 via-brand-cream to-background">
        <div ref={testimonialAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl">
          <h2 {...getAnimationClasses(testimonialAnimation.isVisible, 0)} className={`font-serif text-3xl sm:text-4xl font-light mb-8 ${getAnimationClasses(testimonialAnimation.isVisible, 0).className}`}>What Clients <span className="italic text-primary">Say</span></h2>
          <blockquote {...getAnimationClasses(testimonialAnimation.isVisible, 100)} className={`text-base sm:text-lg text-muted-foreground italic mb-6 ${getAnimationClasses(testimonialAnimation.isVisible, 100).className}`}>
            "We were so happy with how everything turned out. The team was with us every step!"
          </blockquote>
          <div {...getAnimationClasses(testimonialAnimation.isVisible, 200)}>
            <p className="font-serif text-lg font-medium">Sarah Topp</p>
            <p className="text-sm text-muted-foreground">Bride • DIY Wedding</p>
            <div className="flex justify-center gap-1 mt-6 text-accent text-xl">★★★★★</div>
            <p className="text-sm text-muted-foreground mt-2">5.0 Google Rating</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-espresso text-primary-foreground">
        <div ref={ctaAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 {...getAnimationClasses(ctaAnimation.isVisible, 0)} className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light ${getAnimationClasses(ctaAnimation.isVisible, 0).className}`}>Create Your Own <span className="italic">Masterpiece</span></h2>
            <p {...getAnimationClasses(ctaAnimation.isVisible, 100)} className={`text-primary-foreground/90 ${getAnimationClasses(ctaAnimation.isVisible, 100).className}`}>Whether it's your wedding or a random Tuesday—let's bring your vision to life.</p>
            <div {...getAnimationClasses(ctaAnimation.isVisible, 200)} className={`flex flex-col sm:flex-row gap-3 justify-center ${getAnimationClasses(ctaAnimation.isVisible, 200).className}`}>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group" onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}>
                Start Consultation <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => window.open('https://www.google.com/maps/place/2615+Lebanon+Pike+Suite+B,+Nashville,+TN+37214', '_blank')}>
                Visit Our Studio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Gallery;
