import { useEffect, useRef, useState } from 'react';

type ScrollGestureEvent = WheelEvent | TouchEvent;

export const useExperienceTimeline = (itemCount: number) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInExperience, setIsInExperience] = useState(false);
  const [canExitSection, setCanExitSection] = useState(false);
  const isScrollingRef = useRef(false);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    const handleScroll = (e: ScrollGestureEvent) => {
      if (!isInExperience || isScrollingRef.current) return;
      e.preventDefault();

      isScrollingRef.current = true;
      let delta = 0;

      if (e instanceof WheelEvent) {
        delta = e.deltaY;
      } else {
        const currentY = e.touches[0].clientY;
        delta = touchStartYRef.current - currentY;

        const scrollDown = delta > 0;
        const touchTarget = e.touches[0].target as Element | null;
        const touchZone = touchTarget?.getBoundingClientRect();
        const screenHeight = window.innerHeight;

        if (
          currentIndex === itemCount - 1 &&
          scrollDown &&
          touchZone &&
          touchZone.bottom > screenHeight - 100
        ) {
          setIsInExperience(false);
          document.body.style.overflow = 'auto';
          return;
        }
      }

      const scrollDown = delta > 0;

      if (scrollDown) {
        if (currentIndex < itemCount - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else if (!canExitSection) {
          setCanExitSection(true);
          setTimeout(() => {
            setIsInExperience(false);
            setCanExitSection(false);
            document.body.style.overflow = 'auto';
          }, 500);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        } else if (!canExitSection) {
          setCanExitSection(true);
          setTimeout(() => {
            setIsInExperience(false);
            setCanExitSection(false);
            document.body.style.overflow = 'auto';
          }, 500);
        }
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 700);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    if (isInExperience) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', handleScroll, { passive: false });
      window.addEventListener('touchmove', handleScroll, { passive: false });
      window.addEventListener('touchstart', handleTouchStart, { passive: true });
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      document.body.style.overflow = 'auto';
    };
  }, [canExitSection, currentIndex, isInExperience, itemCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
            if (!isInExperience) {
              setIsInExperience(true);
              const scrollY = window.scrollY;
              const entryTop = (entry.target as HTMLElement).offsetTop;
              setCurrentIndex(scrollY < entryTop ? 0 : itemCount - 1);
            }
          } else if (entry.intersectionRatio < 0.3 && isInExperience) {
            setIsInExperience(false);
          }
        });
      },
      {
        threshold: [0.3, 0.7],
        rootMargin: '0px'
      }
    );

    const node = containerRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [isInExperience, itemCount]);

  return {
    containerRef,
    currentIndex,
    isInExperience,
  };
};
