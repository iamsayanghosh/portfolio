import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title" data-number="04">EDUCATION</h2>
        
        <div className="education-grid">
          <div className="education-card-simple">
            <h3 className="education-school">Netaji Subhash Engineering College</h3>
            <p className="education-degree font-mono text-accent">B.TECH – ELECTRONICS & COMMUNICATION ENGINEERING</p>
            <p className="education-date text-muted font-mono">2023 – 2027</p>
          </div>
          
          <div className="education-card-simple">
            <h3 className="education-school">St. Joseph & Mary's School</h3>
            <p className="education-degree font-mono text-accent">HIGHER SECONDARY</p>
            <p className="education-date text-muted font-mono">2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
