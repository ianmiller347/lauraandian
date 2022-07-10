import './Footer.css';

const Footer = () => {
  const dateText = '9.24.2022';
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="monogram">
          <img
            src="https://lauraandian.wedding/manage/wp-content/uploads/2022/07/laura-ian-monogram.png"
            alt="Laura and Ian monogram"
            className="monogram__image"
          />
        </div>
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
