import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import './Registry.css';

const Registry = () => {
  const pages = useSelector((state) => state.blogPages?.data);
  const registryPage = pages?.find((page) => page.slug === 'registry');

  return (
    <div className="faq page--no-top-image">
      <Helmet>
        <title>Laura and Ian Wedding | Registry</title>
      </Helmet>
      <h1 className="page-title">Registry</h1>
      {registryPage && (
        <div dangerouslySetInnerHTML={{ __html: registryPage }} />
      )}
    </div>
  );
};

export default Registry;
