import { getAsyncRequest, getReducers, getTypes } from '../generics';

const identifier = 'BLOG_MEDIA';

export const types = getTypes(identifier);
const reducer = getReducers(identifier);
export const getMedia = (state) => state.blogMedia;

export default reducer;

export function fetchMedia() {
  return (dispatch) =>
    dispatch(getAsyncRequest('wp-json/wp/v2/media?per_page=100', identifier));
}

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
