import React from 'react';
import './Sponsor.css';

const HackathonSponsors = () => {
  return (
    <section className="hackathon-sponsors" id="sponsors">
      <div className="sponsors-container">
        <div className="sponsors-header">
          <h2>HACKATHON SPONSORS & PARTNERS</h2>
          <p className="subtitle">Join us in powering innovation - Support the next generation of tech talent</p>
        </div>

        <div className="sponsor-call">
          <div className="call-card">
            <h3>Why Sponsor?</h3>
            <ul>
              <li>Direct access to top tech talent</li>
              <li>Brand visibility before 2000+ participants</li>
              <li>Recruitment opportunities</li>
              <li>Tech community engagement</li>
            </ul>
          </div>

          <div className="cta-card">
            <h3>Get Involved</h3>
            <button className="sponsor-button">
              Express Interest
              <span className="cyber-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonSponsors;