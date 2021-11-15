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
        <Link to="/gallery" className="nav__link">
          Gallery
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

export default Nav;
