import React, { useState } from "react";
import "./Sponsor.css";
import ContactPopup from "./Contact";

// Import logo images from the assets folder
import balsamiq from "./assets/logos/balsamiq.png";
import cake from "./assets/logos/cake.svg";
import GLT from "./assets/logos/GLT.png";
import IBlogo from "./assets/logos/IBlogo.svg";
import wolfram from "./assets/logos/wolfram.png";
import GMC from "./assets/logos/GMC.png";
import CC from "./assets/logos/cc.jpg";
import XYZ from "./assets/logos/XYZ.jpg";
import dev from "./assets/logos/dev.png";
import scc from "./assets/logos/scc.png";
import civo from "./assets/logos/civo.png";

const HackathonSponsors = () => {
  const [showContact, setShowContact] = useState(false);

  const openContactPopup = () => setShowContact(true);
  const closeContactPopup = () => setShowContact(false);

  const sponsorLogos = [
    { id: 1, src: balsamiq },
    { id: 2, src: cake },
    { id: 3, src: GLT },
    { id: 4, src: IBlogo },
    { id: 5, src: wolfram },
    { id: 6, src: GMC },
    { id: 7, src: CC },
    { id: 8, src: XYZ },
  ];
  const partnerLogos = [
    { id: 1, src: dev },
    { id: 2, src: scc },
    { id: 3, src: civo },
  ];

  return (
    <section className="hackathon-sponsors" id="sponsors">
      <div className="sponsors-container">
        <div className="sponsors-header">
          <h2>OUR SPONSORS</h2>
        </div>

        <div className="blurred-logos-section">
          <div className="logos-grid">
            {sponsorLogos.map((logo) => (
              <div className="logo-card" key={logo.id}>
                <img src={logo.src} className="blurred-logo" />
              </div>
            ))}
          </div>
        </div>

        <div className="partner-header">
          <h2>OUR PARTNERS</h2>
        </div>

        <div className="blurred-logos-section">
          <div className="logos-grid">
            {partnerLogos.map((logo) => (
              <div className="logo-card" key={logo.id}>
                <img src={logo.src} className="blurred-logo" />
              </div>
            ))}
          </div>
        </div>

        <div className="cta-card">
          <h3>Let’s Build the Future Together</h3>
          <p>
            Join us as a sponsor or community partner. Get featured across our
            platform, events, panels, swag kits, and more. Elevate your brand
            while empowering the next generation of changemakers.
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

      {showContact && <ContactPopup onClose={closeContactPopup} />}
    </section>
  );
};

export default HackathonSponsors;
