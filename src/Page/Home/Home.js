import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Helmet from 'react-helmet';
import Schedule from './Schedule/Schedule';
import { useSelector } from 'react-redux';
import { getPagesState } from '../../ducks/pages';
import useVisibility from '../../hooks/useVisibility';
import './Home.css';

export const slowlyScrollIntoView = (element) => {
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Home = () => {
  const footerBgImg =
    'https://i.ibb.co/M8HVx9d/002-Adams-NYC-Engagement-WEB.jpg';
  const headerBgImg = 'https://i.ibb.co/hFwRg8g/laura-ian-west-village.jpg';
  const [bgImageLoaded, setBgImageLoaded] = useState(false);
  const HomeSection = useRef(null);
  const location = useLocation();
  const pages = useSelector((state) => getPagesState(state)?.data ?? []);
  const homePageData = pages.find((page) => page.slug === 'home');
  const [isInView, homeContentRef] = useVisibility(0);

  // only fire when location changes
  useEffect(() => {
    if (!location.hash && location.pathname === '/' && HomeSection) {
      slowlyScrollIntoView(HomeSection.current);
    }
  }, [location, HomeSection]);

  return (
    <div className="home" ref={HomeSection}>
      <Helmet>
        <title>Laura and Ian Wedding | Schedule and events</title>
      </Helmet>
      <div className="background-image-container">
        <img
          src={headerBgImg}
          className="background-image"
          alt="laura and ian in west village"
          onLoad={() => setBgImageLoaded(true)}
        />
      </div>
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
      <div>
        <img
          className="background-image"
          src={footerBgImg}
          alt="laura and ian lookin over at jersey lol"
          border="0"
        />
      </div>
    </div>
  );
};

export default Home;
