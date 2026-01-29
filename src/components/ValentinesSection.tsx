import { Link } from "react-router-dom";
import valentinesBanner from "@/assets/valentines-hero-2025.png";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { useScrollAnimation, getAnimationClasses } from "@/hooks/useScrollAnimation";

export const ValentinesSection = () => {
  const bannerAnimation = useScrollAnimation();

  return (
    <section className="bg-background">
      {/* Banner Hero */}
      <div
        ref={bannerAnimation.ref}
        className="py-4 px-4 sm:px-6 lg:px-12"
      >
        <div className="container mx-auto">
          <Link
            to="/shop?collection=valentines-day-flowers"
            className={`block rounded-2xl shadow-sm overflow-hidden transition-all duration-700 ease-out hover:shadow-lg hover:scale-[1.005] ${
              bannerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <img
              src={valentinesBanner}
              alt="Valentine's Day - LOVE LOVE LOVE flowers or bust - Pre-order now for Feb 11-14 delivery"
              className="w-full"
            />
          </Link>
        </div>
      </div>

      {/* Featured Valentine's Products */}
      <FeaturedProducts
        collectionHandle="valentines-day-flowers"
        title="Shop Valentine's Day"
        subtitle="Limited Time Collection"
        maxProducts={4}
        showViewAll={true}
        viewAllLink="/shop?collection=valentines-day-flowers"
        columns={4}
      />
    </section>
  );
};

// Keep the old component name as an alias for backwards compatibility
export const ValentinesBanner = ValentinesSection;
