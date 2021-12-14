import HotelCard from './HotelCard';
import './Travel.css';

const hotels = [
  {
    displayName: 'The Roosevelt New Orleans, A Waldorf Astoria Hotel',
    description: '',
    imageSrc: 'https://i.ibb.co/dm48pTg/roosevelt-hotel-WEB.jpg',
    mapsUrl: '',
    websiteUrl:
      'https://www.hilton.com/en/hotels/msyrhwa-the-roosevelt-new-orleans/',
    streetAddress: '130 Roosevelt Way',
    cityStateZip: 'New Orleans, LA 70112',
    phoneNumber: '(504) 648-1200',
  },
  {
    displayName: 'AC Hotel by Marriott New Orleans French Quarter',
    description: '',
    imageSrc: 'https://i.ibb.co/RgHNHs3/ac-bourbon-hotel-WEB.jpg',
    mapsUrl: '',
    websiteUrl:
      'https://www.marriott.com/hotels/travel/msyac-ac-hotel-new-orleans-french-quarter/',
    streetAddress: '221 Carondelet Street',
    cityStateZip: 'New Orleans, LA 70130',
    phoneNumber: '(504) 962-0700',
  },
  {
    displayName: 'The Pontchartrain Hotel',
    description: '',
    imageSrc: 'https://i.ibb.co/h9wvVnx/Pontchartrain-hotel-WEB.jpg',
    mapsUrl: '',
    websiteUrl: 'https://thepontchartrainhotel.com/',
    streetAddress: '2031 Saint Charles Avenue',
    cityStateZip: 'New Orleans, LA 70130',
    phoneNumber: '(504) 941-9000',
  },
];

const Travel = () => {
  const bgImg =
    'https://i.ibb.co/xfSsP9r/509dc5f52d83b57ab762afdb621e4052-xxlarge.jpg';
  return (
    <div className="travel">
      <div className="background-image-container">
        <img
          src={bgImg}
          className="background-image"
          alt="laura and ian lookin over at jersey lol"
        />
      </div>
      <div>
        <h1 className="page__title">Travel</h1>
        <div className="text-content">
          <h2>Getting there</h2>
          <h3>From the airport</h3>
          <p>Travel copy</p>
          <h3>From downtown</h3>
          <p>Travel copy</p>
          <h2>Accommodations</h2>
          <h3>Hotels</h3>
          <div>
            <ul className="hotel-cards-list">
              {hotels.map((hotel) => (
                <HotelCard
                  key={hotel.displayName}
                  imageSrc={hotel.imageSrc}
                  displayName={hotel.displayName}
                  description={hotel.description}
                  websiteUrl={hotel.websiteUrl}
                  streetAddress={hotel.streetAddress}
                  cityStateZip={hotel.cityStateZip}
                  phoneNumber={hotel.phoneNumber}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
