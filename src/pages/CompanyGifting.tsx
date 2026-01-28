import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { ZohoForm } from "@/components/ZohoForm";
import { Heart, Gift, Truck, Calendar, AlertCircle, Building2, ArrowDown } from "lucide-react";
import { useScrollAnimation, getAnimationClasses } from "@/hooks/useScrollAnimation";

// Product images from assets
import arrangement1 from "@/assets/arrangement-1.webp";
import arrangement2 from "@/assets/arrangement-2.webp";
import galleryBouquet from "@/assets/gallery/bouquet-romantic-pink.webp";

const ZOHO_FORM_URL = "https://forms.zohopublic.com/nashvilleflowermarket1/form/OrderForm/formperma/V_49lAcQSRBGUCtissDBVVGH3qlgMZrsYb_LkaGHogA";
const ZOHO_FORM_ID = "V_49lAcQSRBGUCtissDBVVGH3qlgMZrsYb_LkaGHogA";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: "joy-jar",
    name: "Joy Jar",
    price: 20,
    description: "A cheerful compact arrangement perfect for desk gifting. Bright and beautiful in a charming jar.",
    image: arrangement1,
  },
  {
    id: "signature",
    name: "Signature",
    price: 40,
    description: "Our signature arrangement featuring a stunning mix of seasonal blooms. A memorable gift for any occasion.",
    image: arrangement2,
  },
  {
    id: "elevated",
    name: "Elevated",
    price: 60,
    description: "A premium arrangement with lush, elegant flowers. Make a lasting impression with this showstopping gift.",
    image: galleryBouquet,
  },
];

