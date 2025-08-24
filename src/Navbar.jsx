import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import ContactPopup from "./Contact";
import logo from "./assets/Logo1.webp";
import GLT from "./assets/GLT.webp";

const Navbar = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="navbar-container">
      {/* Left Logo */}
      <div className="left-logo">
        <Link to="/">
          <img src={logo} alt="HackAura Logo" width="48" height="48" />
        </Link>
      </div>

      {/* Center or Mobile Menu */}
      <div
        className={`navbar-wrapper ${scrolled ? "scrolled" : ""} ${
          menuOpen ? "open" : ""
        }`}
      >
        <nav className="navbar">
          <Link to="/">Home</Link>
          <a href="/#about">About</a>
          <a href="/#timeline">Timeline</a>
          <a href="/#sponsors">Sponsors</a>
          <a href="/#tracks">Tracks</a>
          <Link to="/tickets">Tickets</Link>
          <Link to="/humans">Humans</Link>
          
          {/* <a onClick={onContactClick} style={{ cursor: "pointer" }}>
            Contact
          </a> */}
          <a href="https://hackaura.devfolio.co/" className="register-btn">
            Register Now
          </a>
        </nav>
      </div>

      {/* Right Logo */}
      <div className="right-logo">
        <Link to="/">
          <img src={GLT} alt="GirlsInTech Logo" width="40" height="40" />
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
