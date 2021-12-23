import { getAsyncRequest, getReducers, getTypes } from '../generics';

const identifier = 'HOTELS';

export const types = getTypes(identifier);
const reducer = getReducers(identifier);
export const getHotelsState = (state) => state.hotels;

export default reducer;

export function fetchHotels() {
  return (dispatch) =>
    dispatch(getAsyncRequest('wp-json/wp/v2/hotel', identifier));
}
