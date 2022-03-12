import { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import LoadingTiles from '../../components/LoadingTiles';
import { fetchHotels, getHotelsState } from '../../ducks/hotels';
import HotelCard from './HotelCard';
import './Travel.css';

const Travel = () => {
  const bgImg =
    'https://i.ibb.co/xfSsP9r/509dc5f52d83b57ab762afdb621e4052-xxlarge.jpg';

  const dispatch = useDispatch();
  const hotels = useSelector((state) => getHotelsState(state)?.data);
  const isLoadingHotels = useSelector(
    (state) => getHotelsState(state)?.isLoading
  );
  const pages = useSelector((state) => state.blogPages?.data);
  const travelPage = pages?.find((page) => page.slug === 'travel');

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  const hotelBlockInfo = travelPage?.page_blurb;

  return (
    <div className="travel">
      <Helmet>
        <title>Laura and Ian Wedding | Travel &amp; Things to do</title>
      </Helmet>
      <div className="background-image-container">
        <img
          src={bgImg}
          className="background-image"
          alt="laura and ian lookin over at jersey lol"
        />
      </div>
      <div>
        <h1 className="page__title">Travel &amp; Accomodations</h1>
        <div className="text-content">
          <h2>Hotels</h2>
          {hotelBlockInfo && (
            <div dangerouslySetInnerHTML={{ __html: hotelBlockInfo }} />
          )}
          {isLoadingHotels && (
            <LoadingTiles tiles={3} message="Loading hotel information..." />
          )}
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
          <div className="page-content">
            <div
              dangerouslySetInnerHTML={{
                __html: travelPage?.content?.rendered,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
