import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchPages } from '../../ducks/pages';

const PageBody = ({ children }) => {
  const { pathname, hash } = useLocation();
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.blogPages?.data);
  const pagesLoading = useSelector((state) => state.blogPages?.isLoading);
  const pagesError = useSelector((state) => state.blogPages?.error);

  // load page data if it does not yet exist
  useEffect(() => {
    if (!pages && !pagesLoading && !pagesError) {
      dispatch(fetchPages());
    }
  }, [dispatch, pages, pagesLoading, pagesError]);

  useEffect(() => {
    // scroll to the top of the page when path changes
    if (!hash && window?.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return <div className={`page__body`}>{children}</div>;
};

export default PageBody;
