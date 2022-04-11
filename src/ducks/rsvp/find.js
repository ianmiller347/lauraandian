import {
  getAsyncRequest,
  getReducers,
  getTypes,
  resetState,
} from '../generics';

const identifier = 'RSVP_FORM_FIND';
const endpoint = 'api/find-rsvp.php';

export const types = getTypes(identifier);
const reducer = getReducers(identifier);
export const getRsvpFindState = (state) => state.rsvp.find;

export default reducer;

const fetchOptions = (payload) => ({
  method: 'POST',
  body: JSON.stringify(payload),
});

export function findRsvpByName(fullname) {
  return (dispatch) =>
    dispatch(
      getAsyncRequest(endpoint, identifier, fetchOptions({ fullname }), '')
    );
}

export function resetFindRsvp() {
  return (dispatch) => dispatch(resetState(identifier));
}
