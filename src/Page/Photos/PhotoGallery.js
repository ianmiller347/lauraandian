import { useCallback, useEffect, useState } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import {
  fetchPhotoGallery,
  getImagesFromPhotoGallery,
  getPhotoGallery,
} from '../../ducks/photoGallery';
import LoadingTiles from '../../components/LoadingTiles';
import GalleryFilters from './GalleryFilters';

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const photoGallery = useSelector((state) => getPhotoGallery(state)?.data);
  const maxPages = useSelector(
    (state) => getPhotoGallery(state)?.maxPages ?? 1
  );
  const isLoading = useSelector((state) => getPhotoGallery(state)?.isLoading);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('');

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

  const filteredGallery = currentCategory
    ? photoGallery?.filter((photo) =>
        photo.categories.includes(currentCategory)
      )
    : photoGallery;
  const sortedGallery = filteredGallery
    ? [...filteredGallery].sort(
        (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix()
      )
    : [];
  const images = getImagesFromPhotoGallery(sortedGallery);

  const canLoadMore = pageNumber && pageNumber < maxPages;
  const showLoadMore = images && !isLoading && canLoadMore;

  return (
    <div className="gallery">
      {isLoading && (
        <LoadingTiles tiles={8} message="Loading up the photo gallery..." />
      )}
      <GalleryFilters
        currentCategory={currentCategory}
        onSetFilter={setCurrentCategory}
      />
      <Gallery photos={images} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map(({ src, width, height, srcset, caption }) => ({
                src,
                width,
                height,
                srcset,
                caption,
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
      {showLoadMore && (
        <div className="load-more-container">
          <button
            className="button"
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Load more?
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
