import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Home';
import Gallery from './Gallery';
import Nav from './Nav';
import PageBody from './PageBody';
import './Page.css';

const Page = () => {
  return (
    <div className="page">
      <Router>
        <header className="page__header">
          <h1 className="site-name">Laura &amp; Ian</h1>
          <Nav />
        </header>
        <PageBody>
          <Routes>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/info" element={<Info />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </PageBody>
      </Router>
    </div>
  );
};

export default Page;
