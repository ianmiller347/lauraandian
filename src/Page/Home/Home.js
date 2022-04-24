import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Helmet from 'react-helmet';
import Schedule from './Schedule/Schedule';
import { useSelector } from 'react-redux';
import { getPageBySlug } from '../../ducks/pages';
import useVisibility from '../../hooks/useVisibility';
import BackgroundImageContainer from '../../components/BackgroundImageContainer';
import DateAndCountdown from '../../components/DateAndCountdown';
import './Home.css';

export const slowlyScrollIntoView = (element) => {
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Home = () => {
  const [bgImageLoaded, setBgImageLoaded] = useState(false);
  const HomeSection = useRef(null);
  const location = useLocation();
  const homePageData = useSelector((state) => getPageBySlug(state, 'home'));
  const [isInView, homeContentRef] = useVisibility(0);

  // only fire when location changes
  useEffect(() => {
    if (
      !location.hash &&
      location.pathname === '/' &&
      HomeSection &&
      bgImageLoaded
    ) {
      slowlyScrollIntoView(HomeSection.current);
    }
  }, [location, HomeSection, bgImageLoaded]);

  return (
    <div className="home" ref={HomeSection}>
      <Helmet>
        <title>Laura and Ian Wedding | Schedule and events</title>
      </Helmet>
      <BackgroundImageContainer
        pageData={homePageData}
        footerOrHeader="header"
        altText="laura and ian in west village"
        onLoad={() => setBgImageLoaded(true)}
      />
      <div className="us text-center">
        <div className="us__inner">
          <h2 className="us__heading">
            <span className="laura">
              Laura <br /> Adams
            </span>
            <span className="and">&amp;</span>
            <span className="ian">
              Ian <br /> Miller
            </span>
          </h2>
        </div>
        <DateAndCountdown />
      </div>
      <Schedule bgImageLoaded={bgImageLoaded} />
      <div
        className={`home__page-data ${
          isInView ? 'home__page-data--visible' : ''
        }`}
        ref={homeContentRef}
      >
        {homePageData && (
          <div
            dangerouslySetInnerHTML={{ __html: homePageData.content.rendered }}
          />
        )}
      </div>
      <BackgroundImageContainer
        pageData={homePageData}
        footerOrHeader="footer"
        altText="laura and ian lookin over at jersey lol"
      />
    </div>
  );
};

export default Home;
