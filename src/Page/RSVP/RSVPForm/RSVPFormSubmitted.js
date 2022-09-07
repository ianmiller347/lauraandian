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

  const person1attending = data[6];
  // const person2attending = data[7];

  const getText = (isAttending) =>
    isAttending ? 'Attending' : 'Not attending';

  const message = person1attending
    ? `Can't wait to celebrate with you!`
    : `We are sad that you can't make it.`;

  return (
    <div className="rsvp--submitted">
      <h3>Successfully submitted your RSVP.</h3>
      <h4>{message}</h4>
      <div className="rsvp__person-info">
        <em>{data[0]}:</em>
        <em> {getText(person1attending)}</em>
      </div>
    </div>
  );
};

export default RSVPFormSubmitted;
