import { useState, useEffect } from 'react';

export default function useWindowScroll() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [scrollX, setScrollX] = useState(window.scrollX);

  const listener = (e) => {
    setScrollY(window.scrollY);
    setScrollX(window.scrollX);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollY,
    scrollX,
  };
}
