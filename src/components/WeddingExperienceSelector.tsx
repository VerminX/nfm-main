import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { ArrowRight, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";
import diyWeddingStudio from "@/assets/diy-wedding-studio.webp";
import fullServiceWedding from "@/assets/full-service-wedding.webp";

const experiences = [
  {
    id: "diy",
    image: diyWeddingStudio,
    title: "DIY",
    subtitle: "Elevated Experience",
    description:
      "Design alongside our experts in our beautiful studio with access to premium blooms and professional guidance.",
    cta: "Explore DIY",
    link: "/weddings/diy",
  },
  {
    id: "full-service",
    image: fullServiceWedding,
    title: "Full Service",
    subtitle: "Complete Luxury",
    description:
      "We handle everything from design to delivery. Focus on your day while we create floral magic.",
    cta: "Explore Full Service",
    link: "/weddings/full-service",
  },
];

export const WeddingExperienceSelector = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-gold/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12" ref={ref}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
            Choose Your Wedding Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            DIY or Professionally Designed Flowers — we've got you covered
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-8">
          {experiences.map((experience, index) => (
            <Card
              key={experience.id}
              className={`group overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-lg hover:border-primary/30 ${getStaggeredAnimationClasses(isVisible, index, 0, 150).className}`}
              {...getStaggeredAnimationClasses(isVisible, index, 0, 150)}
              onClick={() => navigate(experience.link)}
            >
              {/* Large Image at Top */}
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithSkeleton
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  containerClassName="w-full h-full"
                />
              </div>

              {/* Content Below Image */}
              <div className="p-5 lg:p-6">
                <div className="mb-3">
                  <h3 className="font-serif text-2xl font-medium">{experience.title}</h3>
                  <p className="text-sm text-muted-foreground">{experience.subtitle}</p>
                </div>

                <p className="text-muted-foreground mb-5">{experience.description}</p>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                >
                  {experience.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Help Me Decide Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-brand-terracotta hover:bg-brand-terracotta/90 text-white px-8 py-6 text-lg"
            onClick={() => navigate("/weddings/help-me-decide")}
          >
            <HelpCircle className="mr-2 h-5 w-5" />
            Help Me Decide
          </Button>
        </div>
      </div>
    </section>
  );
};
