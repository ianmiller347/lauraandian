import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import { getPageBySlug } from '../../ducks/pages';
import './Registry.css';

const Registry = () => {
  const registryPage = useSelector((state) => getPageBySlug(state, 'registry'));

  return (
    <div className="page registry page--no-top-image">
      <Helmet>
        <title>Laura and Ian Wedding | Registry</title>
      </Helmet>
      <h1 className="page-title">Registry</h1>
      <div className="page-content-container">
        {registryPage && (
          <div
            dangerouslySetInnerHTML={{ __html: registryPage.content.rendered }}
          />
        )}
      </div>
    </div>
  );
};

export default Registry;
