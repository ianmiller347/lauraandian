import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import { getPageBySlug } from '../../ducks/pages';
import RSVPForm from './RSVPForm/RSVPForm';
import './RSVP.css';

/**
 * RSVP is a multi-step form for setting rsvp status
 * step 1: input full name. send form to get /api/rsvp/lookup?fullname=fullname
 * return info retrieved for that name, including other members in the group
 * step 2: check boxes next to guest names who will be attending for each event
 * send form data to post /api/rsvp/update and update rsvp status for that group
 * @returns RSVP page
 */
const RSVP = () => {
  // const rsvpContent = useSelector((state) => getPageBySlug(state, 'rsvp'));

  return (
    <div className="page rsvp page--no-top-image">
      <Helmet>
        <title>Laura and Ian Wedding | RSVP</title>
      </Helmet>
      <h1 className="page-title">RSVP</h1>
      <div className="page-content-container">
        {/* <div
          dangerouslySetInnerHTML={{ __html: rsvpContent?.content.rendered }}
        /> */}
        <RSVPForm />
      </div>
    </div>
  );
};

export default RSVP;
