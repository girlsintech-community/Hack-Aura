import {React,useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Countdown from './Countdown';
import CodeOfConduct from './CodeOfConduct';
import Footer from './Footer';
import Timeline from './Timeline';
import About from './About';
import OrganizationAbout from './AboutOrg';
import FAQ from './FAQ' ;
import Humans from './Humans';
import Sponsorships from './Sponsor';
import ContactPopup from './Contact';

// Create a component for your homepage content
function HomePage() {

  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
  };

  const closePopup = () => {
    setShowContact(false);
  };
  return (
    <>
      <Navbar onContactClick={handleContactClick}  />
<Hero />
      {/* Hero Section */}
     

      <Countdown />

      {/* Page Sections */}
      <div id = "about" >
        <About/>
        <OrganizationAbout/>
        </div>
      
      <div id="timeline"><Timeline /></div>
      <div id="sponsors"><Sponsorships/></div>
      <div id="faq"><FAQ /></div>
      {showContact && <ContactPopup onClose={closePopup} />}
    </>
  );
}

function App() {

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
        <Route path="/humans" element={<Humans />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
