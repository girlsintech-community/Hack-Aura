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
