import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (
  options: ScrollAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const {
    threshold = 0.3,
    rootMargin = '-50px 0px -50px 0px',
    triggerOnce = false
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          
          if (entry.isIntersecting) {
            // Element is entering viewport - fade in
            target.style.opacity = '1';
            target.style.transform = 'translateY(0px)';
          } else if (!triggerOnce) {
            // Element is leaving viewport - fade out
            target.style.opacity = '0';
            target.style.transform = 'translateY(20px)';
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return elementRef;
};
