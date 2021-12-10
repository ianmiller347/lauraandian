import useVisibility from '../../hooks/useVisibility';
import './ScrollInOnViewBox.css';

const ScrollInOnViewBox = ({
  children,
  fromDirection = 'left',
  animDelay = '.25s',
  displayType = 'block',
}) => {
  const [isInView, theBox] = useVisibility(0);

  return (
    <div
      ref={theBox}
      style={{
        animationDelay: animDelay,
        display: displayType,
      }}
      className={`scroll-in-on-view-box ${
        isInView ? 'scroll-in-on-view-box--visible' : ''
      } scroll-in-on-view-box--${fromDirection}`}
    >
      {children}
    </div>
  );
};

export default ScrollInOnViewBox;
