import React from 'react';
import './About.css';

const About = () => {
  return (
    <section  className="about-section">
      <div className="container">
        <h2>ABOUT THE HACKATHON</h2>
        <div className="content-grid">
          <div className="about-content">
            <p className="highlight">
              CyberHack is a 48-hour immersive coding marathon where innovation meets technology.
            </p>
            <p>
              Founded in 2020, we bring together developers, designers, and tech enthusiasts to build 
              cutting-edge solutions for real-world problems. Our events feature workshops, mentorship, 
              and networking opportunities with industry leaders.
            </p>
            <ul className="cyber-list">
              <li>• 48 hours of non-stop coding</li>
              <li>• Workshops from tech giants</li>
              <li>• $50,000+ in prizes</li>
              <li>• Global community of 10,000+ hackers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default About;