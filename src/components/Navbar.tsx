import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import '../index.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  // 🔥 Common handler for all internal section links
  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    closeMenu();

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    if (location.pathname === "/") {
      scrollToSection();
    } else {
      navigate("/");
      setTimeout(scrollToSection, 500);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/" className="logo-link">
            <span className="logo-bracket">[</span>
            <span className="logo-text">Trace_Route</span>
            <span className="logo-bracket">]</span>
          </a>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <Link to="/" className="nav-link" onClick={(e) => handleNavClick(e, "hero")}>
              <span className="link-number">01.</span>
              <span className="link-text">Home</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/" className="nav-link" onClick={(e) => handleNavClick(e, "about")}>
              <span className="link-number">02.</span>
              <span className="link-text">About</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/" className="nav-link" onClick={(e) => handleNavClick(e, "skills")}>
              <span className="link-number">03.</span>
              <span className="link-text">Skills</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/" className="nav-link" onClick={(e) => handleNavClick(e, "projects")}>
              <span className="link-number">04.</span>
              <span className="link-text">Projects</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/" className="nav-link" onClick={(e) => handleNavClick(e, "contact")}>
              <span className="link-number">05.</span>
              <span className="link-text">Contact</span>
            </Link>
          </div>

          <div className="nav-extra">
            <a href="/resume .pdf" className="resume-btn cursor-target" target="_blank" rel="noopener noreferrer">
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
