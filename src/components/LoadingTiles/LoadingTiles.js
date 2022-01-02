import './LoadingTiles.css';

const LoadingTiles = ({ tiles = 8 }) => {
  const tilesArray = [...Array(tiles).keys()].map((x) => x + 1);
  return (
    <div className="loading-tiles">
      {tilesArray.map((tile) => (
        <div key={`_${tile}`} className="loading-tile" />
      ))}
    </div>
  );
};

export default LoadingTiles;
