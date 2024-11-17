"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../style/header.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev); // Toggle the state
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <Image width={50} height={100} src="/logo.png" alt="Logo" className="logo-image" />
          <span className="logo-text">Tours to Tuscany</span>
        </div>

        {/* Desktop & Mobile Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/About">About Us</a></li>
          <li><a href="/Tour">Tour Packages</a></li>
          <li><a href="/Contact">Contact Us</a></li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
