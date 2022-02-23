import { getAsyncRequest, getReducers, getTypes } from '../generics';

const identifier = 'BLOG_PAGES';

export const types = getTypes(identifier);
const reducer = getReducers(identifier);

export const getPagesState = (state) => state.blogPages;
export const getPageBySlug = (state, pageSlug) =>
  getPagesState(state)?.data?.find((page) => page.slug === pageSlug);

export default reducer;

export function fetchPages() {
  return (dispatch) =>
    dispatch(getAsyncRequest('wp-json/wp/v2/pages', identifier));
}
