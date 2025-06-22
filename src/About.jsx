import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>About the Hackathon</h2>

        <div className="about-content">
          <div className="text-block">
            <p className="highlight">
              HackAura is a <strong>24-hour virtual hackathon</strong> where innovation meets purpose—powered by cutting-edge technologies including <strong>Web3, Artificial Intelligence, and Open Innovation</strong>.
            </p>

            <p>
              Scheduled for <strong>October 2025</strong>, HackAura is a national platform inviting student innovators to design solutions addressing real-world challenges faced by women. 
              Teams of <strong>2 to 5 members</strong> can participate, and each must include at least <strong>two girls</strong>—promoting inclusivity in tech.
            </p>

            <p>
              The event features multiple tracks, curated workshops, and mentorship to fuel ideation and execution. Projects will be judged on:
            </p>

            <ul className="evaluation-criteria">
              <li>🔍 <strong>Innovation</strong> & Originality</li>
              <li>🚀 <strong>Scalability</strong> & Sustainability</li>
              <li>📊 <strong>Market Viability</strong></li>
              <li>💡 <strong>Technical Execution</strong> & UX</li>
            </ul>

            <p>
              HackAura aims to cultivate forward-thinking solutions while fostering talent, collaboration, and leadership among emerging technologists.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
