import React from 'react';
import './About.css';
import image1 from './assets/images/slide1.png';
import image2 from './assets/images/slide2.png';
import image3 from './assets/images/slide3.png';
import image4 from './assets/images/slide4.png';

const galleryImages = [
  { id: 1, src: image1, alt: 'Hackathon event' },
  { id: 2, src: image2, alt: 'Participants coding' },
  { id: 3, src: image3, alt: 'Winning team' },
  { id: 4, src: image4, alt: 'LinkedIn Masterclass' },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>About HackAura</h2>

        <div className="about-grid">
          {/* Text Section */}
          <div className="about-content">
            <p>
              HackAura is a <span style={{ fontWeight: 600 }}>24-hour virtual hackathon</span> scheduled for <span style={{ fontWeight: 600 }}>October 4th</span>, bringing together minds in technology, design, and innovation to build impactful solutions.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.8rem' }}>
                <span>🧠 Focus:</span> Solve real-world problems under time constraints.
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <span>🌍 Diversity First:</span> Each team must include <em>at least one female member</em>, fostering inclusive collaboration.
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <span>🚀 Beyond Competition:</span> It's a launchpad for bold ideas and meaningful change—not just a race to win.
              </li>
            </ul>
          </div>

          {/* Gallery Section */}
          <div className="gallery-column">
            <div className="cyber-gallery">
              <div className="gallery-wrapper">
                <div className="gallery-main">
                  {galleryImages.concat(galleryImages).map((img, index) => (
                    <img key={index} src={img.src} alt={img.alt} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
