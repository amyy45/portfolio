import React from 'react';
import TargetCursor from '../components/TargetCursor';
import '../projects.css';

// Import project images (you'll need to add these to your project)
import stegoshieldImage from '../assets/stegoshield.jpg';
import vulnerabilityScanImage from '../assets/vulnerability-scan.png';
import cyberLabsImage from '../assets/cyber-labs.png';
import phishAIImage from '../assets/phishai.png';

import { FaGithub} from 'react-icons/fa';
const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "StegoShield – AI Based Steganography Detection Platform",
      stack: "PyTorch, Flask, PostgreSQL, React.js, Tailwind CSS, Firebase, Cloudinary",
      description: "Built a full-stack web app to detect hidden malicious payloads in images, audio, and video using deep learning (ResNet, CNN, EfficientNet-LSTM).",
      features: [
        "User authentication & authorization",
        "Real-time file analysis",
        "Upload history tracking",
        "Interactive dashboards",
        "Suspicious file reporting system"
      ],
      image: stegoshieldImage,
      status: "completed",
      demoLink: "https://stego-shield.vercel.app/",
      githubLink: "https://github.com/amyy45/StegoShield"
    },
    {
      id: 2,
      title: "PhishAI - Phishing Detection System",
      stack: "FastAPI, React, Scikit-learn, Logistic Regression, Random Forest",
      description: "An AI-based web application that detects phishing URLs using machine learning models trained on URL features and metadata.",
      features: [
        "Real-time phishing URL detection",
        "Machine learning models for classification",
        "Interactive and responsive web interface",
        "Confidence-based prediction output",
        "Secure backend API integration"
      ],
      image: phishAIImage,
      status: "completed",
      demoLink: "https://phishai.vercel.app/", 
      githubLink: "https://github.com/aashritha99/phishAI"
    },
    {
      id: 3,
      title: "Mini Cybersecurity Labs / Practice Projects",
      stack: "Linux, Wireshark, Burp Suite, Python Scripts",
      description: "Hands-on labs covering various cybersecurity domains and practical security testing.",
      features: [
        "Incident response escalation",
        "Log analysis exercises",
        "Password cracking techniques",
        "Web application security testing",
        "Network monitoring practices"
      ],
      image: cyberLabsImage,
      status: "completed",
      demoLink: "N/A",
      githubLink: "null"
    },
    {
      id: 4,
      title: "Network Vulnerability Scanning & Reporting",
      stack: "Kali Linux, Nmap, OpenVAS, Python",
      description: "Conducting comprehensive vulnerability assessments on simulated network environments.",
      features: [
        "Network vulnerability scanning",
        "Detailed security reports",
        "Misconfiguration identification",
        "Open port analysis",
        "Remediation recommendations"
      ],
      image: vulnerabilityScanImage,
      status: "ongoing",
      demoLink: null, // No demo available for ongoing project
      githubLink: "https://github.com/amyy45/network-vulnerability-scanning"
    }
  ];

  return (
    <section id="projects" className="projects">
      {/* Add the TargetCursor component */}
      <TargetCursor 
        targetSelector=".cursor-target" 
        spinDuration={2} 
        hideDefaultCursor={true} 
      />
      
      {/* Animated background elements */}
      <div className="cyber-grid"></div>
      <div className="particle-background"></div>
      
      <div className="projects-content">
        <div className="projects-header">
          <div className="command-line">
            <span className="prompt">$ </span>
            <span className="command">cat projects.txt</span>
          </div>
          
          <h1 className="main-heading">
            <span className="heading-accent">📌 Featured</span> Projects
          </h1>
          
          <div className="command-line">
            <span className="prompt">$ </span>
            <span className="command">projects --show-all --detailed</span>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className={`project-status ${project.status}`}>
                  {project.status === "ongoing" ? "🟡 Ongoing" : "✅ Completed"}
                </div>
              </div>
              
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                
                <div className="project-stack">
                  <span className="stack-label">Tech Stack:</span>
                  <span className="stack-items">{project.stack}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-actions">
                  {project.demoLink ? (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="professional-btn primary cursor-target"
                    >
                      <span className="btn-icon">👁️</span>
                      <span className="btn-text">View Demo</span>
                      <div className="btn-hover-effect"></div>
                    </a>
                  ) : (
                    <button 
                      className="professional-btn primary cursor-target disabled"
                      disabled
                    >
                      <span className="btn-icon">⏳</span>
                      <span className="btn-text">Demo Coming Soon</span>
                    </button>
                  )}
                  
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="professional-btn secondary cursor-target"
                  >
                    <FaGithub className="btn-icon" />
                    <span className="btn-text">GitHub</span>
                    <div className="btn-hover-effect"></div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;