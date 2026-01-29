import { Phone, Heart, Sparkles, Users } from "lucide-react";
import arrangement1 from "@/assets/arrangement-1.webp";
import { useScrollAnimation, getAnimationClasses } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    icon: Users,
    title: "Your Personal Flower Bestie",
    description: "Meet your Stem Stylist—a dedicated guide who translates Pinterest dreams into seasonal reality."
  },
  {
    icon: Phone,
    title: "We Actually Answer",
    description: "Text us, call us, ask us anything. Real conversations with real people who genuinely care."
  },
  {
    icon: Sparkles,
    title: "Pinterest to Reality",
    description: "Worried your flowers won't match your vision? That's literally what we're here for."
  },
  {
    icon: Heart,
    title: "Your Way, Our Guidance",
    description: "DIY in our studio, go hybrid, or let us handle it all. Every path is a luxury experience."
  }
];

export const WhyNFM = () => {
  const animation = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-warm-cream">
      <div ref={animation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <div
            {...getAnimationClasses(animation.isVisible, 0)}
            className={`relative order-2 lg:order-1 ${getAnimationClasses(animation.isVisible, 0).className}`}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-medium max-w-md mx-auto lg:max-w-none">
              <img
                src={arrangement1}
                alt="Bright spring bouquet with roses, ranunculus, and greenery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 sm:w-48 h-32 sm:h-48 bg-blush-pink/40 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="space-y-3 sm:space-y-4">
              <p
                {...getAnimationClasses(animation.isVisible, 100)}
                className={`text-sm font-medium tracking-[0.2em] uppercase text-accent ${getAnimationClasses(animation.isVisible, 100).className}`}
              >
                The Nashville Difference
              </p>
              <h2
                {...getAnimationClasses(animation.isVisible, 200)}
                className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-foreground leading-tight ${getAnimationClasses(animation.isVisible, 200).className}`}
              >
                More Than Flowers—{" "}
                <span className="italic font-normal text-primary">
                  A True Partner
                </span>
              </h2>
              <p
                {...getAnimationClasses(animation.isVisible, 300)}
                className={`text-base sm:text-lg text-muted-foreground leading-relaxed ${getAnimationClasses(animation.isVisible, 300).className}`}
              >
                Other places hand you flowers and wish you luck. We walk alongside you from
                the first question to the final petal—your studio, your expertise, your pace.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  {...getAnimationClasses(animation.isVisible, 400 + index * 100)}
                  className={`space-y-2 p-4 rounded-xl bg-card/50 hover:bg-card border border-transparent hover:border-border ${getAnimationClasses(animation.isVisible, 400 + index * 100).className}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/20 rounded-lg flex-shrink-0">
                      <pillar.icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <h3 className="font-medium text-foreground text-sm sm:text-base">{pillar.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div
              {...getAnimationClasses(animation.isVisible, 800)}
              className={`grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-border ${getAnimationClasses(animation.isVisible, 800).className}`}
            >
              <div className="text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-light text-primary">100+</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Stem Varieties</p>
              </div>
              <div className="text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-light text-primary">500+</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Happy Couples</p>
              </div>
              <div className="text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-light text-primary">5★</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
