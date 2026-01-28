import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useScrollAnimation = ({
  threshold = 0.15,
  triggerOnce = true,
  rootMargin = "0px",
}: UseScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, isVisible };
};

// Animation class utilities
export const getAnimationClasses = (
  isVisible: boolean,
  delay: number = 0
) => ({
  className: `transition-all duration-700 ease-out ${
    isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-6"
  }`,
  style: { transitionDelay: `${delay}ms` },
});

export const getStaggeredAnimationClasses = (
  isVisible: boolean,
  index: number,
  baseDelay: number = 0,
  staggerDelay: number = 100
) => ({
  className: `transition-all duration-700 ease-out ${
    isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-6"
  }`,
  style: { transitionDelay: `${baseDelay + index * staggerDelay}ms` },
});

export const getScaleAnimationClasses = (
  isVisible: boolean,
  delay: number = 0
) => ({
  className: `transition-all duration-700 ease-out ${
    isVisible
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95"
  }`,
  style: { transitionDelay: `${delay}ms` },
});
