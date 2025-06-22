import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hack-aura-container">
      <div className="overlay-text">
        <div className="top-text">
          <span>Girls Leading Tech</span>
          <span>Presents</span>
        </div>

        <h1 className="hack-title">
          <span>HACK</span>
          <span>AURA</span>
        </h1>

        <div className="subtitle">
          <span>ILLUMINATE</span>
          <span>INNOVATION</span>
        </div>

        <div className="duration">24 Hrs</div>
      </div>
    </div>
  );
};

export default Hero;
