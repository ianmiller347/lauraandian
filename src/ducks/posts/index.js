import { getAsyncRequest, getReducers, getTypes } from '../generics';

const identifier = 'BLOG_POSTS';

export const types = getTypes(identifier);
const reducer = getReducers(identifier);

export default reducer;

export function fetchPosts() {
  return (dispatch) =>
    dispatch(getAsyncRequest('wp-json/wp/v2/posts', identifier));
}
