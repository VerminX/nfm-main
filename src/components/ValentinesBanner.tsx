import { Link } from "react-router-dom";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import valentinesBanner from "@/assets/valentines-hero-2025.png";

export const ValentinesBanner = () => {
  return (
    <section className="py-4 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto">
        <Link 
          to="/shop?collection=valentines-day-flowers"
          className="block rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
        >
          <ImageWithSkeleton
            src={valentinesBanner}
            alt="Valentine's Day - LOVE LOVE LOVE flowers or bust"
            className="w-full"
            containerClassName="w-full"
          />
        </Link>
      </div>
    </section>
  );
};
