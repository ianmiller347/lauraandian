import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findRsvpByName } from '../../../ducks/rsvp';

const RSVPFormStep1 = () => {
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState('');

  return (
    <form className="rsvp-form text-center">
      <div className="margin-bottom">
        <label htmlFor="fullname-lookup">
          <span className="label-text">Fill in your name</span>
          <input
            id="fullname-lookup"
            className="form-input"
            type="text"
            required
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="button"
          onClick={() => dispatch(findRsvpByName(fullname))}
        >
          Find your RSVP
        </button>
      </div>
    </form>
  );
};

export default RSVPFormStep1;
