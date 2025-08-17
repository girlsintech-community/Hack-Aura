import React, { useState, Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import ShiftingCountdown from './ShiftingCountdown';
const CodeOfConduct = lazy(() => import('./CodeOfConduct'));
const Footer = lazy(() => import('./Footer'));
const Timeline = lazy(() => import('./Timeline'));
const About = lazy(() => import('./About'));
const OrganizationAbout = lazy(() => import('./AboutOrg'));
const FAQ = lazy(() => import('./FAQ'));
const Humans = lazy(() => import('./Humans'));
const Sponsorships = lazy(() => import('./Sponsor'));
const ContactPopup = lazy(() => import('./Contact'));
const RollingGallery = lazy(() => import('./Tracks'));
const ShootingStars = lazy(() => import('./ShootingStars'));
// Loading spinner for Suspense fallback
const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: '#fff' }}>
    <div>Loading...</div>
  </div>
);

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
        <Suspense fallback={<LoadingSpinner />}>
          <div id="about" className="section-wrapper section-about">
            <About />
            <OrganizationAbout />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <div id="timeline" className="section-wrapper section-timeline">
            <Timeline />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <div id="tracks" className="section-wrapper section-events tracks-gradient">
            <RollingGallery />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <div id="sponsors" className="section-wrapper section-events">
            <Sponsorships />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <div id="faq" className="section-wrapper section-contact faq-gradient">
            <FAQ />
          </div>
        </Suspense>
      </div>
    </div>
  );
}

// TeamPage Component
function TeamPage({ onContactClick }) {
  return (
    <>
      <Navbar onContactClick={onContactClick} />
      <Suspense fallback={<LoadingSpinner />}>
        <div className="section-team">
          <Humans />
        </div>
      </Suspense>
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
        <Suspense fallback={null}>
          <ShootingStars />
        </Suspense>
        <Routes>
          <Route path="/" element={<HomePage onContactClick={handleContactClick} />} />
          <Route path="/code-of-conduct" element={
            <Suspense fallback={<LoadingSpinner />}>
              <CodeOfConduct />
            </Suspense>
          } />
          <Route path="/humans" element={<TeamPage onContactClick={handleContactClick} />} />
        </Routes>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer onContactClick={handleContactClick} />
        </Suspense>
        {showContact && (
          <Suspense fallback={null}>
            <ContactPopup onClose={closePopup} />
          </Suspense>
        )}
      </div>
    </Router>
  );
}

export default App;
