import React from 'react';
import TargetCursor from '../components/TargetCursor';
import '../footer.css';

// Import icons
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaHeart, FaCode } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <TargetCursor 
        targetSelector=".cursor-target" 
        spinDuration={2} 
        hideDefaultCursor={true} 
      />
      
      {/* Animated background elements */}
      <div className="cyber-grid"></div>
      <div className="particle-background"></div>
      
      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="command-line">
              <span className="prompt">$ </span>
              <span className="command">cat footer.txt</span>
            </div>
            
            <h3 className="brand-name">Sneha</h3>
            <p className="brand-tagline">Cybersecurity Enthusiast & Full-Stack Developer</p>
            
            <div className="footer-description">
              <p>Building secure solutions for a better digital future. Specializing in cybersecurity, ethical hacking, and AI-driven security applications.</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-links">
            <div className="command-line">
              <span className="prompt">$ </span>
              <span className="command">navigate --quick</span>
            </div>
            
            <h4 className="links-heading">Quick Links</h4>
            <ul className="links-list">
              <li><a href="#about" className="cursor-target">About</a></li>
              <li><a href="#projects" className="cursor-target">Projects</a></li>
              <li><a href="#skills" className="cursor-target">Skills</a></li>
              <li><a href="#contact" className="cursor-target">Contact</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="footer-resources">
            <div className="command-line">
              <span className="prompt">$ </span>
              <span className="command">ls resources/</span>
            </div>
            
            <h4 className="resources-heading">Resources</h4>
            <ul className="resources-list">
              <li><a href="/resume.pdf" className="cursor-target" target="_blank" rel="noopener noreferrer">Resume</a></li>
              <li><a href="/blog" className="cursor-target">Blog</a></li>
              <li><a href="/projects" className="cursor-target">Case Studies</a></li>
              <li><a href="/certifications" className="cursor-target">Certifications</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="footer-contact">
            <div className="command-line">
              <span className="prompt">$ </span>
              <span className="command">contact --footer</span>
            </div>
            
            <h4 className="contact-heading">Get In Touch</h4>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-icon">📧</span>
                <span>threatlayer@gmail.com</span>
              </p>
              <p className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Hyderabad, India</span>
              </p>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/amyy45" className="social-link cursor-target github" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sneha-sah-760b40250/" className="social-link cursor-target linkedin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://x.com/threat_layer" className="social-link cursor-target twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://discord.com/users/its_sneha" className="social-link cursor-target discord" target="_blank" rel="noopener noreferrer">
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          
          <div className="bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} Sneha. Made with <FaHeart className="heart-icon" /> using <FaCode className="code-icon" />
              </p>
            </div>
            
            <div className="footer-cta">
              <p className="availability-status">
                <span className="status-dot"></span>
                Available for freelance work & collaborations
              </p>
            </div>
            
            <div className="legal-links">
              <a href="/privacy" className="cursor-target">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="/terms" className="cursor-target">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;