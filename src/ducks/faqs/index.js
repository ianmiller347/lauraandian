import { getAsyncRequest, getReducers, getTypes } from '../generics';

const identifier = 'FAQS';

export const types = getTypes(identifier);
const reducer = getReducers(identifier);
export const getFaqState = (state) => state.faq;

export default reducer;

export function fetchFaqs() {
  return (dispatch) =>
    dispatch(getAsyncRequest('wp-json/wp/v2/faq', identifier));
}
