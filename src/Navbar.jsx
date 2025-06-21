import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 50;
      setScrolled(isScrolled);
    };

    // Check scroll position immediately
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array

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