import { useEffect, useState } from 'react';

export const useViewport = ({ mobileBreakpoint = 768, defaultWidth = 1200, defaultHeight = 800 } = {}) => {
  const [viewport, setViewport] = useState(() => {
    if (typeof window === 'undefined') {
      return {
        width: defaultWidth,
        height: defaultHeight,
        isMobile: defaultWidth < mobileBreakpoint,
      };
    }

    return {
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < mobileBreakpoint,
    };
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < mobileBreakpoint,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [mobileBreakpoint]);

  return viewport;
};
