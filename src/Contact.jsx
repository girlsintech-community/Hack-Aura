import React from 'react';
import './ContactPopup.css';

const ContactPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <h2>Contact Us</h2>
        <p>
          For sponsorships, collaborations, or queries,
          <br />
          reach out to us at:
        </p>
        <a href="mailto:girlsleadingtech@gmail.com" className="email-link">
        girlsleadingtech@gmail.com
        </a>
        <br/>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ContactPopup;
