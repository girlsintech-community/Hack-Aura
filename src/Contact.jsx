import React, { useState } from "react";
import './ContactPopup.css';


const ContactPopup = ({ onClose, mode = "contact", onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setSubmitted(true);
    if (onSubmit) {
      onSubmit({ name, email });
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        {mode === "contact" ? (
          <>
            <h2>Contact Us</h2>
            <p>
              For sponsorships, collaborations, or queries,<br />
              reach out to us at:
            </p>
            <a href="mailto:girlsleadingtech@gmail.com" className="email-link">
              girlsleadingtech@gmail.com
            </a>
          </>
        ) : submitted ? (
          <>
            <h2>You're In! 🎉</h2>
            <p>You're ready to select your Hack Aura house and get your ticket!</p>
          </>
        ) : (
          <>
            <h2>Join Hack Aura</h2>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
            <label>Email Address:</label>
            <input
              type="email"
              value={email}
              placeholder="your@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
            <button className="submit-btn" onClick={handleSubmit}>
              Enter
            </button>
          </>
        )}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ContactPopup;
