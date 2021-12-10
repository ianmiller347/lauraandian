import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AddToCalendar from '../../components/AddToCalendar/AddToCalendar';
import ScrollInOnViewBox from '../../components/ScrollInOnViewBox/ScrollInOnViewBox';
import useVisibility from '../../hooks/useVisibility';
import { WeddingCake } from '../Icon';
import './Home.css';

const receptionDetails = {
  title: 'Laura and Ian Wedding Reception',
  description: 'Laura and Ian wedding reception at the Orléans Club',
  location: 'Orléans Club',
  startDate: '2022-09-24T19:30:00-05:00',
  endDate: '2022-09-24T21:30:00-05:00',
};

const welcomePartyDetails = {
  title: 'Laura and Ian Wedding Reception',
  description: 'Laura and Ian wedding reception at the Orléans Club',
  location: 'Orléans Club',
  startDate: '2022-09-23T18:30:00-05:00',
  endDate: '2022-09-23T20:30:00-05:00',
};

const ceremonyDetails = {
  title: 'Laura and Ian Wedding Ceremony',
  description: 'Laura and Ian wedding ceremony at Immaculate Conception',
  location: 'Immaculate Conception Jesuit Church',
  startDate: '2022-09-24T17:30:00-05:00',
  endDate: '2022-09-24T18:30:00-05:00',
};

const slowlyScrollIntoView = (element) => {
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Home = () => {
  const bgImg = 'https://i.ibb.co/M8HVx9d/002-Adams-NYC-Engagement-WEB.jpg';
  const [, ScheduleSection] = useVisibility(0);
  const [, HomeSection] = useVisibility(0);
  const location = useLocation();
  // fire when schedule s
  useEffect(() => {
    if (location.hash === '#schedule' && ScheduleSection) {
      slowlyScrollIntoView(ScheduleSection.current);
    }
  }, [location, ScheduleSection]);

  // only fire when location changes
  useEffect(() => {
    if (!location.hash && location.pathname === '/' && HomeSection) {
      slowlyScrollIntoView(HomeSection.current);
    }
  }, [location, HomeSection]);

  return (
    <div className="home" ref={HomeSection}>
      <div className="background-image-container">
        <img
          src={bgImg}
          className="background-image"
          alt="laura and ian lookin over at jersey lol"
        />
      </div>
      <div className="callout-content" id="schedule" ref={ScheduleSection}>
        <section className="section">
          <div className="section__title-container">
            <ScrollInOnViewBox displayType="inline-block">
              <div className="text-center icon-container">🍸</div>
              <h3 className="section-title">Welcome Party</h3>
              <div className="date">Friday, September 23, 2022</div>
            </ScrollInOnViewBox>
          </div>
          <div className="section__content-container">
            <ScrollInOnViewBox fromDirection="right" animDelay=".5s">
              <div className="time-and-details">
                <div className="time">
                  <div className="text-center icon-container">🥂</div>
                  <h4 className="subsection-title">Welcome drinks</h4>
                  <div>6:30 PM</div>
                </div>
                <div className="details">
                  <div className="location-title">Location, location</div>
                  <div className="location-address"></div>
                  <div className="attire">Attire: Cocktail</div>
                  <div className="location-cta-container">
                    <div className="cta-button-container">
                      <a
                        className="cta-button"
                        href="https://maps.google.com/?cid=6723444964055104338"
                      >
                        Map
                      </a>
                    </div>
                    <div className="cta-button-container">
                      <AddToCalendar
                        className="cta-button cta-button--atc"
                        eventDetails={welcomePartyDetails}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollInOnViewBox>
          </div>
        </section>
        <hr />
        <section className="section section--title-on-top">
          <div className="section__title-container section__title-container--on-top">
            <ScrollInOnViewBox displayType="inline-block">
              <div className="text-center icon-container">👰‍♀️</div>
              <h3 className="section-title">Wedding Day</h3>
              <div className="date">September 24, 2022</div>
            </ScrollInOnViewBox>
          </div>
          <div className="section__content-container">
            <ScrollInOnViewBox fromDirection="right" animDelay=".5s">
              <div className="time-and-details padding-bottom-2x">
                <div className="time">
                  <div className="text-center icon-container">💒</div>
                  <h4 className="subsection-title">Ceremony</h4>
                  <div>5:30 PM</div>
                </div>
                <div className="details">
                  <div className="location-title">
                    Immaculate Conception Jesuit Church
                  </div>
                  <div className="location-address">130 Baronne Street</div>
                  <div className="location-address">New Orleans, LA, 70112</div>
                  <div className="attire">Attire: Cocktail</div>
                  <div className="location-cta-container">
                    <div className="cta-button-container">
                      <a
                        className="cta-button"
                        href="https://maps.google.com/?cid=6723444964055104338"
                      >
                        Map
                      </a>
                    </div>
                    <div className="cta-button-container">
                      <AddToCalendar
                        className="cta-button cta-button--atc"
                        eventDetails={ceremonyDetails}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollInOnViewBox>
            <ScrollInOnViewBox animDelay=".5s">
              <div className="time-and-details">
                <div className="time">
                  <div className="text-center icon-container">
                    <WeddingCake size={54} />
                  </div>
                  <h4 className="subsection-title">Reception</h4>
                  <div>7:00 PM</div>
                </div>
                <div className="details">
                  <div className="location-title">Orléans Club</div>
                  <div className="location-address">
                    5005 Saint Charles Avenue
                  </div>
                  <div className="location-address">New Orleans, LA, 70115</div>
                  <div className="attire">Attire: Cocktail</div>
                  <div className="location-cta-container">
                    <div className="cta-button-container">
                      <a
                        className="cta-button"
                        href="https://www.google.com/maps/search/?api=1&query=29.92717170,-90.10908790&query_place_id=ChIJqZDIz1SkIIYRvXBFK_BYjTw"
                      >
                        Map
                      </a>
                    </div>
                    <div className="cta-button-container">
                      <AddToCalendar
                        className="cta-button cta-button--atc"
                        eventDetails={receptionDetails}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollInOnViewBox>
          </div>
        </section>
      </div>
      <div>
        <img
          className="background-image"
          src="https://i.ibb.co/hFwRg8g/laura-ian-west-village.jpg"
          alt="laura and ian in west village"
          border="0"
        />
      </div>
    </div>
  );
};

export default Home;
