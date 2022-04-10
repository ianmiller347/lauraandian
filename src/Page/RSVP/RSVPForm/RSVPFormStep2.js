import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRsvpFindState, submitRsvpForm } from '../../../ducks/rsvp';

const RSVPFormStep2 = () => {
  const dispatch = useDispatch();
  const [person1Yes, setPerson1Yes] = useState(false);
  const [person2Yes, setPerson2Yes] = useState(false);
  const populatedFormData = useSelector(
    (state) => getRsvpFindState(state)?.data
  );

  if (!populatedFormData) {
    return 'No rsvp found';
  }

  return (
    <form>
      <div>{JSON.stringify(populatedFormData)}</div>
      <div className="margin-bottom">
        <h3>{populatedFormData.formalNames}</h3>
        <p>
          <em>
            Not you? Try finding your RSVP again with a more specific name.
          </em>
        </p>
      </div>
      <div className="margin-bottom">
        <h4>Attending?</h4>
      </div>
      <div className="margin-bottom">
        <label htmlFor="person-1">
          <input
            type="checkbox"
            id="person-1"
            checked={person1Yes}
            onChange={() => setPerson1Yes(!person1Yes)}
          />
          {populatedFormData.person1firstName}{' '}
          {populatedFormData.person1lastName}
        </label>
        {populatedFormData.person2firstName && (
          <label htmlFor="person-2">
            <input
              type="checkbox"
              id="person-2"
              checked={person2Yes}
              onChange={() => setPerson2Yes(!person2Yes)}
            />
            {populatedFormData.person2firstName}{' '}
            {populatedFormData.person2lastName}
          </label>
        )}
      </div>
      <div>
        <button
          type="submit"
          onClick={() => dispatch(submitRsvpForm(populatedFormData))}
        >
          Submit RSVP
        </button>
      </div>
    </form>
  );
};

export default RSVPFormStep2;
