import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from './Hamburger';
import './Nav.css';

const Nav = () => {
  const { pathname, hash } = useLocation();
  const [isShowingMobileNav, setIsShowingMobile] = useState(false);
  const getIsActivePath = (linkToMatch, isExact = false) =>
    linkToMatch === pathname && ((isExact && !hash) || !isExact)
      ? 'nav__link--active'
      : '';
  const getIsActiveHash = (linkToMatch) =>
    linkToMatch === hash ? 'nav__link--active' : '';

  useEffect(() => {
    // if u change location it should hide the nav if it's active
    setIsShowingMobile(false);
  }, [hash, pathname]);
  return (
    <nav className="nav">
      <Hamburger
        onClick={() => setIsShowingMobile(!isShowingMobileNav)}
        isActive={isShowingMobileNav}
      />
      <ul
        className={`nav__items ${
          isShowingMobileNav ? 'nav__items--visible' : ''
        }`}
      >
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
            className={`nav__link ${getIsActivePath('/travel')}`}
          >
            Travel
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/wedding-party"
            className={`nav__link ${getIsActivePath('/wedding-party')}`}
          >
            Wedding Party
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/photos"
            className={`nav__link ${getIsActivePath('/photos')}`}
          >
            Photos
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/registry"
            className={`nav__link ${getIsActivePath('/registry')}`}
          >
            Registry
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/faq" className={`nav__link ${getIsActivePath('/faq')}`}>
            FAQs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