const CompanyGifting = () => {
  const heroAnimation = useScrollAnimation();
  const productsAnimation = useScrollAnimation();
  const infoAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();

  const scrollToForm = () => {
    document.getElementById('order-form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-brand-cream to-background">
        <div ref={heroAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div {...getAnimationClasses(heroAnimation.isVisible, 0)} className={getAnimationClasses(heroAnimation.isVisible, 0).className}>
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              <Building2 className="h-3 w-3 mr-1" />
              Corporate Exclusive
            </Badge>
          </div>
          <p {...getAnimationClasses(heroAnimation.isVisible, 100)} className={`text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 ${getAnimationClasses(heroAnimation.isVisible, 100).className}`}>
            Valentine's Day 2026
          </p>
          <h1 {...getAnimationClasses(heroAnimation.isVisible, 200)} className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-light max-w-3xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 200).className}`}>
            Company <span className="italic text-primary">Gifting</span>
          </h1>
          <p {...getAnimationClasses(heroAnimation.isVisible, 300)} className={`text-lg text-muted-foreground mt-6 max-w-2xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 300).className}`}>
            Special corporate pricing on beautiful Valentine's Day arrangements. Perfect for employee appreciation, client gifting, and team celebrations.
          </p>
        </div>
      </section>

      {/* Important Info Banner */}
      <section className="py-6 bg-primary/5 border-y border-primary/10">
        <div ref={infoAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div {...getAnimationClasses(infoAnimation.isVisible, 0)} className={`flex flex-col items-center text-center ${getAnimationClasses(infoAnimation.isVisible, 0).className}`}>
              <Gift className="h-8 w-8 text-primary mb-2" />
              <p className="font-semibold text-foreground">10+ Minimum</p>
              <p className="text-sm text-muted-foreground">Mix & Match</p>
            </div>
            <div {...getAnimationClasses(infoAnimation.isVisible, 100)} className={`flex flex-col items-center text-center ${getAnimationClasses(infoAnimation.isVisible, 100).className}`}>
              <Truck className="h-8 w-8 text-primary mb-2" />
              <p className="font-semibold text-foreground">Free Delivery</p>
              <p className="text-sm text-muted-foreground">Nashville Area</p>
            </div>
            <div {...getAnimationClasses(infoAnimation.isVisible, 200)} className={`flex flex-col items-center text-center ${getAnimationClasses(infoAnimation.isVisible, 200).className}`}>
              <Calendar className="h-8 w-8 text-primary mb-2" />
              <p className="font-semibold text-foreground">Feb 11-14</p>
              <p className="text-sm text-muted-foreground">Delivery Dates</p>
            </div>
            <div {...getAnimationClasses(infoAnimation.isVisible, 300)} className={`flex flex-col items-center text-center ${getAnimationClasses(infoAnimation.isVisible, 300).className}`}>
              <Heart className="h-8 w-8 text-primary mb-2" />
              <p className="font-semibold text-foreground">Special Pricing</p>
              <p className="text-sm text-muted-foreground">Corporate Rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimum Order Notice */}
      <section className="py-4 bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-center text-amber-800 font-medium">
            <AlertCircle className="h-4 w-4 inline-block mr-2 -mt-0.5" />
            <strong>Minimum order: 10 arrangements</strong> — Mix and match any combination of styles!
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div ref={productsAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div {...getAnimationClasses(productsAnimation.isVisible, 0)} className={`text-center mb-12 ${getAnimationClasses(productsAnimation.isVisible, 0).className}`}>
            <h2 className="font-serif text-3xl sm:text-4xl font-light mb-4">
              Choose Your Arrangements
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Select any combination totaling 10 or more arrangements. We'll deliver directly to your office or multiple locations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <Card
                key={product.id}
                {...getAnimationClasses(productsAnimation.isVisible, (index + 1) * 100)}
                className={`group overflow-hidden bg-card border-border hover:shadow-lg transition-all ${getAnimationClasses(productsAnimation.isVisible, (index + 1) * 100).className}`}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <ImageWithSkeleton
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground text-lg px-3 py-1">
                    ${product.price}
                  </Badge>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-primary font-semibold text-xl mt-1">
                      ${product.price} <span className="text-sm font-normal text-muted-foreground">per arrangement</span>
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Order CTA */}
          <div {...getAnimationClasses(productsAnimation.isVisible, 500)} className={`text-center mt-12 ${getAnimationClasses(productsAnimation.isVisible, 500).className}`}>
            <Button
              size="lg"
              className="bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-medium px-12 py-6 text-lg"
              onClick={scrollToForm}
            >
              <Gift className="mr-2 h-5 w-5" />
              Place Your Order
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Fill out the form below to complete your order
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-xl text-primary">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Choose Your Mix</h3>
              <p className="text-muted-foreground">
                Select any combination of arrangements totaling 10 or more. Mix and match styles as needed.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-xl text-primary">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Submit Your Order</h3>
              <p className="text-muted-foreground">
                Fill out our simple order form with your selections and delivery details. We'll send an invoice.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-xl text-primary">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">We Deliver</h3>
              <p className="text-muted-foreground">
                We'll deliver your arrangements Feb 11-14. Free delivery included for all corporate orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order-form-section" className="py-16 sm:py-20 bg-brand-cream">
        <div ref={formAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div {...getAnimationClasses(formAnimation.isVisible, 0)} className={`text-center mb-8 ${getAnimationClasses(formAnimation.isVisible, 0).className}`}>
            <h2 className="font-serif text-3xl sm:text-4xl font-light mb-4">
              Place Your Order
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Complete the form below to submit your corporate gifting order. We'll send you an invoice via email.
            </p>
          </div>

          <div {...getAnimationClasses(formAnimation.isVisible, 200)} className={`max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6 ${getAnimationClasses(formAnimation.isVisible, 200).className}`}>
            <ZohoForm
              formId={ZOHO_FORM_ID}
              formUrl={ZOHO_FORM_URL}
              ariaLabel="Company Gifting Order Form"
              initialHeight="1800px"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="font-serif text-2xl mb-4">Questions?</h2>
          <p className="text-muted-foreground">
            Call us at <a href="tel:+16159288001" className="text-primary hover:underline font-medium">(615) 928-8001</a> or email{" "}
            <a href="mailto:hello@nashvilleflowermarket.com" className="text-primary hover:underline font-medium">
              hello@nashvilleflowermarket.com
            </a>
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default CompanyGifting;
