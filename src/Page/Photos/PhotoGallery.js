import { useCallback, useEffect, useState } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPhotoGallery,
  getImagesFromPhotoGallery,
  getPhotoGallery,
} from '../../ducks/photoGallery';

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const photoGallery = useSelector((state) => getPhotoGallery(state)?.data);
  const maxPages = useSelector(
    (state) => getPhotoGallery(state)?.maxPages ?? 1
  );
  const isLoading = useSelector((state) => getPhotoGallery(state)?.media);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    if (pageNumber && pageNumber <= maxPages) {
      dispatch(fetchPhotoGallery({ page: pageNumber }));
    }
  }, [dispatch, pageNumber, maxPages]);

  const images = getImagesFromPhotoGallery(photoGallery);
  const canLoadMore = pageNumber && pageNumber <= maxPages;
  const showLoadMore = images && !isLoading && canLoadMore;

  return (
    <div className="gallery">
      <Gallery photos={images} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map((image) => ({
                src: image.src,
                width: image.width,
                height: image.height,
                srcset: image.srcset,
                caption: image.caption,
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
      {showLoadMore && (
        <div className="load-more-container">
          <button onClick={() => setPageNumber(pageNumber + 1)}>
            Load more? {pageNumber}
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
