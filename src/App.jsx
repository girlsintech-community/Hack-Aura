import React, { useState } from 'react';
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
import FAQ from './FAQ';
import Humans from './Humans';
import Sponsorships from './Sponsor';
import ContactPopup from './Contact';
import HackathonTracks from './Tracks';

// HomePage Component
function HomePage({ onContactClick }) {
  return (
    <>
      <Navbar onContactClick={onContactClick} />
      <Hero />
      <Countdown />
      <div id="about">
        <About />
        <OrganizationAbout />
      </div>
      <div id="timeline"><Timeline /></div>
      <div id="tracks"><HackathonTracks /></div>
      <div id="sponsors"><Sponsorships /></div>
      <div id="faq"><FAQ /></div>
    </>
  );
}

// TeamPage Component
function TeamPage({ onContactClick }) {
  return (
    <>
      <Navbar onContactClick={onContactClick} />
      <Humans />
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
      <Routes>
        <Route path="/" element={<HomePage onContactClick={handleContactClick} />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
        <Route path="/humans" element={<TeamPage onContactClick={handleContactClick} />} />
      </Routes>

      <Footer onContactClick={handleContactClick} />

      {showContact && <ContactPopup onClose={closePopup} />}
    </Router>
  );
}

export default App;
