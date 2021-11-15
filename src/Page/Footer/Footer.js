import './Footer.css';

const Footer = () => {
  const dateText = '9.24.2022';
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="initials">L &amp; I</div>
        <hr className="divider" />
        <div className="footer__date">{dateText}</div>
      </div>
    </footer>
  );
};

export default Footer;
