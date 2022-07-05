import { useSelector } from 'react-redux';
import { getRsvpSubmitState } from '../../../ducks/rsvp';

const RSVPFormSubmitted = () => {
  const { isLoading, data, error } = useSelector((state) =>
    getRsvpSubmitState(state)
  );
  if (isLoading) {
    return <div>Submitting your RSVP...</div>;
  }

  if (error) {
    return (
      <div className="error">
        Sorry! There was a problem submitting your RSVP. Try again.
      </div>
    );
  }

  return (
    <div className="rsvp--submitted">
      <h3>
        Successfully submitted your RSVP. Can't wait to celebrate with you!
      </h3>
      <div className="rsvp__person-info">
        <em>{data[0]}</em>
      </div>
    </div>
  );
};

export default RSVPFormSubmitted;
