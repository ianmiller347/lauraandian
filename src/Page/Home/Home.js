import './Home.css';

const Home = () => {
  const bgImg = 'https://i.ibb.co/M8HVx9d/002-Adams-NYC-Engagement-WEB.jpg';
  return (
    <div className="home">
      <img
        src={bgImg}
        className="background-image"
        alt="laura and ian lookin over at jersey lol"
      />
      <div className="callout-content">
        <h3 className="section-title">Welcome Party</h3>
        <div className="date">Friday, September 23, 2022</div>
        <div className="flex">
          <div className="time">
            <h4>7:30 PM</h4>
          </div>
          <div className="">
            <h4>Welcome party</h4>
            <div>Location, location</div>
            <div>Attire: Cocktail</div>
          </div>
        </div>
        <h3 class="section-title">Wedding Day</h3>
        <div className="">September 24, 2022</div>
        <div className="flex">
          <div className="time">
            <h4>5:30 PM</h4>
          </div>
          <div>
            <h4>Ceremony</h4>
            <div>Immaculate Conception Jesuit Church</div>
            <div>130 Baronne Street, New Orleans, LA, 70112</div>
            <div>Attire: Cocktail</div>
          </div>
        </div>
        <div className="flex">
          <div className="time">
            <h4>7:00 PM</h4>
          </div>
          <div>
            <div>Orléans Club</div>
            <div>5005 Saint Charles Avenue, New Orleans, LA, 70115, USA</div>
            <div>Attire: Cocktail</div>
          </div>
        </div>
      </div>
      <div className="frame-container">
        <iframe
          title="the knot"
          className="frame"
          width="100%"
          height="100%"
          src="http://www.lauraandian.wedding/us/laura-adams-and-ian-miller-sep-2022"
        />
      </div>
    </div>
  );
};

export default Home;
