import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageBody = ({ children }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // scroll to the top of the page when path changes
    if (!hash && window?.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return <div className={`page__body`}>{children}</div>;
};

export default PageBody;
