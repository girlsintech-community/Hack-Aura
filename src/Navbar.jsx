import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log('Scroll position:', scrollY); // Debug log
      console.log('Scrolled state:', scrollY > 50); // Debug log
      setScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Debug log to see current state
  console.log('Current scrolled state:', scrolled);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#timeline">Timeline</a>
      <a href="#sponsors">Sponsors</a>
      <a href="#humans">Humans of HackAura</a>
      <a href="#footer">Support</a>
    </nav>
  );
};

export default Navbar;