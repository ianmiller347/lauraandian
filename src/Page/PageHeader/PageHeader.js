import useWindowScroll from '../../hooks/useWindowScroll';
import Nav from '../Nav';
import './PageHeader.css';

const useDaysRemaining = () => {
  const weddingDate = new Date('2022-09-24');
  const rightNow = new Date();
  const msInADay = 1000 * 60 * 60 * 24;
  const daysRemaining = Math.ceil(
    (weddingDate.getTime() - rightNow.getTime()) / msInADay
  );
  return daysRemaining;
};

const PageHeader = () => {
  const daysRemaining = useDaysRemaining();
  const { scrollY } = useWindowScroll();
  const isHeaderScrolled = scrollY > 160;

  return (
    <header
      className={`page__header ${
        isHeaderScrolled ? 'page__header--scrolled' : ''
      }`}
    >
      <div className="shrink-wrap">
        <h1 className="site-name">Laura &amp; Ian</h1>
        <div className="date-info">
          <time className="wedding-date">September 24, 2022</time>
          <div className="wedding-location">New Orleans, LA</div>
          <div className="countdown">{daysRemaining} Days to go!</div>
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default PageHeader;
