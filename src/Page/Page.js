import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Travel from './Travel';
import Info from './Info';
import Gallery from './Gallery';
import PageBody from './PageBody';
import Footer from './Footer';
import PageHeader from './PageHeader';
import './Page.css';

const Page = () => {
  return (
    <div className="page">
      <Router>
        <PageHeader />
        <PageBody>
          <Routes>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/travel" element={<Travel />} />
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
