import React, { useState, useEffect } from 'react';
import './Navbar.css';
import ContactPopup from './Contact';
import logo from './assets/logo.png';
import GLT from './assets/GLT.png';

const Navbar = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className="navbar-container">
      {/* Left Logo */}
      <div className="left-logo">
        <a href="/">
          <img src={logo} alt="HackAura Logo" />
        </a>
      </div>

      {/* Center or Mobile Menu */}
      <div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'open' : ''}`}>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/#timeline">Timeline</a>
          <a href="/#sponsors">Sponsors</a>
          <a href="/#tracks">Tracks</a>
          <a href="/humans">Humans</a>
          <a onClick={onContactClick} style={{ cursor: 'pointer' }}>Contact</a>
        </nav>
      </div>

      {/* Right Logo */}
      <div className="right-logo">
        <a href="/">
          <img src={GLT} alt="GirlsInTech Logo" />
        </a>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={handleMenuToggle}>
        <svg viewBox="0 0 100 80" width="25" height="25" fill="#fff">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
