import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hack-aura-container">
            <div className="overlay-text">
                <div className="top-text">
                    <span>Girls Leading Tech Presents</span>
                </div>

                <h1 className="hack-title">
                    <span>HACK</span>
                    <span>AURA</span>
                </h1>

                <div className="subtitle">
                    <span>24</span>
                    <span>HOURS</span>
                    <span>VIRTUAL</span>
                    <span>HACKATHON</span>
                </div>
                <div className="button-group">
                    <button className="btn-primary">Register</button>
                    <a href="https://discord.gg/P8QY7Xgg" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    Discord
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
