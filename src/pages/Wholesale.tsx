import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { Refrigerator, Palette, Users, Clock, Flower2, Wrench, Sparkles } from "lucide-react";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";
import { ZohoForm } from "@/components/ZohoForm";

const features = [
  { icon: Flower2, title: "FLOWERS!", description: "Yes, real flowers. Design right next to the most unreal cooler in Nashville—so you can pull blooms, grab supplies, and create it all in one place (no extra stops, no chaos)." },
  { icon: Refrigerator, title: "Cooler Space", description: "Keep your blooms hydrated, fresh, and wedding-day ready. Cooler access is reserved for designs created on-site using flowers purchased from Nashville Flower Market." },
  { icon: Wrench, title: "Design Stations", description: "Fully equipped workspaces with pro tools and plenty of room to create." },
  { icon: Users, title: "Community", description: "A creative space where we support each other and celebrate the process." },
  { icon: Clock, title: "Flexible Access", description: "Book time when you need it with 24-hour access, so you can design on your schedule—day, night, or last-minute." },
];

const Wholesale = () => {
  const heroAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const kitchenAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-warm-cream to-background">
        <div ref={heroAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p {...getAnimationClasses(heroAnimation.isVisible, 0)} className={`text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 ${getAnimationClasses(heroAnimation.isVisible, 0).className}`}>For Freelance Florists & Designers</p>
          <h1 {...getAnimationClasses(heroAnimation.isVisible, 100)} className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-light max-w-4xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 100).className}`}>
            A Studio That Works <span className="italic text-primary">As Hard As You Do</span>
          </h1>
          <p {...getAnimationClasses(heroAnimation.isVisible, 200)} className={`text-lg text-muted-foreground mt-6 max-w-2xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 200).className}`}>
            A professional floral workspace without the lease commitment — complete with cooler space, design stations, and room to create without taking over your kitchen or garage.
          </p>
        </div>
      </section>

      {/* Your Space to Create Features */}
      <section className="py-16 sm:py-20 bg-background">
        <div ref={featuresAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-light mb-4">
              Your Space to <span className="italic text-primary">Create</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, index) => (
              <Card 
                key={f.title} 
                {...getStaggeredAnimationClasses(featuresAnimation.isVisible, index, 0, 100)}
                className={`p-6 ${getStaggeredAnimationClasses(featuresAnimation.isVisible, index, 0, 100).className}`}
              >
                <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                  <f.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-medium text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Floristry Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-cream/50">
        <div ref={kitchenAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-3xl text-center">
          <div {...getAnimationClasses(kitchenAnimation.isVisible, 0)} className={getAnimationClasses(kitchenAnimation.isVisible, 0).className}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium tracking-wide uppercase text-accent">Real Talk</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light mb-6">
              Kitchen floristry is a vibe... <span className="italic text-primary">until it isn't</span> 😅
            </h2>
            <p className="text-muted-foreground mb-4">
              Come design in a professional studio with cooler space, tools, and room to create—without turning your house into a stem explosion.
            </p>
            <p className="text-muted-foreground mb-4">
              And if you need a little backup? You'll have access to our talented design team for quick recipe guidance, styling feedback, and "does this look right?" moments.
            </p>
            <p className="text-muted-foreground font-medium">
              No long-term commitment—just a space that makes creating feel easier.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div ref={formAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-2xl">
          <div {...getAnimationClasses(formAnimation.isVisible, 0)} className={`text-center mb-10 ${getAnimationClasses(formAnimation.isVisible, 0).className}`}>
            <h2 className="font-serif text-3xl sm:text-4xl font-light">Join Our <span className="italic text-primary">Creative Community</span></h2>
            <p className="text-muted-foreground mt-2">Tell us about your business.</p>
          </div>

          <Card {...getAnimationClasses(formAnimation.isVisible, 100)} className={`p-0 overflow-hidden ${getAnimationClasses(formAnimation.isVisible, 100).className}`}>
            <ZohoForm
              formId="bcK3ALWOHIdyKLeiqdrQFQIAg1A-iyrXq2Ip6JFtnaU"
              formUrl="https://forms.zohopublic.com/nashvilleflowermarket1/form/NashvilleFlowerMarketWholesaleDesignerApplication/formperma/bcK3ALWOHIdyKLeiqdrQFQIAg1A-iyrXq2Ip6JFtnaU"
              ariaLabel="Nashville Flower Market Wholesale Designer Application"
              initialHeight="2324px"
            />
          </Card>

          <p className="text-xs text-center text-muted-foreground mt-6">Your info stays safe with us. We'll reach out within 24 hours to schedule a studio tour.</p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Wholesale;
