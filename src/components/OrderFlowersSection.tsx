import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import deliveryHero from "@/assets/for-all-the-moments.png";
import { SHOPIFY_STORE_PERMANENT_DOMAIN } from "@/lib/shopify";

export const OrderFlowersSection = () => {
  const animation = useScrollAnimation();
  const SHOPIFY_STORE_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}`;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-cream/50">
      <div ref={animation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4 transition-all duration-700 ease-out ${
              animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Truck className="h-4 w-4 text-brand-espresso" />
            <span className="text-sm font-medium text-brand-espresso">Nashville's #1 Florist on DoorDash</span>
          </div>
          <h2
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light mb-4 transition-all duration-700 ease-out ${
              animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Order <span className="italic text-primary">Flowers</span> for Delivery
          </h2>
          <p
            className={`text-muted-foreground transition-all duration-700 ease-out ${
              animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Fresh blooms delivered to your door. Same-day delivery available in Nashville.
          </p>
        </div>

        {/* Single Large Arrangements Image */}
        <div
          className={`max-w-4xl mx-auto mb-10 cursor-pointer group transition-all duration-700 ease-out ${
            animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "300ms" }}
          onClick={() => window.open(`${SHOPIFY_STORE_URL}/collections/all`, '_blank')}
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={deliveryHero}
              alt="For all the moments - birthdays, anniversaries, just because"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="text-center mt-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-2">Arrangements</h3>
            <p className="text-muted-foreground mb-4">Stunning centerpieces and arrangements for home or any occasion.</p>
            <span className="text-primary font-medium group-hover:underline inline-flex items-center gap-2">
              Shop Arrangements <ExternalLink className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out ${
            animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
            onClick={() => window.open(`${SHOPIFY_STORE_URL}/collections/all`, '_blank')}
          >
            <Truck className="mr-2 h-4 w-4" />
            Order for Delivery
            <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8"
            onClick={() => window.open(`${SHOPIFY_STORE_URL}/collections/all`, '_blank')}
          >
            Schedule Pickup
            <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </div>
    </section>
  );
};
