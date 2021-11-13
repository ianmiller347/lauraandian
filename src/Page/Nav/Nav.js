import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__items">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/info">Info</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
