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
        
        {/* Education and Experience Grid */}
        <div className="edu-exp-grid">
          {/* Education Section */}
          <div className="edu-exp-section">
            <div className="command-line">
              <span className="prompt">$ </span>
              <span className="command">cat education.txt</span>
            </div>
            
            <div className="edu-exp-content">
              <div className="edu-exp-item">
                <div className="edu-exp-header">
                  <h3 className="edu-exp-title">Icfai University, Hyderabad</h3>
                  <span className="edu-exp-period">2022 – 2026</span>
                </div>
                <p className="edu-exp-subtitle">B.Tech in Computer Science Engineering</p>
                <p className="edu-exp-detail">CGPA: 7.92 (till 7th semester)</p>
              </div>
              
              <div className="edu-exp-item">
                <div className="edu-exp-header">
                  <h3 className="edu-exp-title">Narayana Junior College (CBSE)</h3>
                  <span className="edu-exp-period">2022</span>
                </div>
                <p className="edu-exp-subtitle">Intermediate</p>
                <p className="edu-exp-detail">Score: 75.5%</p>
              </div>
              
              <div className="edu-exp-item">
                <div className="edu-exp-header">
                  <h3 className="edu-exp-title">B.D.M. International (CBSE)</h3>
                  <span className="edu-exp-period">2020</span>
                </div>
                <p className="edu-exp-subtitle">Secondary</p>
                <p className="edu-exp-detail">Score: 81.30%</p>
              </div>
            </div>
          </div>
          
          {/* Experience Section */}
          <div className="edu-exp-section">
            <div className="command-line">
              <span className="prompt">$ </span>
              <span className="command">cat experience.txt</span>
            </div>
            
            <div className="edu-exp-content">
              <div className="edu-exp-item">
                <div className="edu-exp-header">
                  <h3 className="edu-exp-title">Qworkz Technology Solutions</h3>
                  <span className="edu-exp-period">Jun 2024 – Jul 2024</span>
                </div>
                <p className="edu-exp-subtitle">Full Stack Developer Intern</p>
                <div className="edu-exp-details">
                  <ul>
                    <li>Developed and maintained full-stack web applications using PHP (Laravel) and Bootstrap</li>
                    <li>Collaborated with the UI/UX team to build responsive, user-friendly interfaces</li>
                    <li>Worked on Document Management System project with features like document upload, version control, and authentication</li>
                    <li>Gained hands-on experience with Git, API integration, MySQL database management, performance optimization, bug fixing, and testing</li>
                  </ul>
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
            <a href='/cover_letter.pdf' className="professional-btn primary cursor-target">
              <span className="btn-icon">📄</span>
              <span className="btn-text">Cover Letter</span>
              <div className="btn-hover-effect"></div>
            </a> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;