import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Travel from './Travel';
import WeddingParty from './WeddingParty';
import Photos from './Photos';
import PageBody from './PageBody';
import Footer from './Footer';
import PageHeader from './PageHeader';
import Faq from './Faq';
import RSVP from './RSVP';
import NotFound from './NotFound';
import Registry from './Registry';
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
            <Route path="/faq" element={<Faq />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageBody>
        <Footer />
      </Router>
    </div>
  );
};

export default Page;
