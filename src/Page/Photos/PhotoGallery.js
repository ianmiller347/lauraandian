import { useCallback, useEffect, useState } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMedia, getMedia } from '../../ducks/media';

const extractSrcSetFromMedia = (mediaItem) => {
  const sizesToExtract = ['medium', 'large', 'full'];
  return sizesToExtract.map((size) => {
    const mediaSizeItem = mediaItem.media_details.sizes[size];
    return `${mediaSizeItem.source_url} ${mediaSizeItem.width}w`;
  });
};

const getImagesFromMedia = (media) => {
  if (!media) {
    return [];
  }

  return media
    .filter((mediaItem) =>
      mediaItem.link.startsWith('https://lauraandian.wedding/manage/photos/')
    )
    .map((mediaItem) => ({
      src: mediaItem.source_url,
      srcset: extractSrcSetFromMedia(mediaItem),
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: mediaItem.media_details.width,
      height: mediaItem.media_details.height,
      caption: mediaItem.caption.rendered,
    }));
};

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const media = useSelector((state) => getMedia(state)?.data);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    dispatch(fetchMedia());
  }, [dispatch]);

  const images = getImagesFromMedia(media);

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
    </div>
  );
};

export default PhotoGallery;
