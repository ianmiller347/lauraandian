import { useEffect, useRef, useState } from 'react';

/**
 * Check if an element is in viewport
 * @param {number} offset - Number of pixels up to the observable element from the top
 */
export default function useVisibility(offset = 0) {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = useRef(null);

  const onScroll = () => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top;
    const isTopPartVisible =
      top + offset >= 0 && top - offset <= window.innerHeight;
    const bottom =
      window.innerHeight - top - currentElement.current.offsetHeight;
    const isBottomVisible = bottom >= 0 && bottom <= window.innerHeight;
    setIsVisible(isTopPartVisible || isBottomVisible);
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  }, []);

  return [isVisible, currentElement];
}
