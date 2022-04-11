import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRsvpFindState, submitRsvpForm } from '../../../ducks/rsvp';
import { resetFindRsvp } from '../../../ducks/rsvp/find';
import PopulatedRsvp from './PopulatedRsvp';

const RSVPFormStep2 = () => {
  const dispatch = useDispatch();
  const [person1Yes, setPerson1Yes] = useState(false);
  const [person2Yes, setPerson2Yes] = useState(false);
  const populatedFormData = useSelector(
    (state) => getRsvpFindState(state)?.data
  );

  useEffect(() => {
    if (populatedFormData.person1attending) {
      setPerson1Yes(true);
    }
    if (populatedFormData.person2attending) {
      setPerson2Yes(true);
    }
  }, [populatedFormData]);

  if (!populatedFormData) {
    return 'No rsvp found';
  }

  if (populatedFormData.errorMessage) {
    return (
      <div className="text-center">
        <p>{populatedFormData.errorMessage}</p>
        <button
          type="button"
          className="button"
          onClick={() => dispatch(resetFindRsvp())}
        >
          Try again
        </button>
      </div>
    );
  }

  const guestCount = populatedFormData.guestCount
    ? parseInt(populatedFormData.guestCount, 10)
    : 0;

  const showPerson2 = populatedFormData.person2firstName || guestCount > 1;
  const person2Name = populatedFormData.person2firstName
    ? `${populatedFormData.person2firstName} ${populatedFormData.person2lastName}`
    : 'Guest';

  return (
    <form>
      <PopulatedRsvp
        rsvpData={populatedFormData}
        resetRsvp={() => dispatch(resetFindRsvp())}
      />
      <h4 className="checkbox-title">Will you be attending?</h4>
      <div className="margin-bottom">
        <div className="checkbox-container">
          <label htmlFor="person-1">
            <input
              type="checkbox"
              id="person-1"
              className="checkbox"
              checked={person1Yes}
              onChange={() => setPerson1Yes(!person1Yes)}
            />
            {populatedFormData.person1firstName}{' '}
            {populatedFormData.person1lastName}
          </label>
        </div>

        {showPerson2 && (
          <div className="checkbox-container">
            <label htmlFor="person-2">
              <input
                type="checkbox"
                className="checkbox"
                id="person-2"
                checked={person2Yes}
                onChange={() => setPerson2Yes(!person2Yes)}
              />
              {person2Name}
            </label>
          </div>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="button"
          onClick={() => dispatch(submitRsvpForm())}
        >
          Submit RSVP
        </button>
      </div>
    </form>
  );
};

export default RSVPFormStep2;
