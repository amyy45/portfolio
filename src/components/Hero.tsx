import React, { useEffect, useState } from 'react';
import '../hero.css';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  
  const phrases = [
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
      {/* Animated background elements */}
      <div className="cyber-grid"></div>
      <div className="particle-background"></div>
      <div className="security-shield"></div>
      
      <div className="hero-content">
        <div className="professional-terminal">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <div className="terminal-title">sneha@cybersecurity-portfolio:~</div>
            <div className="terminal-status">
              <span className="status-indicator secure"></span>
              <span className="status-text">SECURE CONNECTION</span>
            </div>
          </div>
          
          <div className="terminal-body">
            <div className="command-line">
              <span className="prompt">$ </span>
              <span className="command">cat introduction.txt</span>
            </div>
            
            <div className="output-content">
              <h1 className="main-heading">
                <span className="heading-accent">Securing</span> the Digital World
              </h1>
              
              <div className="typing-container">
                <p className="output-line">Hello, I'm Sneha</p>
                <h2 className="typing-text">{displayText}<span className="cursor">_</span></h2>
              </div>
              
              <div className="expertise-list">
                <div className="expertise-item">
                  <span className="expertise-badge">✓</span>
                  <span>Google Cybersecurity Professional Certified</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-badge">✓</span>
                  <span>Built StegoShield - AI-powered malware detection</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-badge">✓</span>
                  <span>Network Vulnerability Scanning & Reporting</span>
                </div>
              </div>
            </div>
            
            <div className="command-line">
              <span className="prompt">$ </span>
              <span className="command">connect --with-sneha</span>
              <span className="cursor">_</span>
            </div>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="professional-btn primary">
            <span className="btn-icon">🔍</span>
            <span className="btn-text">View My Projects</span>
            <div className="btn-hover-effect"></div>
          </button>
          <button className="professional-btn secondary">
            <span className="btn-icon">📄</span>
            <span className="btn-text">Download Resume</span>
            <div className="btn-hover-effect"></div>
          </button>
        </div>
        
        <div className="achievements-container">
          <div className="achievement-item">
            <div className="achievement-icon">🛡️</div>
            <div className="achievement-content">
              <div className="achievement-number">50+</div>
              <div className="achievement-label">Security Projects</div>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">🔓</div>
            <div className="achievement-content">
              <div className="achievement-number">150+</div>
              <div className="achievement-label">Vulnerabilities Found</div>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">⚡</div>
            <div className="achievement-content">
              <div className="achievement-number">100%</div>
              <div className="achievement-label">Commitment</div>
            </div>
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