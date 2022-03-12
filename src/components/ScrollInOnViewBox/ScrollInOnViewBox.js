import useVisibility from '../../hooks/useVisibility';
import './ScrollInOnViewBox.css';

const ScrollInOnViewBox = ({
  children,
  fromDirection = 'left',
  animDelay = '.2s',
  displayType = 'block',
}) => {
  const [isInView, theBox] = useVisibility(0);

  return (
    <div ref={theBox} className="scroll-in-on-view-box-parent">
      <div
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
    </div>
  );
};

export default ScrollInOnViewBox;
