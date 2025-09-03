import React from 'react';
import TargetCursor from '../components/TargetCursor';
import '../skills.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills unified-bg">
      {/* Add the TargetCursor component */}
      <TargetCursor 
        targetSelector=".cursor-target" 
        spinDuration={2} 
        hideDefaultCursor={true} 
      />
      
      {/* Animated background elements */}
      <div className="cyber-grid"></div>
      <div className="particle-background"></div>
      
      <div className="skills-content">
        <div className="skills-header">
          <div className="command-line">
            <span className="prompt">$ </span>
            <span className="command">cat skills.txt</span>
          </div>
          
          <h1 className="main-heading">
            <span className="heading-accent">🛠️ Technical</span> Skills
          </h1>
          
          <div className="command-line">
            <span className="prompt">$ </span>
            <span className="command">skills --technical --all</span>
          </div>
        </div>

        <div className="skills-grid">
          {/* Programming Languages */}
          <div className="skill-category">
            <h2 className="skill-category-title">
              <span className="category-icon">🔹</span>
              Programming Languages
            </h2>
            <div className="skill-items">
              <span className="skill-item cursor-target">Python</span>
              <span className="skill-item cursor-target">C</span>
              <span className="skill-item cursor-target">C++</span>
              <span className="skill-item cursor-target">Java</span>
              <span className="skill-item cursor-target">JavaScript</span>
              <span className="skill-item cursor-target">TypeScript</span>
            </div>
          </div>

          {/* Cybersecurity & Ethical Hacking */}
          <div className="skill-category">
            <h2 className="skill-category-title">
              <span className="category-icon">🔹</span>
              Cybersecurity & Ethical Hacking
            </h2>
            <div className="skill-items">
              <span className="skill-item cursor-target">Kali Linux</span>
              <span className="skill-item cursor-target">Wireshark</span>
              <span className="skill-item cursor-target">Burp Suite</span>
              <span className="skill-item cursor-target">Metasploit</span>
              <span className="skill-item cursor-target">Network Vulnerability Scanning</span>
              <span className="skill-item cursor-target">Steganalysis</span>
            </div>
          </div>

          {/* Web Development */}
          <div className="skill-category">
            <h2 className="skill-category-title">
              <span className="category-icon">🔹</span>
              Web Development
            </h2>
            <div className="skill-items">
              <span className="skill-item cursor-target">React</span>
              <span className="skill-item cursor-target">TailwindCSS</span>
              <span className="skill-item cursor-target">Vite</span>
              <span className="skill-item cursor-target">Flask</span>
              <span className="skill-item cursor-target">Node.js</span>
              <span className="skill-item cursor-target">PostgreSQL</span>
            </div>
          </div>

          {/* Machine Learning & AI */}
          <div className="skill-category">
            <h2 className="skill-category-title">
              <span className="category-icon">🔹</span>
              Machine Learning & AI
            </h2>
            <div className="skill-items">
              <span className="skill-item cursor-target">PyTorch</span>
              <span className="skill-item cursor-target">TensorFlow</span>
              <span className="skill-item cursor-target">Deep Learning</span>
              <span className="skill-item cursor-target">CNNs</span>
              <span className="skill-item cursor-target">ResNet</span>
              <span className="skill-item cursor-target">LSTMs</span>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="skill-category">
            <h2 className="skill-category-title">
              <span className="category-icon">🔹</span>
              Tools & Platforms
            </h2>
            <div className="skill-items">
              <span className="skill-item cursor-target">Git & GitHub</span>
              <span className="skill-item cursor-target">Docker</span>
              <span className="skill-item cursor-target">Cloudinary</span>
              <span className="skill-item cursor-target">Render</span>
              <span className="skill-item cursor-target">AWS</span>
              <span className="skill-item cursor-target">Firebase</span>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skill-category">
            <h2 className="skill-category-title">
              <span className="category-icon">🔹</span>
              Soft Skills
            </h2>
            <div className="skill-items">
              <span className="skill-item cursor-target">Problem-solving</span>
              <span className="skill-item cursor-target">Analytical thinking</span>
              <span className="skill-item cursor-target">Technical writing</span>
              <span className="skill-item cursor-target">Documentation</span>
              <span className="skill-item cursor-target">Team collaboration</span>
            </div>
          </div>
        </div>

        <div className="terminal-footer">
          <div className="command-line">
            <span className="prompt">$ </span>
            <span className="command">skills --complete --certifications</span>
            <span className="cursor">_</span>
          </div>
        </div>
        
        <div className="action-buttons">
          <a href='/certificates' className="professional-btn primary cursor-target">
            <span className="btn-icon">📄</span>
            <span className="btn-text">View Certifications</span>
            <div className="btn-hover-effect"></div>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;