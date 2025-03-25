
import { useState, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  initiallyVisible?: boolean; // New option to make elements visible right away
}

export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverOptions = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(!!options.initiallyVisible);
  const { threshold = 0.1, rootMargin = '0px', once = true, initiallyVisible = false } = options;

  useEffect(() => {
    // Check if we're on mobile
    const isMobile = window.innerWidth < 768;
    
    // If on mobile and initiallyVisible is true, simply set as visible
    if (isMobile && initiallyVisible) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);

        if (entry.isIntersecting && once && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, rootMargin, once, initiallyVisible]);

  return isIntersecting;
}
