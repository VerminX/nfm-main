import { Quote } from "lucide-react";

interface TestimonialSnippetProps {
  quote: string;
  name: string;
  title: string;
  className?: string;
  variant?: "default" | "compact" | "inline";
}

export const TestimonialSnippet = ({ 
  quote, 
  name, 
  title, 
  className = "",
  variant = "default"
}: TestimonialSnippetProps) => {
  if (variant === "inline") {
    return (
      <div className={`flex items-start gap-2 text-sm ${className}`}>
        <Quote className="h-3 w-3 text-accent mt-1 flex-shrink-0" />
        <div>
          <p className="text-muted-foreground italic">"{quote}"</p>
          <p className="text-xs text-muted-foreground/70 mt-1">— {name}, {title}</p>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`p-3 bg-warm-cream/50 rounded-lg ${className}`}>
        <Quote className="h-3 w-3 text-accent mb-1" />
        <p className="text-sm text-muted-foreground italic leading-relaxed">"{quote}"</p>
        <p className="text-xs text-muted-foreground/70 mt-2">— {name}, {title}</p>
      </div>
    );
  }

  return (
    <div className={`p-4 sm:p-6 bg-warm-cream/50 rounded-xl ${className}`}>
      <Quote className="h-4 w-4 text-accent mb-3" />
      <p className="text-base text-foreground italic leading-relaxed">"{quote}"</p>
      <p className="text-sm text-muted-foreground mt-3">— {name}, {title}</p>
    </div>
  );
};
