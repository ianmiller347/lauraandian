/**
 * It is a hamburger but it turn into an X when active
 * @param {onClick, isActive} props - handle click and whether it's actively showing
 * @returns Hamburbger or X depending on state lol
 */
const Hamburger = ({ onClick, isActive }) => (
  <div
    className={`hamburger-container ${
      isActive ? 'hamburger-container__active' : ''
    }`}
  >
    <button className="hamburger__button" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="30"
        viewBox="0 0 40 30"
        strokeLinecap="round"
        strokeWidth="3"
        strokeLinejoin="round"
        stroke="black"
        fill="none"
        className="hamburger__svg"
      >
        <line className="hamburger__top" x1="2" y1="2" x2="35" y2="2" />
        <line className="hamburger__middle" x1="2" y1="14" x2="35" y2="14" />
        <line className="hamburger__bottom" x1="2" y1="26" x2="35" y2="26" />
      </svg>
    </button>
  </div>
);

export default Hamburger;
