import './Footer.css';

const Footer = () => {
  const dateText = '9.24.2022';
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="initials">L &amp; I</div>
        <hr className="divider" />
        <div className="footer__date">{dateText}</div>
        <div className="ian-made-this" title="Ian made this">
          &hearts;
        </div>
        <p className="text-small">Designed and built by Laura and Ian</p>
      </div>
    </footer>
  );
};

export default Footer;
