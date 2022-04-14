const BackgroundImageContainer = ({
  footerOrHeader = 'header',
  pageData,
  altText,
  onLoad = () => true,
}) => {
  const imageField = `${footerOrHeader}_image`;
  const imageSource = pageData?.[imageField]?.guid;
  if (!imageSource) {
    return null;
  }
  return (
    <div className="background-image-container">
      <img
        src={imageSource}
        className="background-image"
        alt={altText}
        onLoad={onLoad}
      />
    </div>
  );
};

export default BackgroundImageContainer;
