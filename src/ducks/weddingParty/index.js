import { getAsyncRequest, getReducers, getTypes } from '../generics';

const identifier = 'WEDDING_PARTY';

export const types = getTypes(identifier);
const reducer = getReducers(identifier);
export const getWeddingPartyState = (state) => state.weddingParty;

export default reducer;

export function fetchWeddingParty() {
  return (dispatch) =>
    dispatch(
      getAsyncRequest(
        'wp-json/wp/v2/wedding_party_member?per_page=50',
        identifier
      )
    );
}
