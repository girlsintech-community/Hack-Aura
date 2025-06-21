import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Countdown from './Countdown';
import CodeOfConduct from './CodeOfConduct';
//import Hero from './Hero';
//import Timeline from './Timeline';

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
      <Countdown />

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

      <CodeOfConduct />
      <div id="footer">
        {/* Footer / Support Section */}
      </div>
    </>
  );
}

export default App;
