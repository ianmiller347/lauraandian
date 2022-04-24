import DateAndCountdown from '../../components/DateAndCountdown';
import useWindowScroll from '../../hooks/useWindowScroll';
import Nav from '../Nav';
import './PageHeader.css';

const PageHeader = () => {
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
        <DateAndCountdown />
      </div>
      <Nav />
    </header>
  );
};

export default PageHeader;
