import { getAsyncRequest, getReducers, getTypes } from '../generics';

const identifier = 'SCHEDULE';

export const types = getTypes(identifier);
const reducer = getReducers(identifier);
export const getScheduleState = (state) => state.schedule;

export default reducer;

export function fetchSchedule() {
  return (dispatch) =>
    dispatch(getAsyncRequest('wp-json/wp/v2/schedule_item', identifier));
}
