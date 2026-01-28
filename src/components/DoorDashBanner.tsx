import { Button } from "@/components/ui/button";
import { ExternalLink, Truck } from "lucide-react";

export const DoorDashBanner = () => {
  return (
    <div className="bg-gradient-to-r from-brand-espresso via-brand-terracotta to-brand-espresso text-primary-foreground py-4 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <div className="flex items-center gap-3">
          <Truck className="h-5 w-5 hidden sm:block" />
          <span className="font-serif text-lg sm:text-xl font-medium">
            Nashville Flower Market × DoorDash
          </span>
        </div>
        <span className="text-primary-foreground/80 text-sm text-center sm:text-left">
          Fresh flowers delivered straight to your door
        </span>
        <Button
          size="sm"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium text-sm px-6"
          onClick={() => window.open('https://www.doordash.com/store/nashville-flower-market-nashville-30912690/43286355/?srsltid=AfmBOopwRX1dPmvtXlHOn2Li3pk5IDtnYcdF0cptH8HmR3M9KoZgUfuZ', '_blank')}
        >
          Order Now
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
