import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const location = useLocation();
  const getIsActivePath = (linkToMatch, isExact = false) =>
    linkToMatch === location.pathname &&
    ((isExact && !location.hash) || !isExact)
      ? 'nav__link--active'
      : '';
  const getIsActiveHash = (linkToMatch) =>
    linkToMatch === location.hash ? 'nav__link--active' : '';
  return (
    <nav className="nav">
      <ul className="nav__items">
        <li className="nav__item">
          <Link to="/" className={`nav__link ${getIsActivePath('/', true)}`}>
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/#schedule"
            className={`nav__link ${getIsActiveHash('#schedule')}`}
          >
            Schedule
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/travel"
            className={`nav__link ${getIsActiveHash('/travel')}`}
          >
            Travel
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/wedding-party"
            className={`nav__link ${getIsActiveHash('/wedding-party')}`}
          >
            Wedding party
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/photos"
            className={`nav__link ${getIsActiveHash('/photos')}`}
          >
            Photos
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/faq" className={`nav__link ${getIsActiveHash('/faq')}`}>
            FAQs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
