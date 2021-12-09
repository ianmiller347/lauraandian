import useVisibility from '../../hooks/useVisibility';
import './ScrollInOnViewBox.css';

const ScrollInOnViewBox = ({ children, fromDirection = 'left' }) => {
  // const [isInView, setIsInView] = useState(false);
  // const theBox = useRef(null);
  const [isInView, theBox] = useVisibility(100);

  return (
    <div
      ref={theBox}
      className={`scroll-in-on-view-box ${
        isInView ? 'scroll-in-on-view-box--visible' : ''
      } scroll-in-on-view-box--${fromDirection}`}
    >
      {children}
    </div>
  );
};

export default ScrollInOnViewBox;
