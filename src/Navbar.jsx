import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ContactPopup from "./Contact";
import logo from "./assets/Logo1.png";
import GLT from "./assets/GLT.png";

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
        <a href="/">
          <img src={logo} alt="HackAura Logo" />
        </a>
      </div>

      {/* Center or Mobile Menu */}
      <div
        className={`navbar-wrapper ${scrolled ? "scrolled" : ""} ${
          menuOpen ? "open" : ""
        }`}
      >
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/#timeline">Timeline</a>
          <a href="/#sponsors">Sponsors</a>
          <a href="/#tracks">Tracks</a>
          <a href="/humans">Humans</a>
          <a onClick={onContactClick} style={{ cursor: "pointer" }}>
            Contact
          </a>
          <a href="#register" className="register-btn">
            Register Now
          </a>
        </nav>
      </div>

      {/* Right Logo */}
      <div className="right-logo">
        <a href="/">
          <img src={GLT} alt="GirlsInTech Logo" />
        </a>
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
