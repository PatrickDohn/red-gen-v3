import { useState, useEffect } from 'react';

export function useResponsiveZoom() {
  const [zoom, setZoom] = useState(1.2);

  useEffect(() => {
    const handleResize = () => {
      // 1440px is usually where a 1.2 zoom starts to feel tight
      if (window.innerWidth < 1200) {
        setZoom(1); // Remove zoom on smaller screens
      } else if (window.innerWidth < 1500) {
        setZoom(1.1); // Slight zoom for mid-size screens
      } else {
        setZoom(1.2); // Full zoom for large monitors
      }
    };

    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return zoom;
}