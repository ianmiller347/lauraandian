import Helmet from 'react-helmet';
import { WeddingCake } from '../../components/Icon';

const NotFound = () => {
  return (
    <div className="page page--no-top-image">
      <Helmet>
        <title>Laura and Ian Wedding | Page not found</title>
      </Helmet>
      <h1 className="page-title">404 Not Found</h1>
      <p className="text-center">Sorry! That page does not exist.</p>
      <div className="text-center">
        <WeddingCake size={96} />
      </div>
    </div>
  );
};

export default NotFound;
