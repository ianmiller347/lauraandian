import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__items">
      <li className="nav__item">
        <Link to="/" className="nav__link">
          Home
        </Link>
      </li>
      <li className="nav__item">
        <a
          href="https://www.zola.com/wedding/lauraandianmiller/photo"
          className="nav__link"
        >
          Photos
        </a>
      </li>
      <li className="nav__item">
        <Link to="/info" className="nav__link">
          Info
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
