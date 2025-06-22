import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar-wrapper">
      {/* Fixed Logo on the left */}
      <div className="navbar-logo">
        <a href="#home">
          <img src={logo} alt="HackAura Logo" />
        </a>
      </div>

      {/* Centered navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#timeline">Timeline</a>
        <a href="#sponsors">Sponsors</a>
        <a href="/humans">Humans of HackAura</a>
        <a href="#footer">Support</a>
      </nav>
    </div>
  );
};

export default Navbar;
