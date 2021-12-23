import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Travel from './Travel';
import WeddingParty from './WeddingParty';
import Photos from './Photos';
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
            <Route path="/photos" element={<Photos />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/wedding-party" element={<WeddingParty />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </PageBody>
        <Footer />
      </Router>
    </div>
  );
};

export default Page;
