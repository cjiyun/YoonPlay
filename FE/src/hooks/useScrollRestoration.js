import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollRestoration = category => {
  const location = useLocation();
  const storageKey = `scroll-position-${category}`;

  useEffect(() => {
    const savedY = sessionStorage.getItem(storageKey);
    if (savedY) {
      window.scrollTo(0, parseInt(savedY, 10));
    }

    return () => {
      sessionStorage.setItem(storageKey, window.scrollY.toString());
      console.log('sessionStorage: ' + savedY);
    };
  }, [location.pathname, storageKey]);
};

export default useScrollRestoration;
