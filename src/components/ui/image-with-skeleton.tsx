import * as React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Aspect ratio for the skeleton (e.g., "square", "video", "4/3", or custom like "16/9") */
  aspectRatio?: "square" | "video" | "4/3" | "3/2" | string;
  /** Custom skeleton className */
  skeletonClassName?: string;
  /** Container className */
  containerClassName?: string;
}

const ImageWithSkeleton = React.forwardRef<HTMLImageElement, ImageWithSkeletonProps>(
  (
    {
      className,
      skeletonClassName,
      containerClassName,
      aspectRatio,
      src,
      alt,
      onLoad,
      onError,
      ...props
    },
    ref
  ) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState(false);

    // Reset loading state when src changes
    React.useEffect(() => {
      setIsLoading(true);
      setHasError(false);
    }, [src]);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
      setIsLoading(false);
      onLoad?.(e);
    };

    const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
      setIsLoading(false);
      setHasError(true);
      onError?.(e);
    };

    const getAspectRatioClass = () => {
      switch (aspectRatio) {
        case "square":
          return "aspect-square";
        case "video":
          return "aspect-video";
        case "4/3":
          return "aspect-[4/3]";
        case "3/2":
          return "aspect-[3/2]";
        default:
          return aspectRatio ? `aspect-[${aspectRatio}]` : "";
      }
    };

    const aspectClass = getAspectRatioClass();

    return (
      <div className={cn("relative overflow-hidden", aspectClass, containerClassName)}>
        {/* Skeleton placeholder */}
        {isLoading && !hasError && (
          <Skeleton
            className={cn(
              "absolute inset-0 w-full h-full",
              skeletonClassName
            )}
          />
        )}

        {/* Actual image */}
        <img
          ref={ref}
          src={src}
          alt={alt}
          className={cn(
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            hasError && "hidden",
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />

        {/* Error fallback */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <span className="text-muted-foreground text-sm">Failed to load image</span>
          </div>
        )}
      </div>
    );
  }
);

ImageWithSkeleton.displayName = "ImageWithSkeleton";

export { ImageWithSkeleton };
