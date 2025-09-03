import React, { useState, useEffect } from 'react';
import '../index.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#hero" className="logo-link">
            <span className="logo-bracket">[</span>
            <span className="logo-text">Trace_Route</span>
            <span className="logo-bracket">]</span>
          </a>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <a href="#hero" className="nav-link" onClick={closeMenu}>
              <span className="link-number">01.</span>
              <span className="link-text">Home</span>
            </a>
          </div>
          <div className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>
              <span className="link-number">02.</span>
              <span className="link-text">About</span>
            </a>
          </div>
          <div className="nav-item">
            <a href="#skills" className="nav-link" onClick={closeMenu}>
              <span className="link-number">03.</span>
              <span className="link-text">Skills</span>
            </a>
          </div>
          <div className="nav-item">
            <a href="#projects" className="nav-link" onClick={closeMenu}>
              <span className="link-number">04.</span>
              <span className="link-text">Projects</span>
            </a>
          </div>
          <div className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              <span className="link-number">05.</span>
              <span className="link-text">Contact</span>
            </a>
          </div>
          
          <div className="nav-extra">
            <a href="\resume.pdf" className="resume-btn cursor-target" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;