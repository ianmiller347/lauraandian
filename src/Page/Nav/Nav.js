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
          <a
            href="https://www.zola.com/wedding/lauraandianmiller/photo"
            className={`nav__link ${getIsActivePath('/photos')}`}
          >
            Photos
          </a>
        </li>
        <li className="nav__item">
          <Link
            to="#schedule"
            className={`nav__link ${getIsActiveHash('#schedule')}`}
          >
            Schedule
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/travel" className="nav__link">
            Travel
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/info" className="nav__link">
            Info
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
