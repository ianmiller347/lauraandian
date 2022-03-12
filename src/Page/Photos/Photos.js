import Helmet from 'react-helmet';
import PhotoGallery from './PhotoGallery';
import './Photos.css';

const Photos = () => {
  return (
    <div className="photo-gallery page--no-top-image">
      <Helmet>
        <title>Laura and Ian Wedding | Photo Gallery</title>
      </Helmet>
      <h1 className="page-title">Photo Gallery</h1>
      <div className="gallery-container">
        <PhotoGallery />
      </div>
    </div>
  );
};

export default Photos;
