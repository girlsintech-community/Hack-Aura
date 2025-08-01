import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import ShiftingCountdown from './ShiftingCountdown';
import CodeOfConduct from './CodeOfConduct';
import Footer from './Footer';
import Timeline from './Timeline';
import About from './About';
import OrganizationAbout from './AboutOrg';
import FAQ from './FAQ';
import Humans from './Humans';
import Sponsorships from './Sponsor';
import ContactPopup from './Contact';
import RollingGallery from './Tracks';
import ShootingStars from './ShootingStars';

// HomePage Component
function HomePage({ onContactClick }) {
  return (
    <div className="main-page">
      <Navbar onContactClick={onContactClick} />
      <div className="hero-section">
        <Hero />
      </div>
      <div className="content-after-hero">
        <div className="section-wrapper countdown-gradient">
  <ShiftingCountdown />
  
</div>

<div id="about" className="section-wrapper section-about">
  <About />
  <OrganizationAbout />
</div>

<div id="timeline" className="section-wrapper section-timeline">
  
  <Timeline />

</div>

<div id="tracks" className="section-wrapper section-events tracks-gradient">
<RollingGallery/>
  
</div>

<div id="sponsors" className="section-wrapper section-events">
  <Sponsorships />
</div>

<div id="faq" className="section-wrapper section-contact faq-gradient">
  <FAQ />
</div>

      </div>
    </div>
  );
}

// TeamPage Component
function TeamPage({ onContactClick }) {
  return (
    <>
      <Navbar onContactClick={onContactClick} />
      <div className="section-team">
        <Humans />
      </div>
    </>
  );
}

// Main App Component
function App() {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
  };

  const closePopup = () => {
    setShowContact(false);
  };

  return (
    <Router>
      <div className="app-wrapper">
        {/* Shooting stars in the global background */}
        <ShootingStars />
      <Routes>
        <Route path="/" element={<HomePage onContactClick={handleContactClick} />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
        <Route path="/humans" element={<TeamPage onContactClick={handleContactClick} />} />
      </Routes>
      <Footer onContactClick={handleContactClick} />
      {showContact && <ContactPopup onClose={closePopup} />}
      </div>
    </Router>
  );
}

export default App;
