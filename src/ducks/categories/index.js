import { getAsyncRequest, getReducers, getTypes } from '../generics';

const identifier = 'CATEGORIES';

export const types = getTypes(identifier);
const reducer = getReducers(identifier);
export const getCategoriesState = (state) => state.categories;

export default reducer;

export function fetchCategories() {
  return (dispatch) =>
    dispatch(getAsyncRequest('wp-json/wp/v2/categories', identifier));
}
