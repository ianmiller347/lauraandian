import './HotelCard.css';

const convertPhoneNumberToLink = (phoneNumber) =>
  `tel:+${phoneNumber.replaceAll('-', '')}`;

const HotelCard = ({
  displayName = '',
  imageSrc = '',
  description = '',
  websiteUrl = '',
  streetAddress = '',
  cityStateZip = '',
  phoneNumber = '',
}) => (
  <li className="hotel-card">
    <img className="hotel-card__image" src={imageSrc} alt={displayName} />
    <h4 className="hotel-card__title">{displayName}</h4>
    {description && <p className="text--with-linebreaks">{description}</p>}
    <div>
      <p className="hotel-card__line-item">{streetAddress}</p>
      <p className="hotel-card__line-item">{cityStateZip}</p>
      <p className="hotel-card__line-item">
        <a href={convertPhoneNumberToLink(phoneNumber)}>{phoneNumber}</a>
      </p>
    </div>

    <div>
      <a
        href={websiteUrl}
        title={`Book ${displayName}`}
        target="_blank"
        rel="noopener noreferrer"
        className="button button--link"
      >
        Book hotel
      </a>
    </div>
  </li>
);

export default HotelCard;
