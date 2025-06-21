import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
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

      {/* Page Sections */}
      <div id="about">
        {/* About Section Content Here */}
      </div>

      <div id="timeline">
        {/* Timeline Section Content Here */}
      </div>

      <div id="sponsors">
        {/* Sponsors Section (Partners + Sponsors) */}
      </div>

      <div id="footer">
        {/* Footer / Support Section */}
      </div>
    </>
  );
}

export default App;
