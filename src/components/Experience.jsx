import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title" data-number="05">EXPERIENCE</h2>
        
        <div className="experience-grid">
          {/* Experience Item */}
          <div className="experience-card">
            <div className="experience-header">
              <h3 className="experience-role">Embedded Systems & IoT Intern</h3>
              <p className="experience-company font-mono text-muted">IC Design & Fabrication Centre, Jadavpur University</p>
            </div>
            <div className="experience-date font-mono text-accent">29 Jul 2026 – 28 Aug 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
