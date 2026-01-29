import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { Heart, Palette, Users, Gift, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";
import bouquetIvoryEucalyptus from "@/assets/gallery/bouquet-ivory-eucalyptus.webp";
import bouquetCoralPeach from "@/assets/gallery/bouquet-coral-peach.webp";
import workshopAction from "@/assets/workshop-action.webp";
import fallArrangement from "@/assets/gallery/fall-arrangement.webp";

const services = [
  {
    icon: Heart,
    title: "Wedding Flowers",
    description: "Your Stem Stylist guides you from first question to final bouquet toss. DIY alongside experts, go hybrid, or let us handle everything.",
    features: ["Personal Stem Stylist", "Pinterest-to-reality translation", "DIY, hybrid, or full-service", "We can redirect overeager helpers"],
    image: bouquetIvoryEucalyptus,
    link: "/wedding-flowers",
  },
  {
    icon: Palette,
    title: "Custom Bouquets",
    description: "Hand-pick premium blooms in our studio with expert guidance, or order for delivery. Either way, something uniquely yours.",
    features: ["100+ stem varieties", "Expert guidance available", "Same-day creation", "DoorDash delivery"],
    image: bouquetCoralPeach,
    link: "/custom-bouquets",
  },
  {
    icon: Users,
    title: "Workshops",
    description: "Grab your crew, sip some bubbly, and learn floral design while making memories you'll actually remember.",
    features: ["Bridal parties", "Team building", "Private events", "All supplies included"],
    image: workshopAction,
    link: "/workshops",
  },
  {
    icon: Gift,
    title: "Joy Jars",
    description: "Fresh flowers in a jar—delivered. Hostess gift without the extra stop. Teacher gifts to your door. Tuesday mood boost.",
    features: ["DoorDash delivery", "Schedule ahead", "Perfect for gifts", "Subscription options"],
    image: fallArrangement,
    link: "/joy-jars",
  },
];

export const Services = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} id="services" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <p
            className={`text-sm font-medium tracking-[0.2em] uppercase text-accent transition-all duration-700 ease-out ${getAnimationClasses(isVisible, 0).className}`}
            {...getAnimationClasses(isVisible, 0)}
          >
            What We Do
          </p>
          <h2
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-foreground leading-tight transition-all duration-700 ease-out ${getAnimationClasses(isVisible, 100).className}`}
            {...getAnimationClasses(isVisible, 100)}
          >
            Four Ways to{" "}
            <span className="italic font-normal text-primary">Create Beauty</span>
          </h2>
          <p
            className={`text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ease-out ${getAnimationClasses(isVisible, 200).className}`}
            {...getAnimationClasses(isVisible, 200)}
          >
            Whether it's your wedding day or a random Tuesday, we've got a path that fits.
            Every option comes with expert guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group overflow-hidden bg-card border-border hover:shadow-medium transition-all duration-700 ease-out ${getStaggeredAnimationClasses(isVisible, index, 300, 150).className}`}
              {...getStaggeredAnimationClasses(isVisible, index, 300, 150)}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <ImageWithSkeleton
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  containerClassName="w-full h-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 sm:space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full mt-2 sm:mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn text-sm"
                  onClick={() => navigate(service.link)}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 sm:mt-16 text-center transition-all duration-700 ease-out ${getAnimationClasses(isVisible, 900).className}`}
          {...getAnimationClasses(isVisible, 900)}
        >
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Not sure which path is right for you? Let's figure it out together.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 sm:px-8"
            onClick={() => window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank')}
          >
            Start Your Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
