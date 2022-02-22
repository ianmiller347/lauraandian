import './LoadingTiles.css';

const LoadingTiles = ({
  tiles = 8,
  message = '',
  styleOverrides = {},
  tileStyles = {},
}) => {
  const tilesArray = [...Array(tiles).keys()].map((x) => x + 1);
  return (
    <>
      {message && <div className="loading-message">{message}</div>}
      <div className="loading-tiles" style={styleOverrides}>
        {tilesArray.map((tile) => (
          <div key={`_${tile}`} className="loading-tile" style={tileStyles} />
        ))}
      </div>
    </>
  );
};

export default LoadingTiles;
