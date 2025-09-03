import React, { useState } from 'react';
import TargetCursor from '../components/TargetCursor';
import '../contact.css';

// Import icons (you'll need to install react-icons or use your preferred method)
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, ] = useState(false);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <section id="contact" className="contact">
      <TargetCursor 
        targetSelector=".cursor-target" 
        spinDuration={2} 
        hideDefaultCursor={true} 
      />
      
      {/* Animated background elements */}
      <div className="cyber-grid"></div>
      <div className="particle-background"></div>
      
      <div className="contact-content">
        <div className="contact-header">
          <div className="command-line">
            <span className="prompt">$ </span>
            <span className="command">connect --sneha</span>
          </div>
          
          <h1 className="main-heading">
            <span className="heading-accent">Get In</span> Touch
          </h1>
          
          <p className="contact-description">
            I'm always interested in discussing cybersecurity projects, research opportunities, 
            or innovative tech solutions. Let's connect and build something secure together.
          </p>
        </div>
        
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-section">
              <div className="command-line">
                <span className="prompt">$ </span>
                <span className="command">contact_info --list</span>
              </div>
              
              <div className="info-items">
                <a href="mailto:threatlayer@gmail.com" className="info-item cursor-target block no-underline">
                  <div className="info-icon email" role="img" aria-label="Email">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 6 12 13 2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="info-content">
                    <h3>Email</h3>
                    <p>threatlayer@gmail.com</p>
                  </div>
                </a>

                
                <div className="info-item cursor-target">
                  <div className="info-icon" role="img" aria-label="Location">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 21s-8-7.58-8-12a8 8 0 1 1 16 0c0 4.42-8 12-8 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="info-content">
                    <h3>Location</h3>
                    <p>Hyderabad, India</p>
                  </div>
                </div>
                
                <a href="https://www.linkedin.com/in/sneha-sah-760b40250/" className="info-item cursor-target" target="_blank" rel="noopener noreferrer">
                  <div className="info-icon linkedin">
                    <FaLinkedin />
                  </div>
                  <div className="info-content">
                    <h3>LinkedIn</h3>
                    <p>@sneha-sah-760b40250</p>
                  </div>
                </a>
                
                <a href="https://github.com/amyy45" className="info-item cursor-target" target="_blank" rel="noopener noreferrer">
                  <div className="info-icon github">
                    <FaGithub />
                  </div>
                  <div className="info-content">
                    <h3>GitHub</h3>
                    <p>@amyy45</p>
                  </div>
                </a>

                <a href="https://x.com/threat_layer" className="info-item cursor-target" target="_blank" rel="noopener noreferrer">
                  <div className="info-icon twitter">
                    <FaTwitter />
                  </div>
                  <div className="info-content">
                    <h3>Twitter</h3>
                    <p>@threat_layer</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="availability">
              <div className="command-line">
                <span className="prompt">$ </span>
                <span className="command">status --availability</span>
              </div>
              
              <div className="status-content">
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <span>Available for work</span>
                </div>
                <p className="status-description">
                  I'm currently looking for new opportunities in cybersecurity and software development. 
                  Feel free to reach out if you have an interesting project!
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="command-line">
              <span className="prompt">$ </span>
              <span className="command">send_message --new</span>
            </div>
            
            {isSubmitted ? (
              <div className="form-success">
                <div className="success-icon">✅</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" action={"https://getform.io/f/bejeemea"} method='POST'>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="cyber-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="cyber-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="cyber-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="cyber-textarea"
                  ></textarea>
                </div>
                
                <button type="submit" className="professional-btn primary cursor-target">
                  <span className="btn-icon">🚀</span>
                  <span className="btn-text">Send Message</span>
                  <div className="btn-hover-effect"></div>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;