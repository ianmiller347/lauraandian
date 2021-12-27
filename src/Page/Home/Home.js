import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Schedule from './Schedule/Schedule';
import './Home.css';

export const slowlyScrollIntoView = (element) => {
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Home = () => {
  const bgImg = 'https://i.ibb.co/M8HVx9d/002-Adams-NYC-Engagement-WEB.jpg';
  const [bgImageLoaded, setBgImageLoaded] = useState(false);
  const HomeSection = useRef(null);
  const location = useLocation();

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
          onLoad={() => setBgImageLoaded(true)}
        />
      </div>
      <Schedule bgImageLoaded={bgImageLoaded} />
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
