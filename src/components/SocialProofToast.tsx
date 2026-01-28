import { useState, useEffect, useCallback } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { generateNotification } from "@/data/socialProofData";
import { cn } from "@/lib/utils";

interface Notification {
  name: string;
  neighborhood: string;
  action: { text: string; icon: string };
  timeframe: string;
}

export const SocialProofToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isDismissed, setIsDismissed] = useState(false);

  const showNotification = useCallback(() => {
    if (isDismissed) return;
    
    const newNotification = generateNotification();
    setNotification(newNotification);
    setIsVisible(true);

    // Auto-hide after 6 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 6000);
  }, [isDismissed]);

  useEffect(() => {
    // Check if user has dismissed before
    const dismissed = localStorage.getItem("socialProofDismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Initial delay before first notification (20-30 seconds)
    const initialDelay = Math.random() * 10000 + 20000;
    const initialTimer = setTimeout(showNotification, initialDelay);

    // Set up recurring notifications every 60-90 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 30000 + 60000;
      setTimeout(showNotification, randomDelay);
    }, 90000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [showNotification]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("socialProofDismissed", "true");
  };

  if (!notification || isDismissed) return null;

  return (
    <div
      className={cn(
        "fixed z-50 transition-all duration-500 ease-out",
        // Mobile: bottom center, full width with padding
        "bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6",
        // Desktop: fixed width
        "md:w-[340px]",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      <div className="relative bg-card border border-border/50 rounded-2xl shadow-lg overflow-hidden">
        {/* Accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
        
        <div className="p-4 pr-10">
          <div className="flex items-start gap-3">
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg">{notification.action.icon}</span>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground leading-snug">
                <span className="font-semibold">{notification.name}</span>
                <span className="text-muted-foreground"> from </span>
                <span className="font-medium">{notification.neighborhood}</span>
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">
                {notification.action.text}
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                <span className="text-xs text-muted-foreground">
                  {notification.timeframe}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted/80 transition-colors group"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </button>
      </div>
    </div>
  );
};
