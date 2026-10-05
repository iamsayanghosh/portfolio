import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title" data-number="01">ABOUT</h2>
        
        <div className="about-grid">
          <div className="about-text">
            <h3 className="about-heading">Turning engineering concepts into working systems.</h3>
            <p className="text-muted">
              I'm an Electronics & Communication Engineering student interested in building practical systems that connect hardware, software, and intelligent data processing. I enjoy working with embedded platforms, sensors, signal processing, and machine-learning-based systems, with a focus on understanding how individual components come together into a complete working solution.
            </p>
          </div>
          
          <div className="about-card">
            <div className="about-item">
              <span className="about-label font-mono">EDUCATION</span>
              <p>B.Tech in Electronics & Communication Engineering</p>
            </div>
            
            <div className="about-item">
              <span className="about-label font-mono">FOCUS</span>
              <p>Embedded Systems • IoT • Signal Processing • Computer Vision • AI/ML</p>
            </div>
            
            <div className="about-item">
              <span className="about-label font-mono">INTERESTS</span>
              <p>Intelligent sensing • Computer vision • Robotics • Predictive maintenance • Control systems • Embedded and edge-based applications</p>
            </div>
            
            <div className="about-item">
              <span className="about-label font-mono">CURRENTLY</span>
              <p>Building practical engineering projects while expanding my skills in computer vision, robotics, embedded systems, signal processing, and AI/ML. I am particularly interested in combining sensor data, software, and intelligent algorithms to build useful real-world systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
