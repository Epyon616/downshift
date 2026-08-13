import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollLocationState = {
  scrollTo?: string;
};

const useScrollToLocationState = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as ScrollLocationState | null;

    if (!state?.scrollTo) {
      return;
    }

    const element = document.getElementById(state.scrollTo);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [location]);
};

export default useScrollToLocationState;