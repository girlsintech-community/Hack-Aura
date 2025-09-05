import React, { useState } from "react";
import "./Sponsor.css";
import ContactPopup from "./Contact";

// Import logo images from the assets folder
import balsamiq from "./assets/logos/balsamiq.webp";
import cake from "./assets/logos/cake.svg";
import GLT from "./assets/logos/GLT.webp";
import IBlogo from "./assets/logos/IBlogo.svg";
import wolfram from "./assets/logos/wolfram.webp";
import GMC from "./assets/logos/GMC.webp";
import CC from "./assets/logos/cc.webp";
import XYZ from "./assets/logos/XYZ.webp";
import dev from "./assets/logos/dev.webp";
import scc from "./assets/logos/scc.webp";
import civo from "./assets/logos/civo.webp";
import devfolio from "./assets/logos/devfolio.svg";
import code4govtech from "./assets/logos/code4govtech.svg";
import postman from "./assets/logos/postman.png";
import da from "./assets/logos/da.svg";
import FS from "./assets/logos/FS.png";
import uni from "./assets/logos/uni.jpg";
import slido from "./assets/logos/slido.png";
import cats from "./assets/logos/cats.jpeg";
import dao from "./assets/logos/dao.jpeg";
import lb from "./assets/logos/lb.png";
import devarmy from "./assets/logos/devarmy.jpeg";
import wemakedevs from "./assets/logos/wemakedevs.png";
import welzin from "./assets/logos/welzin.jpeg";
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
    { id: 6, src: GMC, url:"https://givemycertificate.com/" },
    { id: 7, src: CC },
    { id: 8, src: XYZ },
    { id: 9, src: da },
    {id: 10, src: FS },
    {id: 11, src: uni },
    {id:12, src: slido }
  ];
  const partnerLogos = [
    { id: 1, src: dev },
    { id: 2, src: scc },
    { id: 3, src: civo },
    { id: 4, src: devfolio },
    { id: 5, src: code4govtech },
    { id: 6, src: postman },
    { id: 7, src: cats },
    { id: 8, src: dao },
    { id: 9, src: lb },
    { id: 10, src: devarmy },
    { id: 11, src: wemakedevs },
    { id: 12, src: welzin },
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

              {logo.url?(
               <a href={logo.url} target="_blank" rel="noopener noreferrer">
        <img src={logo.src} className="blurred-logo" width="160" height="80" />
      </a>
      ):(
        <img src={logo.src} className="blurred-logo" width="160" height="80" />
      )}
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
                {logo.url?(
               <a href={logo.url} target="_blank" rel="noopener noreferrer">
        <img src={logo.src} className="blurred-logo" width="160" height="80" />
      </a>
      ):(
        <img src={logo.src} className="blurred-logo" width="160" height="80" />
      )}
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
