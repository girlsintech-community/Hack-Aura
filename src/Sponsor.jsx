import React, { useState } from "react";
import "./Sponsor.css";
import ContactPopup from "./Contact";

// Import logo images from the assets folder
import balsamiq from "./assets/logos/balsamiq.webp";
import cake from "./assets/logos/interview-cake.jpg";
import GLT from "./assets/logos/glt2.png";
import IBlogo from "./assets/logos/IBlogo.svg";
import wolfram from "./assets/logos/wolfram.webp";
import GMC from "./assets/logos/GMC.webp";
import CC from "./assets/logos/cc.webp";
import XYZ from "./assets/logos/XYZ.webp";
import dev from "./assets/logos/dev.webp";
import scc from "./assets/logos/scc.webp";
import civo from "./assets/logos/civo.webp";
import devfolio from "./assets/logos/devfolioo.png";
import code4govtech from "./assets/logos/code4govtech.png";
import postman from "./assets/logos/postman.png";
import da from "./assets/logos/da.png";
import fs from "./assets/logos/FS.png";
import uni from "./assets/logos/uni.jpg";
import slido from "./assets/logos/slido.png";
import cats from "./assets/logos/cats.jpeg";
import dao from "./assets/logos/dao.jpeg";
import lb from "./assets/logos/lb.png";
import devarmy from "./assets/logos/devarmy.jpeg";
import wemakedevs from "./assets/logos/wemakedevs.png";
import welzin from "./assets/logos/welzin.jpeg";
import AC from "./assets/logos/AC.png";
import cfi from "./assets/logos/cfi.png";
import techleads from "./assets/logos/techleads.png";
import LM from "./assets/logos/LM.png";
import ieee from "./assets/logos/ieee.jpeg";
import Draft from "./assets/logos/Draft.png";
import elite from "./assets/logos/elite.png";
import event from "./assets/logos/event.png";
import GDGUECU from "./assets/logos/GDGUECU.jpeg";
import girl from "./assets/logos/girl.jpeg";
import osc from "./assets/logos/osc.jpeg";
import tmi from "./assets/logos/tmi.png";
import truscholar from "./assets/logos/truscholar.png";
import vonage from "./assets/logos/vonage.jpeg";
import zairaa from "./assets/logos/zairaa.jpeg";
import tac from "./assets/logos/tac.png";
import GCET from "./assets/logos/GCET.jpeg";
import eventInfo from "./assets/logos/eventInfo.png";
import IEEEStu from "./assets/logos/IEEEStu.jpeg";
import minerva from "./assets/logos/minerva.png";
import techeduwor from "./assets/logos/techeduwor.png";
import cyberX from "./assets/logos/cyberX.png";
import techNinja from "./assets/logos/techNinja.png";
import campusBody from "./assets/logos/campusBody.png";

const HackathonSponsors = () => {
  const [showContact, setShowContact] = useState(false);

  const openContactPopup = () => setShowContact(true);
  const closeContactPopup = () => setShowContact(false);

  const sponsorLogos = [
    { id: 1, src: balsamiq, url:"https://balsamiq.com/" },
    { id: 2, src: cake, url:"https://www.interviewcake.com/" },
    { id: 3, src: GLT, url:"https://www.linkedin.com/company/girlsleadingtech/" },
    { id: 4, src: IBlogo, url:"https://interviewbuddy.net/" },
    { id: 5, src: wolfram, url:"https://www.wolframalpha.com/" },
    { id: 6, src: GMC, url:"https://givemycertificate.com/" },
    { id: 7, src: CC, url:"https://codecrafters.io/" },
    { id: 8, src: XYZ, url:"https://gen.xyz/" },
    { id: 9, src: da, url:"https://www.duality.ai/" },
    {id: 10, src: fs, url:"https://getfailsafe.com/" },
    {id: 11, src: uni },
    {id:12, src: slido, url:"https://www.slido.com/" },
    {id:13, src:vonage,url:"https://www.vonage.com/"},
    {id:14, src:truscholar, url:"https://www.truscholar.io/" },
  ];
  const partnerLogos = [
    { id: 1, src: dev, url:"https://dev3pack.xyz/" },
    { id: 2, src: scc, url:"https://shecancode.io/" },
    { id: 3, src: civo, url:"https://www.civo.com/" },
    { id: 4, src: devfolio, url:"https://devfolio.co/discover" },
    { id: 5, src: code4govtech, url:"https://codeforgovtech.in/" },
    { id: 6, src: postman, url:"https://www.postmancommunitypune.in/" },
    { id: 7, src: cats, url:"https://in.linkedin.com/company/cats-in-tech" },
    { id: 8, src: dao, url:"https://x.com/herdaonigeria?lang=en" },
    { id: 9, src: lb, url:"https://www.linkedin.com/company/devlearn-com/" },
    { id: 10, src: devarmy, url:"https://thedevarmy.com/" },
    { id: 11, src: wemakedevs, url:"https://wemakedevs.org/" },
    { id: 12, src: welzin, url:"https://www.welzin.ai/" },
    { id: 13, src: zairaa, url:"https://www.linkedin.com/company/zairza/" },
    { id: 14, src: tmi, url:"https://www.linkedin.com/company/techmasters-community" },
    { id: 15, src: GDGUECU, url:"https://www.instagram.com/gdg_uecu" },
    { id: 16, src: girl, url:"https://in.linkedin.com/company/girlup-coders" },
    { id: 17, src: event, url:"https://eventopia.in/" },
    { id: 18, src: elite, url:"https://www.linkedin.com/company/the-elites-in/" },
    { id: 19, src: Draft, url:"https://krowdkraft.live/join-community" },
    { id: 20, src: ieee, url:"https://www.linkedin.com/company/ieee-igdtuw/" },
    { id: 21, src: LM, url:"https://www.linkedin.com/company/lamit-club" }, 
    { id: 22, src: osc, url:"https://www.linkedin.com/company/open-source-chandigarh/posts/?feedView=all" },
    { id: 23, src: techleads, url:"https://instagram.com/techleads.in/" },
    { id: 24, src: AC, url:"https://linkedin.com/company/apna-coding-by-apna-counsellors" },
    { id: 25, src: cfi, url:"https://codeforindia.com/" },
    { id: 26, src: tac, url:"https://ascentcircle.web.app/" },
    { id: 27, src: GCET, url:"https://gdg.community.dev/gdg-on-campus-galgotias-college-of-engineering-technology-greater-noida-india/" },
    { id:28, src: eventInfo, url:"https://www.linkedin.com/company/eventsinfo" },
    { id:29, src: IEEEStu, url:"" },
    { id:30, src: minerva, url:"https://minervaforums.in/" },
    { id:31, src: techeduwor, url:"https://sites.google.com/view/techeducation-world" },
    { id:32, src: cyberX, url:"https://www.instagram.com/cyberx.nashik/#" },
    { id:33, src: techNinja, url:"" },
    { id:34, src: campusBody, url:"" },
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
        <img src={logo.src} className="blurred-logo"/>
      </a>
      ):(
        <img src={logo.src} className="blurred-logo"/>
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
        <img src={logo.src} className="blurred-logo"  />
      </a>
      ):(
        <img src={logo.src} className="blurred-logo"  />
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
