import { getAsyncRequest, getReducers, getTypes } from '../generics';

const identifier = 'BLOG_MEDIA';

export const types = getTypes(identifier);
const reducer = getReducers(identifier);
export const getMedia = (state) => state.blogMedia;

export default reducer;

export function fetchMedia() {
  return (dispatch) =>
    dispatch(getAsyncRequest('wp-json/wp/v2/media', identifier));
}
