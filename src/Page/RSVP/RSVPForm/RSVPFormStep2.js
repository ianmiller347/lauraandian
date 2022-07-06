import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRsvpFindState,
  getRsvpSubmitState,
  submitRsvpForm,
} from '../../../ducks/rsvp';
import { resetFindRsvp } from '../../../ducks/rsvp/find';
import PopulatedRsvp from './PopulatedRsvp';
import RSVPFormSubmitted from './RSVPFormSubmitted';

const RSVPFormStep2 = () => {
  const dispatch = useDispatch();
  const [person1Yes, setPerson1Yes] = useState(false);
  const [person2Yes, setPerson2Yes] = useState(false);
  const populatedFormData = useSelector(
    (state) => getRsvpFindState(state)?.data
  );
  const submittingForm = useSelector((state) => getRsvpSubmitState(state));
  const isSubmitting = submittingForm?.isLoading;

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

  const hasCouple = populatedFormData.formalNames.includes('Mr. and Mrs.');

  const showPerson2 = populatedFormData.person2firstName || guestCount > 1;
  let person1Name = populatedFormData.person1firstName
    ? `${populatedFormData.person1firstName} ${populatedFormData.person1lastName}`
    : populatedFormData.formalNames;
  let person2Name = populatedFormData.person2firstName
    ? `${populatedFormData.person2firstName} ${populatedFormData.person2lastName}`
    : 'Guest';
  if (person2Name === 'Guest' && hasCouple) {
    const person2FormalName =
      populatedFormData.formalNames.split('Mr. and ')[1];
    person2Name = person2FormalName;
    const coupleLastName = person2FormalName.split('Mrs. ')[1];
    const person1FormalName = `Mr. ${coupleLastName}`;
    person1Name = person1FormalName;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // just take the whole object from found rsvp, spread it and upsert the local state
    const submissionData = {
      ...populatedFormData,
      person1attending: person1Yes,
      person2attending:
        person2Yes || (hasCouple && !populatedFormData.person2firstName),
    };
    dispatch(submitRsvpForm(submissionData));
  };

  if (isSubmitting || submittingForm?.error || submittingForm?.data) {
    return <RSVPFormSubmitted />;
  }

  return (
    <form onSubmit={handleSubmit}>
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
            {person1Name}
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
        <button type="submit" className="button">
          Submit RSVP
        </button>
      </div>
    </form>
  );
};

export default RSVPFormStep2;
