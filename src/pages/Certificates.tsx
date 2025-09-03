import React from 'react';
import TargetCursor from '../components/TargetCursor';
import '../certificates.css';

const Certificates: React.FC = () => {
  const certifications = [
    {
      title: "Cyber Security and Privacy",
      issuer: "NPTEL",
      date: "2023",
      link: "https://nptel.ac.in/noc/individual_course.php?id=210",
      description: "Comprehensive course covering fundamental concepts of cybersecurity and privacy protection mechanisms."
    },
    {
      title: "Cybersecurity Analyst Job Simulation",
      issuer: "TCS (Forage)",
      date: "2023",
      link: "https://www.theforage.com/simulations/cybersecurity/tcs",
      description: "Hands-on simulation of real-world cybersecurity analyst tasks and scenarios."
    },
    {
      title: "Foundations of Cybersecurity",
      issuer: "Google",
      date: "2023",
      link: "https://grow.google/certificates/cybersecurity/",
      description: "Fundamental principles of cybersecurity including threats, vulnerabilities, and defense strategies."
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Coursera",
      date: "2023",
      link: "https://www.coursera.org/professional-certificates/google-cybersecurity",
      description: "Professional certificate covering tools and protocols to safeguard against cyber threats."
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "2023",
      link: "https://aws.amazon.com/training/awsacademy/",
      description: "Fundamental understanding of AWS Cloud concepts, services, and security."
    },
    {
      title: "Practical Cyber Security for Cyber Security Practitioners",
      issuer: "NPTEL",
      date: "2023",
      link: "https://nptel.ac.in/courses/106105184",
      description: "Advanced practical techniques for cybersecurity professionals."
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <TargetCursor 
        targetSelector=".cursor-target" 
        spinDuration={2} 
        hideDefaultCursor={true} 
      />
      
      {/* Animated background elements */}
      <div className="cyber-grid"></div>
      <div className="particle-background"></div>
      
      <div className="certificates-content">
        <div className="certificates-header">
          <div className="command-line">
            <span className="prompt">$ </span>
            <span className="command">ls certificates/</span>
          </div>
          
          <h1 className="main-heading">
            <span className="heading-accent">My</span> Certifications
          </h1>
          
          <p className="certificates-description">
            Continuous learning is essential in the ever-evolving field of cybersecurity. 
            Here are the certifications I've earned to enhance my skills and knowledge.
          </p>
        </div>
        
        <div className="certificates-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certificate-card cursor-target">
              <div className="card-header">
                <h3 className="certificate-title">{cert.title}</h3>
                <span className="issuer-badge">{cert.issuer}</span>
              </div>
              
              <div className="card-content">
                <p className="certificate-description">{cert.description}</p>
                
                <div className="card-meta">
                  <span className="certificate-date">Earned: {cert.date}</span>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="verify-link"
                  >
                    Verify Certificate ↗
                  </a>
                </div>
              </div>
              
              <div className="card-footer">
                <div className="certificate-ribbon"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="certificates-cta">
          <div className="command-line">
            <span className="prompt">$ </span>
            <span className="command">cat learning_journey.txt</span>
          </div>
          
          <div className="cta-content">
            <p>
              I'm continuously expanding my knowledge in cybersecurity and cloud technologies. 
              Currently pursuing advanced certifications in ethical hacking and cloud security.
            </p>
            
            <div className="cta-button-container">
              <button 
                className="professional-btn primary cursor-target"
                onClick={() => window.open('/learning-path', '_blank')}
              >
                <span className="btn-icon">📚</span>
                <span className="btn-text">View My Learning Path</span>
                <div className="btn-hover-effect"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;