import React, { useState, useEffect } from 'react';
import './About.css';


const OrganizationAbout = () => {
  

  return (
    <section id="organization" className="org-section">
      <div className="org-container">
        <div className="org-content">
          <h2>ABOUT <span className="cyber-glitch">TECHFUTURES</span></h2>
          
          <div className="org-details">
            <p className="org-highlight">
              Pioneering hackathons since 2015 with a vision to democratize tech innovation.
            </p>
            <p>
              We're a collective of engineers, designers, and educators committed to building 
              the next generation of tech creators. Our events have empowered over 50,000 
              participants across 15 countries.
            </p>
            
            <div className="org-stats-container">
              <div className="outer">
                <div className="card">
                  <div className="ray"></div>
                  <div className="number">50k+</div>
                  <div className="label">Members</div>
                </div>
              </div>

              <div className="outer">
                <div className="card">
                  <div className="ray"></div>
                  <div className="number">15</div>
                  <div className="label">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default OrganizationAbout;