import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import { getPageBySlug } from '../../ducks/pages';
import './Registry.css';

const Registry = () => {
  const registryPage = useSelector((state) => getPageBySlug(state, 'registry'));

  return (
    <div className="page registry">
      <Helmet>
        <title>Laura and Ian Wedding | Registry</title>
      </Helmet>
      <div className="background-image-container">
        {registryPage && (
          <img
            src={registryPage.header_image.guid}
            className="background-image"
            alt="laura and ian lookin over at jersey lol"
          />
        )}
      </div>
      <div>
        <h1 className="page-title">Registry</h1>
        <div className="page-content-container">
          {registryPage && (
            <div
              dangerouslySetInnerHTML={{
                __html: registryPage.content.rendered,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Registry;
