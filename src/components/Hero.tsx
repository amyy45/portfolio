import React, { useEffect, useState } from 'react';
import TargetCursor from './TargetCursor';
import '../hero.css';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentPhrase, setCurrentPhrase] = useState<number>(0);
  
  const phrases: string[] = [
    "Cybersecurity Enthusiast",
    "Aspiring Ethical Hacker",
    "Security Researcher"
  ];
  
  // Typewriter effect with multiple phrases
  useEffect(() => {
    if (currentIndex < phrases[currentPhrase].length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + phrases[currentPhrase][currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    } else {
      // Move to next phrase after a delay
      const phraseTimeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }, 2000);
      
      return () => clearTimeout(phraseTimeout);
    }
  }, [currentIndex, currentPhrase, phrases]);

  return (
    <section id="hero" className="hero">
      {/* Add the TargetCursor component */}
      <TargetCursor 
        targetSelector=".cursor-target" 
        spinDuration={2} 
        hideDefaultCursor={true} 
      />
      
      {/* Animated background elements */}
      <div className="cyber-grid"></div>
      <div className="particle-background"></div>
      <div className="security-shield"></div>
      
      <div className="hero-content">
        <div className="hero-grid">
          {/* Left side - Introduction */}
          <div className="hero-intro">
            <div className="intro-content">
              <div className="command-line">
                <span className="prompt">$ </span>
                <span className="command">cat introduction.txt</span>
              </div>
              
              <h1 className="main-heading">
                <span className="heading-accent">Securing</span> the Digital World
              </h1>
              
              <div className="typing-container">
                <p className="output-line">Hello, I'm Sneha</p>
                <h2 className="typing-text">{displayText}<span className="cursor">_</span></h2>
              </div>
              
              <div className="hero-description">
                <p>Passionate cybersecurity professional dedicated to identifying vulnerabilities, 
                implementing robust security measures, and protecting digital assets from emerging threats.</p>
              </div>
              
              <div className="action-buttons">
                <button className="professional-btn primary cursor-target">
                  <span className="btn-icon">🔐</span>
                  <span className="btn-text">Projects</span>
                  <div className="btn-hover-effect"></div>
                </button>
                <button className="professional-btn secondary cursor-target">
                  <span className="btn-icon">🐉</span>
                  <span className="btn-text">Skills</span>
                  <div className="btn-hover-effect"></div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side - Visual elements */}
          <div className="hero-visual">
            <div className="cyber-visualization">
              <div className="network-node main-node">
                <div className="node-core"></div>
                <div className="node-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
                <div className="node-label">Security Hub</div>
              </div>
              
              <div className="network-node node-1">
                <div className="node-icon">🛡️</div>
                <div className="node-label">Protection</div>
              </div>
              
              <div className="network-node node-2">
                <div className="node-icon">🔍</div>
                <div className="node-label">Analysis</div>
              </div>
              
              <div className="network-node node-3">
                <div className="node-icon">⚡</div>
                <div className="node-label">Response</div>
              </div>
              
              <div className="network-connections">
                <div className="connection connection-1"></div>
                <div className="connection connection-2"></div>
                <div className="connection connection-3"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="terminal-footer">
          <div className="command-line">
            <span className="prompt">$ </span>
            <span className="command">connect --with-sneha</span>
            <span className="cursor">_</span>
          </div>
          
          {/* Contact Icons */}
          <div className="contact-icons">
            <a 
              href="https://www.linkedin.com/in/sneha-sah-760b40250/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link cursor-target"
              aria-label="LinkedIn Profile"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a 
              href="https://github.com/amyy45" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link cursor-target"
              aria-label="GitHub Profile"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            
            <a 
              href="mailto:threatlayer@gmail.com" 
              className="contact-link cursor-target"
              aria-label="Send Email"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-text">Explore my cybersecurity journey</div>
          <div className="scroll-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;