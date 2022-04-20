import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import { getPageBySlug } from '../../ducks/pages';
import './Registry.css';

const Registry = () => {
  const registryPage = useSelector((state) => getPageBySlug(state, 'registry'));

  return (
    <div className="registry">
      <Helmet>
        <title>Laura and Ian Wedding | Registry</title>
      </Helmet>
      <div className="background-image-container">
        {registryPage && (
          <img
            src={registryPage.header_image.guid}
            className="background-image"
            alt="Laura and Ian proposal day, drinking Aperol Spritz"
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
      <div>
        {registryPage?.footer_image?.guid && (
          <img
            src={registryPage.footer_image.guid}
            className="background-image"
            alt="Laura and Ian walking away toward the Hudson River and you can see Jersey in the background"
          />
        )}
      </div>
    </div>
  );
};

export default Registry;
