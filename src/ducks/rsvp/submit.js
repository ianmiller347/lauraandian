import { getAsyncRequest, getReducers, getTypes } from '../generics';

const identifier = 'RSVP_FORM_SUBMIT';
// const endpoint = 'api/rsvp/submit';
const endpoint = 'api/submit-rsvp.php';

export const types = getTypes(identifier);
const reducer = getReducers(identifier);
export const getRsvpSubmitState = (state) => state.rsvp.submit;

export default reducer;

const fetchOptions = (payload) => ({
  method: 'POST',
  body: JSON.stringify(payload),
});

export function submitRsvpForm(formData) {
  return (dispatch) =>
    dispatch(getAsyncRequest(endpoint, identifier, fetchOptions(formData), ''));
}
