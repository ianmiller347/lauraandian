import { getAsyncRequest, getReducers, getTypes } from '../generics';

const identifier = 'BLOGINFO';

export const types = getTypes(identifier);
const reducer = getReducers(identifier);
export const getBlogInfoState = (state) => state.bloginfo;

export default reducer;

export function fetchBlogInfo() {
  return (dispatch) => dispatch(getAsyncRequest('wp-json', identifier));
}
