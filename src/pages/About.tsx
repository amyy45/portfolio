import React from 'react';
import TargetCursor from '../components/TargetCursor';
import '../about.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      {/* Add the TargetCursor component */}
      <TargetCursor 
        targetSelector=".cursor-target" 
        spinDuration={2} 
        hideDefaultCursor={true} 
      />
      
      {/* Animated background elements */}
      <div className="cyber-grid"></div>
      <div className="particle-background"></div>
      
      <div className="about-content">
        <div className="about-grid">
          {/* Left side - Introduction */}
          <div className="about-intro">
            <div className="intro-content">
              <div className="command-line">
                <span className="prompt">$ </span>
                <span className="command">cat about_sneha.txt</span>
              </div>
              
              <h1 className="main-heading">
                <span className="heading-accent">About</span> Me
              </h1>
              
              <div className="about-description">
                <p>Hi, I'm Sneha, a 4th-year Computer Science Engineering student at IcfaiTech, Hyderabad. I'm passionate about cybersecurity, ethical hacking, and AI-driven security solutions.</p>
                
                <p>I love exploring how systems work, finding vulnerabilities, and building solutions that make technology safer. My recent projects include <span className="highlight">StegoShield</span> – a deep learning–based web application that detects hidden malicious payloads in images, audio, and video files using steganalysis.</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Skills visualization */}
          <div className="skills-visual">
            <div className="cyber-visualization">
              <div className="command-line">
                <span className="prompt">$ </span>
                <span className="command">skills --current</span>
              </div>
              
              <div className="skills-container">
                <div className="skill-category">
                  <h3 className="skill-heading">
                    <span className="skill-icon">🛡️</span>
                    Cybersecurity Tools
                  </h3>
                  <div className="skill-list">
                    <span className="skill-item cursor-target">Kali Linux</span>
                    <span className="skill-item cursor-target">Wireshark</span>
                    <span className="skill-item cursor-target">Burp Suite</span>
                    <span className="skill-item cursor-target">Metasploit</span>
                  </div>
                </div>
                
                <div className="skill-category">
                  <h3 className="skill-heading">
                    <span className="skill-icon">🌐</span>
                    Full-Stack Development
                  </h3>
                  <div className="skill-list">
                    <span className="skill-item cursor-target">React</span>
                    <span className="skill-item cursor-target">Flask</span>
                    <span className="skill-item cursor-target">PostgreSQL</span>
                    <span className="skill-item cursor-target">Firebase</span>
                  </div>
                </div>
                
                <div className="skill-category">
                  <h3 className="skill-heading">
                    <span className="skill-icon">🧠</span>
                    Deep Learning for Security
                  </h3>
                  <div className="skill-list">
                    <span className="skill-item cursor-target">PyTorch</span>
                    <span className="skill-item cursor-target">TensorFlow</span>
                    <span className="skill-item cursor-target">Steganalysis</span>
                    <span className="skill-item cursor-target">CNN Architectures</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Goals section */}
        <div className="goals-section">
          <div className="command-line">
            <span className="prompt">$ </span>
            <span className="command">cat career_goals.txt</span>
          </div>
          
          <div className="goals-content">
            <p>My goal is to become an Ethical Hacker & Security Researcher, and I'm actively looking for opportunities where I can apply my technical expertise to real-world security challenges.</p>
            
            <p>When I'm not coding, you'll find me experimenting with new tech stacks, reading about the latest in cybersecurity, or writing notes/blogs to simplify complex concepts.</p>
          </div>
          
          <div className="action-buttons">
            <button className="professional-btn primary cursor-target">
              <span className="btn-icon">📄</span>
              <span className="btn-text">View Resume</span>
              <div className="btn-hover-effect"></div>
            </button>
            <button className="professional-btn secondary cursor-target">
              <span className="btn-icon">✍️</span>
              <span className="btn-text">Read My Blog</span>
              <div className="btn-hover-effect"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;