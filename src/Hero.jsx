import React from 'react';
import './Hero.css';
import { Disc } from 'lucide-react';


const Hero = () => {
    return (
        <>
            <div className="hack-aura-container">
                <div className="overlay-text">
                    <div className="top-text">
                        <span>Girls Leading Tech Presents</span>
                    </div>

                    <h1 className="hack-title">
                        HACK AUR
                        <span className="astro-wrapper">
                            A
                            <img src="/astro.png" alt="Astronaut" className="astro-img" />
                        </span>

                    </h1>


                    <div className="subtitle">
                        <span>24</span>
                        <span>HOURS</span>
                        <span>VIRTUAL</span>
                        <span>HACKATHON</span>
                    </div>
                    <div className="button-group">
                        <a href="https://devfolio.co/hackathons" target="_blank" rel="noopener noreferrer" className="btn-primary">Register Now</a>
                        <a
                            href="https://discord.gg/P8QY7Xgg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                           Join our Discord
                        </a>
                    </div>
                </div>
            </div>
            {/* Now the tagline comes AFTER the image section */}
            <div className="scrolling-tagline-container">
                <div className="scrolling-tagline">
                    The clock is ticking.   &nbsp;  The code is brewing.   &nbsp;    The future is yours to hack! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    The clock is ticking.    &nbsp;   The code is brewing.  &nbsp;       The future is yours to hack! &nbsp;&nbsp;&nbsp;&nbsp;
                    The clock is ticking.   &nbsp;     The code is brewing.    &nbsp;     The future is yours to hack! &nbsp;&nbsp;&nbsp;&nbsp;
                    The clock is ticking.    &nbsp;   The code is brewing.  &nbsp;      The future is yours to hack! &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>
        </>
    );
};

export default Hero;
