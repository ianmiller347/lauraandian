import { getAsyncRequest, getReducers, getTypes } from '../generics';

const identifier = 'PHOTO_GALLERY';

export const types = getTypes(identifier);
const reducer = getReducers(identifier);
export const getPhotoGallery = (state) => state.photoGallery;

export default reducer;

const defaultPaginationParams = {
  page: 1,
};

export function fetchPhotoGallery(params = defaultPaginationParams) {
  return (dispatch) =>
    dispatch(
      getAsyncRequest(
        `wp-json/wp/v2/photo_gallery_photo?_embed&per_page=100&page=${params.page}`,
        identifier
      )
    );
}

export const getImagesFromPhotoGallery = (photoGallery) => {
  if (!photoGallery) {
    return [];
  }

  return photoGallery.map((photo) => {
    const photoMedia = photo._embedded['wp:featuredmedia'][0];
    const photoMediaDetails = photoMedia.media_details;
    return {
      src: photoMedia.source_url,
      srcSet: extractSrcSetFromMedia(photoMedia),
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: photoMediaDetails.width,
      height: photoMediaDetails.height,
      caption: photoMedia.caption.rendered,
    };
  });
};

export const extractSrcSetFromMedia = (mediaItem) => {
  const sizesToExtract = ['medium', 'large', 'full'];
  return sizesToExtract.map((size) => {
    const mediaSizeItem = mediaItem.media_details.sizes[size];
    return `${mediaSizeItem.source_url} ${mediaSizeItem.width}w`;
  });
};

export const getImagesFromMedia = (media) => {
  if (!media) {
    return [];
  }

  return media
    .filter((mediaItem) =>
      mediaItem.link.startsWith('https://lauraandian.wedding/manage/photos/')
    )
    .map((mediaItem) => ({
      src: mediaItem.source_url,
      srcSet: extractSrcSetFromMedia(mediaItem),
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: mediaItem.media_details.width,
      height: mediaItem.media_details.height,
      caption: mediaItem.caption.rendered,
    }));
};
