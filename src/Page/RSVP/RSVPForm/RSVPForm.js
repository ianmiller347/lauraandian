import { useSelector } from 'react-redux';
import { getRsvpFindState } from '../../../ducks/rsvp';
import RSVPFormStep1 from './RSVPFormStep1';
import RSVPFormStep2 from './RSVPFormStep2';
import './RSVPForm.css';

const RSVPForm = () => {
  const formData = useSelector((state) => getRsvpFindState(state));
  console.log('form data', formData);

  if (formData.error) {
    return <div>Sorry the page broke lol my bad, try again</div>;
  }

  if (formData.isLoading) {
    return <div>Finding your RSVP...</div>;
  }

  if (formData.data) {
    return <RSVPFormStep2 />;
  }

  return <RSVPFormStep1 />;
};

export default RSVPForm;
