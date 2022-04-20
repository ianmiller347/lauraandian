import { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import BackgroundImageContainer from '../../components/BackgroundImageContainer';
import LoadingTiles from '../../components/LoadingTiles';
import { fetchHotels, getHotelsState } from '../../ducks/hotels';
import { getPageBySlug } from '../../ducks/pages';
import useSortedItems from '../../hooks/useSortedItems';
import HotelCard from './HotelCard';
import './Travel.css';

const Travel = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => getHotelsState(state)?.data);
  const isLoadingHotels = useSelector(
    (state) => getHotelsState(state)?.isLoading
  );
  const travelPage = useSelector((state) => getPageBySlug(state, 'travel'));

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  const hotelBlockInfo = travelPage?.page_blurb;
  const sortedHotels = useSortedItems(hotels);

  return (
    <div className="travel">
      <Helmet>
        <title>Laura and Ian Wedding | Travel &amp; Things to do</title>
      </Helmet>
      <BackgroundImageContainer
        pageData={travelPage}
        footerOrHeader="header"
        altText="Laura and Ian lookin at each other in Mexico"
      />
      <div className="content-container-spacing">
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
              {sortedHotels?.map((hotel) => (
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
          <div className="page-content margin-bottom">
            <div
              dangerouslySetInnerHTML={{
                __html: travelPage?.content?.rendered,
              }}
            />
          </div>
        </div>
      </div>
      <div>
        {travelPage?.footer_image?.guid && (
          <img
            src={travelPage.footer_image.guid}
            className="background-image"
            alt="Laura and Ian kissin at an outside table at Dante"
          />
        )}
      </div>
    </div>
  );
};

export default Travel;
