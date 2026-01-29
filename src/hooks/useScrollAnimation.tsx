import { useCallback, useEffect, useRef, useState } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Callback ref that triggers when the element is attached/detached
  const ref = useCallback((node: HTMLDivElement | null) => {
    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) return;

    // Cleanup any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && observerRef.current) {
            observerRef.current.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [element, threshold, triggerOnce, rootMargin]);

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
