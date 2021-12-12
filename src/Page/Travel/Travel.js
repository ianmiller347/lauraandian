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
        <h1>Travel</h1>
        <div className="text-content">
          <h3>Getting there</h3>
          <h4>From the airport</h4>
          <p>Travel copy</p>
          <h4>From downtown</h4>
          <p>Travel copy</p>
          <h3>Accommodations</h3>
          <h4>Hotels</h4>
          <div>
            <ul>
              {hotels.map((hotel) => (
                <li key={hotel.displayName}>
                  <img src={hotel.imageSrc} alt={hotel.displayName} />
                  <h5>{hotel.displayName}</h5>
                  <p>{hotel.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
