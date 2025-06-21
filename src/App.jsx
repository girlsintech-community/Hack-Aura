import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Countdown from './Countdown';
import CodeOfConduct from './CodeOfConduct';
import Footer from './Footer';
import Timeline from './Timeline';
import FAQ from './FAQ' ;

// Create a component for your homepage content
function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="aurora-bg" id="home">
        <h1>Welcome to HackAura</h1>
        <p>Illuminate Innovation</p>
        <div className="button-group">
          <button className="btn-primary">Register</button>
          <button className="btn-secondary">Explore</button>
        </div>
      </div>

      <Countdown />

      {/* Page Sections */}
      <div id="about">{/* About Section */}</div>
      <div id="timeline"><Timeline /></div>
      <div id="sponsors">{/* Sponsors */}</div>
      <div id="faq"><FAQ /></div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
