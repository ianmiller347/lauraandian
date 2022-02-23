import { useSelector } from 'react-redux';
import { getPageBySlug } from '../../ducks/pages';
import './RSVP.css';

const RSVP = () => {
  const rsvpContent = useSelector((state) => getPageBySlug(state, 'rsvp'));

  return (
    <div className="page rsvp page--no-top-image">
      <h1 className="page-title">RSVP</h1>
      <div className="page-content-container">
        <div
          dangerouslySetInnerHTML={{ __html: rsvpContent?.content.rendered }}
        />
      </div>
    </div>
  );
};

export default RSVP;
