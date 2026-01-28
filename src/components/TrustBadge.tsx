import { Truck } from "lucide-react";

interface TrustBadgeProps {
  className?: string;
  variant?: "default" | "compact";
}

export const TrustBadge = ({ className = "", variant = "default" }: TrustBadgeProps) => {
  if (variant === "compact") {
    return (
      <div className={`inline-flex items-center gap-2 text-xs text-muted-foreground ${className}`}>
        <Truck className="h-3 w-3 text-accent" />
        <span>#1 Nashville Florist on DoorDash</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 px-4 py-2 bg-brand-gold/20 rounded-full ${className}`}>
      <Truck className="h-4 w-4 text-accent" />
      <span className="text-sm font-medium text-foreground">#1 Nashville Florist on DoorDash</span>
    </div>
  );
};
