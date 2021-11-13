const Gallery = () => {
  const bgImg = 'https://i.ibb.co/M8HVx9d/002-Adams-NYC-Engagement-WEB.jpg';
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery__images">
        <div className="gallery__image">
          <img
            src={bgImg}
            className="background-image"
            alt="laura and ian lookin over at jersey lol"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
