import { WeddingCake } from '../Icon';
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
        <section className="section">
          <div className="section__title-container">
            <div className="text-center icon-container">🍸</div>
            <h3 className="section-title">Welcome Party</h3>
            <div className="date">Friday, September 23, 2022</div>
          </div>
          <div className="section__content-container">
            <div className="time-and-details">
              <div className="time">
                <h4 className="subsection-title">Welcome party</h4>
                <div>7:30 PM</div>
              </div>
              <div className="details">
                <div>Location, location</div>
                <div className="attire">Attire: Cocktail</div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="section">
          <div className="section__title-container">
            <div className="text-center icon-container">👰‍♀️</div>
            <h3 className="section-title">Wedding Day</h3>
            <div className="date">September 24, 2022</div>
          </div>
          <div className="section__content-container">
            <div className="time-and-details">
              <div className="time">
                <div className="text-center icon-container">💒</div>
                <h4 className="subsection-title">Ceremony</h4>
                <div>5:30 PM</div>
              </div>
              <div className="details">
                <div>Immaculate Conception Jesuit Church</div>
                <div>130 Baronne Street, New Orleans, LA, 70112</div>
                <div className="attire">Attire: Cocktail</div>
              </div>
            </div>
            <div className="time-and-details">
              <div className="time">
                <div className="text-center icon-container">
                  <WeddingCake size={48} />
                </div>
                <h4 className="subsection-title">Reception</h4>
                <div>7:00 PM</div>
              </div>
              <div className="details">
                <div>Orléans Club</div>
                <div>5005 Saint Charles Avenue, New Orleans, LA, 70115</div>
                <div className="attire">Attire: Cocktail</div>
              </div>
            </div>
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
