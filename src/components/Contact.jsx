import React from 'react';
import { Mail, Download, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-number font-mono text-accent">06</span>
          <h2 className="section-title-inline font-mono text-accent">REACH OUT</h2>
        </div>
        
        <div className="contact-content">
          <h2 className="contact-heading">Let's build something.</h2>
          <p className="contact-text text-muted">
            I'm currently looking for new opportunities, and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-grid">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sayanghosh0856@gmail.com" target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-card-header">
                <div className="contact-icon-wrapper">
                  <Mail size={20} />
                </div>
                <ArrowUpRight size={16} className="contact-arrow text-muted" />
              </div>
              <h3 className="contact-card-title">Email Me</h3>
              <p className="contact-card-detail font-mono text-muted">sayanghosh0856@gmail.com</p>
            </a>

            <a href="https://github.com/iamsayanghosh" target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-card-header">
                <div className="contact-icon-wrapper">
                  <FaGithub size={20} />
                </div>
                <ArrowUpRight size={16} className="contact-arrow text-muted" />
              </div>
              <h3 className="contact-card-title">GitHub</h3>
              <p className="contact-card-detail font-mono text-muted">github.com/iamsayanghosh</p>
            </a>

            <a href="https://www.linkedin.com/in/sayan-ghosh-3abba3301/" target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-card-header">
                <div className="contact-icon-wrapper">
                  <FaLinkedin size={20} />
                </div>
                <ArrowUpRight size={16} className="contact-arrow text-muted" />
              </div>
              <h3 className="contact-card-title">LinkedIn</h3>
              <p className="contact-card-detail font-mono text-muted">linkedin.com/in/sayan-ghosh-3abba3301</p>
            </a>
          </div>
          
          <div className="contact-actions">
            <a href="/resume.pdf" download="Sayan_Ghosh_Resume.pdf" className="btn contact-download-btn">
              <Download size={18} /> Download Resume
            </a>
          </div>
        </div>
      </div>
      
      <footer className="footer font-mono">
        <p>Built by Sayan Ghosh</p>
      </footer>
    </section>
  );
};

export default Contact;
