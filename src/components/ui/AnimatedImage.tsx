
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
  lowQualitySrc?: string;
  animation?: 'fade-in' | 'scale-up' | 'reveal-right';
  delay?: number;
}

const AnimatedImage = ({
  src,
  alt,
  className,
  wrapperClassName,
  lowQualitySrc,
  animation = 'fade-in',
  delay = 0,
  ...props
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(imageRef, { rootMargin: '100px' });

  useEffect(() => {
    if (isInView) {
      setShouldLoad(true);
    }
  }, [isInView]);

  const animationClass = {
    'fade-in': 'opacity-0 animate-fade-in',
    'scale-up': 'opacity-0 animate-scale-up',
    'reveal-right': 'opacity-0 animate-reveal-right',
  }[animation];

  const delayClass = delay > 0 ? `animate-delay-${delay}` : '';

  return (
    <div 
      ref={imageRef}
      className={cn(
        'relative overflow-hidden',
        wrapperClassName
      )}
    >
      {lowQualitySrc && !isLoaded && (
        <img
          src={lowQualitySrc}
          alt={alt}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            className
          )}
          {...props}
        />
      )}
      
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          className={cn(
            'w-full h-full object-cover',
            !isLoaded && 'opacity-0',
            isLoaded && animationClass,
            isLoaded && delayClass,
            className
          )}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      )}
    </div>
  );
};

export default AnimatedImage;
