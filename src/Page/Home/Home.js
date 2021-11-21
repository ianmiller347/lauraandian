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
        <div className="time-and-details">
          <div className="time">
            <h4>7:30 PM: Welcome party</h4>
          </div>
          <div className="details">
            <div>Location, location</div>
            <div>Attire: Cocktail</div>
          </div>
        </div>
        <h3 className="section-title">Wedding Day</h3>
        <div className="date">September 24, 2022</div>
        <div className="time-and-details">
          <div className="time">
            <h4>5:30 PM: Ceremony</h4>
          </div>
          <div className="details">
            <div>Immaculate Conception Jesuit Church</div>
            <div>130 Baronne Street, New Orleans, LA, 70112</div>
            <div>Attire: Cocktail</div>
          </div>
        </div>
        <div className="time-and-details">
          <div className="time">
            <h4>7:00 PM: Reception</h4>
          </div>
          <div className="details">
            <div>Orléans Club</div>
            <div>5005 Saint Charles Avenue, New Orleans, LA, 70115</div>
            <div>Attire: Cocktail</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
