import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Home';
import Gallery from './Gallery';
import Nav from './Nav';
import PageBody from './PageBody';
import Footer from './Footer';
import './Page.css';

const Page = () => {
  const weddingDate = new Date('2022-09-24');
  const rightNow = new Date();
  const msInADay = 1000 * 60 * 60 * 24;
  const daysRemaining = Math.ceil(
    (weddingDate.getTime() - rightNow.getTime()) / msInADay
  );
  return (
    <div className="page">
      <Router>
        <header className="page__header">
          <h1 className="site-name">Laura &amp; Ian</h1>
          <div className="date-info">
            <date className="wedding-date">SEPTEMBER 24, 2022</date>
            <span> • </span>
            <location>NEW ORLEANS, LA</location>
            <div className="countdown">{daysRemaining} DAYS TO GO!</div>
          </div>
          <Nav />
        </header>
        <PageBody>
          <Routes>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/info" element={<Info />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </PageBody>
        <Footer />
      </Router>
    </div>
  );
};

export default Page;
