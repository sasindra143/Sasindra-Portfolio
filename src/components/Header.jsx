import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="pill-header">
        {/* Logo */}
        <div className="pill-logo">
          <span className="dot"></span>
          Sasindra
        </div>

        {/* Desktop Navigation */}
        <nav className="pill-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Desktop Resume Button */}
        <a
          href="https://drive.google.com/file/d/10UQ28iz1Zw7RymmrcgkOlzwngywoNwD7/view"
          className="pill-btn desktop-only"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Menu Bar */}
      <div className={`mobile-nav ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        {/* Mobile Resume Button */}
        <a
          href="https://drive.google.com/file/d/10UQ28iz1Zw7RymmrcgkOlzwngywoNwD7/view"
          className="mobile-resume"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Download Resume
        </a>
      </div>
    </>
  );
}
