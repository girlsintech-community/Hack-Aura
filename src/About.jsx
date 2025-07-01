import React from 'react';
import './About.css';

const galleryImages = [
  { id: 1, src: "/side1.png", alt: 'Hackathon event' },
  { id: 2, src: "/slide2.png", alt: 'Participants coding' },
  { id: 3, src: "/slide3.png", alt: 'Winning team' },
  { id: 4, src: "/slide4.png", alt: 'LinkedIn Masterclass' },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>About Hack Aura</h2>

        <div className="about-grid">
          {/* Text Section */}
          <div className="about-content">
            <p>
            Hack Aura is a 24-hour virtual hackathon scheduled for October 4th, bringing together talented minds in technology, design, and innovation to build impactful solutions under real world constraints. With diversity at its core, HackAura requires each team to include at least one female member, fostering inclusive collaboration and balanced perspectives. It's more than a competition, it's a launchpad for bold ideas and meaningful change.</p>
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
