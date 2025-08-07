import { useEffect, useState } from 'react';

export const useShowSpinner = isLoading => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setTimeout(() => {
        setShowSpinner(true);
      }, 200);
    } else {
      setShowSpinner(false);
    }
    return () => clearTimeout(timer);
  }, [isLoading]);
  return showSpinner;
};
