import { Link } from 'react-router-dom';

const PopulatedRsvp = ({ rsvpData, resetRsvp }) => {
  const { address1, address2, city, state, zip, country, formalNames } =
    rsvpData;
  return (
    <div className="populated-rsvp margin-bottom">
      <h3>{formalNames}</h3>
      <address className="populated-rsvp__address">
        <div>
          {address1}
          {address2 ? ` ${address2}` : ''}
        </div>
        <div>
          {` ${city},`}
          {` ${state}`}
          {` ${zip}`}
        </div>
        <div>{` ${country}`}</div>
      </address>
      <p>
        <em>
          Not you? Try{' '}
          <Link to="/rsvp" onClick={resetRsvp}>
            finding your RSVP
          </Link>{' '}
          again with a more specific name.
        </em>
      </p>
    </div>
  );
};

export default PopulatedRsvp;
