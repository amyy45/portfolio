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
                  <span className="btn-icon">🔍</span>
                  <span className="btn-text">View My Projects</span>
                  <div className="btn-hover-effect"></div>
                </button>
                <button className="professional-btn secondary cursor-target">
                  <span className="btn-icon">⚡</span>
                  <span className="btn-text">My Skills</span>
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