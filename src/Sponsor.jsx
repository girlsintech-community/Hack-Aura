import React, { useState } from 'react';
import './Sponsor.css';
import ContactPopup from './Contact';

const HackathonSponsors = () => {
  const [showContact, setShowContact] = useState(false);

  const openContactPopup = () => {
    setShowContact(true);
  };

  const closeContactPopup = () => {
    setShowContact(false);
  };

  return (
    <section className="hackathon-sponsors" id="sponsors">
      <div className="sponsors-container">
        <div className="sponsors-header">
          <h2>SPONSORS & PARTNERS</h2>
          <p className="subtitle">
            Fuel the future of innovation — Collaborate with India’s brightest tech minds and unlock real impact.
          </p>
        </div>

        <div className="sponsor-call">
          <div className="call-card">
            <h3>Why Partner With Us?</h3>
            <ul>
              <li>🎯 Reach 2000+ emerging developers, designers & engineers</li>
              <li>🚀 Amplify your brand at the forefront of innovation</li>
              <li>💼 Discover recruitment-ready talent and fresh ideas</li>
              <li>🌐 Be known as a champion of real-world change</li>
            </ul>
          </div>

          <div className="cta-card">
            <h3>Let’s Build the Future Together</h3>
            <p>
              Join us as a sponsor or community partner. Get featured across our platform, events, panels, swag kits, and more.
              Elevate your brand while empowering the next generation of changemakers.
            </p>
            <button
              className="sponsor-button"
              onClick={openContactPopup}
              aria-label="Partner or Sponsor Us"
            >
              Partner / Sponsor Us <span className="cyber-arrow">→</span>
            </button>
          </div>
        </div>
      </div>

      {showContact && <ContactPopup onClose={closeContactPopup} />}
    </section>
  );
};

export default HackathonSponsors;
