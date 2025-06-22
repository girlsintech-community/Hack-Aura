import React, { useState, useEffect } from 'react';
import './Navbar.css';
import ContactPopup from './Contact';
import logo from './assets/logo.png';
import girlsintech from './assets/girlsintech.jpg';

const Navbar = ({onContactClick}) => {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <div className="navbar-wrapper">
  {/* Left Logo */}
  <div className="navbar-logo">
    <a href="/">
      <img src={logo} alt="HackAura Logo" />
    </a>
  </div>

  {/* Center Nav Links */}
  <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <a href="/">Home</a>
    <a href="#about">About</a>
    <a href="#timeline">Timeline</a>
    <a href="#sponsors">Sponsors</a>
    <a href="/humans">Humans of HackAura</a>
    <a href="#footer">Support</a>
    <a onClick={onContactClick} style={{ cursor: 'pointer' }}>Contact</a>
  </nav>

  {/* Right GirlsInTech Icon */}
  <div className="navbar-girls-icon">
    <a href="/">
      <img src={girlsintech} alt="GirlsInTech Logo" />
    </a>
  </div>
</div>


  );
};

export default Navbar;
