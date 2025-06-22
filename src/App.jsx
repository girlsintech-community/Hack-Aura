import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './Navbar';
import Countdown from './Countdown';
import CodeOfConduct from './CodeOfConduct';
import Footer from './Footer';
import Timeline from './Timeline';
import About from './About';
import OrganizationAbout from './AboutOrg';
import FAQ from './FAQ' ;
import Humans from './Humans';
import Sponsorships from './Sponsor';

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
      <div id = "about" >
        <About/>
        <OrganizationAbout/>
        </div>
      
      <div id="timeline"><Timeline /></div>
      <div id="sponsors"><Sponsorships/></div>
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
        <Route path="/humans" element={<Humans />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
