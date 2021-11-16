import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Home';
import Gallery from './Gallery';
import PageBody from './PageBody';
import Footer from './Footer';
import './Page.css';
import PageHeader from './PageHeader';

const Page = () => {
  return (
    <div className="page">
      <Router>
        <PageHeader />
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
