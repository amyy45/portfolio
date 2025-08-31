import React, { useEffect, useState } from 'react';
import '../hero.css';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  
  const phrases = [
    "Cybersecurity Specialist",
    "Ethical Hacking Practitioner",
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
      {/* Terminal-style header bar */}
      <div className="terminal-bar">
        <div className="terminal-buttons">
          <div className="terminal-btn close"></div>
          <div className="terminal-btn minimize"></div>
          <div className="terminal-btn maximize"></div>
        </div>
        <div className="terminal-title">security-enthusiast@portfolio:~</div>
        <div className="terminal-time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
      </div>
      
      {/* Animated background elements */}
      <div className="cyber-grid"></div>
      <div className="binary-rain"></div>
      
      {/* Hexagon pattern overlay */}
      <div className="hexagon-pattern"></div>
      
      <div className="hero-content">
        <div className="main-terminal">
          <div className="terminal-header">
            <div className="terminal-prompt">
              <span className="prompt-user">security@portfolio</span>:
              <span className="prompt-dir">~/home</span>$
            </div>
          </div>
          
          <div className="terminal-body">
            <div className="command-line">
              <span className="prompt">$ </span>
              <span className="command">cat introduction.txt</span>
            </div>
            
            <div className="output-content">
              <h1 className="main-heading">Protecting Digital Frontiers</h1>
              <div className="typing-container">
                <p className="output-line">Hello World! I'm a</p>
                <h2 className="typing-text">{displayText}<span className="cursor">_</span></h2>
              </div>
              
              <div className="output-description">
                <p>Passionate about ethical hacking, vulnerability research,</p>
                <p>penetration testing, and all aspects of cybersecurity.</p>
              </div>
            </div>
            
            <div className="command-line">
              <span className="prompt">$ </span>
              <span className="command">./explore --skills</span>
              <span className="cursor">_</span>
            </div>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="cyber-btn primary">
            <span className="btn-icon">⟫</span>
            <span className="btn-text">View Portfolio</span>
            <div className="btn-hover-effect"></div>
          </button>
          <button className="cyber-btn secondary">
            <span className="btn-icon">⚡</span>
            <span className="btn-text">Contact Me</span>
            <div className="btn-hover-effect"></div>
          </button>
        </div>
        
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">42</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">128+</div>
            <div className="stat-label">Vulnerabilities Found</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Security Focused</div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-text">Explore Further</div>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;