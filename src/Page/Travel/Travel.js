import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels, getHotelsState } from '../../ducks/hotels';
import HotelCard from './HotelCard';
import './Travel.css';

const Travel = () => {
  const bgImg =
    'https://i.ibb.co/xfSsP9r/509dc5f52d83b57ab762afdb621e4052-xxlarge.jpg';

  const dispatch = useDispatch();
  const hotels = useSelector((state) => getHotelsState(state)?.data);
  const pages = useSelector((state) => state.blogPages?.data);
  const travelPage = pages?.find((page) => page.slug === 'travel');

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

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
          <div className="page-content">
            <div
              dangerouslySetInnerHTML={{
                __html: travelPage?.content?.rendered,
              }}
            />
          </div>
          <div>
            <ul className="hotel-cards-list">
              {hotels?.map((hotel) => (
                <HotelCard
                  key={hotel.display_name}
                  imageSrc={hotel.image.guid}
                  displayName={hotel.display_name}
                  description={hotel.description}
                  websiteUrl={hotel.website_url}
                  streetAddress={hotel.street_address}
                  cityStateZip={hotel.city_state_zip}
                  phoneNumber={hotel.phone_number}
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
