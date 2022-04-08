import { useDispatch, useSelector } from 'react-redux';
import { getRsvpFindState, submitRsvpForm } from '../../../ducks/rsvp';

// dispatch(submitRsvpForm(formSelections));
const RSVPFormStep2 = () => {
  // const dispatch = useDispatch();
  const populatedFormData = useSelector(
    (state) => getRsvpFindState(state)?.data
  );

  if (!populatedFormData) {
    return 'No rsvp found';
  }

  return (
    <form>
      <div>{JSON.stringify(populatedFormData)}</div>
      <div>
        <button type="submit" onClick={() => true}>
          Submit RSVP
        </button>
      </div>
    </form>
  );
};

export default RSVPFormStep2;
