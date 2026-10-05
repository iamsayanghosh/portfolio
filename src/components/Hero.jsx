import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-eyebrow font-mono text-accent">
            <span>B.Tech ECE</span> • <span>Embedded Systems</span> • <span>IoT</span> • <span>Signal Processing</span> • <span>Computer Vision</span> • <span>AI/ML</span>
          </div>
          <h1 className="hero-headline">
            Building <span className="text-accent">intelligent systems</span> across embedded hardware, software, and AI.
          </h1>
          <p className="hero-description text-muted">
            I'm an Electronics & Communication Engineering student who enjoys turning engineering concepts into practical systems. My work spans embedded systems, IoT, signal processing, computer vision, and machine learning.
          </p>
          


          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }}
            >
              View Projects
            </button>
            <a href="/resume.pdf" download="Sayan_Ghosh_Resume.pdf" className="btn btn-outline">
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image-container">
            <img src="/mypic.jpg" alt="Sayan Ghosh" className="hero-image" />
            <div className="hero-image-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
