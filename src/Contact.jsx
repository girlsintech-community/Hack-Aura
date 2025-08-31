import React, { useState } from "react";
import './ContactPopup.css';

const ContactPopup = ({ onClose, mode = "contact" }) => {
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

    const subject = encodeURIComponent("Hack Aura Ticket Confirmation");
    const body = encodeURIComponent(`
Hi ${name},

The wait is over. The threshold of invention calls, and Hack Aura is where you step through.

You can now download the tickets from the link provided! Along the way, you’ll also discover the spirit of our four houses:

Nova: Ignite brilliance  
Luno: Harness calm power  
Astra: Reach beyond limits  
Nyx: Embrace Mystery

This isn’t just a hackathon. It’s a stage alive with ideas, a space where every coder finds their place in the story.

And now, you’re part of it.

Download your official Hack Aura ticket here:
[Insert Ticket Link]

Show it off on your socials, let the world know you’re in, and don’t forget to tag us:  
@GirlsLeadingTech | #HackAura2025

We’ve created fun templates for you to flaunt your house spirit. Swap in your photo, share your vibe, and claim your spot in the Hack Aura universe.

What’s Next?

Mark your calendars. Hack Aura begins [insert start date].

Join our [Discord link] or [WhatsApp link] to connect with your fellow participants.

Stay tuned. Schedules, speakers, and house challenges are coming your way soon.

This is the beginning of something exciting. Pack your curiosity, bring your courage, and let Hack Aura surprise you.

With code and camaraderie,  
Team Girls Leading Tech
    `);

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
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
            <p>We've prepared your Hack Aura ticket. An email will open shortly—check it, download your ticket, and start the journey!</p>
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
