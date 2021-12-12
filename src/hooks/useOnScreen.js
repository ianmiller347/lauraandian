import { useEffect, useRef, useState } from 'react';

/**
 * uses IntersectionObserver API to see if element is visible on screen
 * @param {*} rootMargin offset i guess
 * @returns [isIntersecting, elementRef]
 */
export default function useOnScreen(rootMargin = '0px') {
  const ref = useRef();
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      observer.unobserve(currentRef);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return [isIntersecting, ref];
}
