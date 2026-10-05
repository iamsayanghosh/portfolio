import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { projectsData } from '../data/projects';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title" data-number="02">SELECTED WORKS</h2>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              {/* Keywords Top Section */}
              <div className="project-keywords font-mono text-muted">
                {project.keywords.map((kw, idx) => (
                  <span key={idx} className="keyword-item">
                    <span className="keyword-dot"></span>{kw.toUpperCase()}
                  </span>
                ))}
              </div>
              
              <div className="project-divider"></div>
              
              {/* Header */}
              <div className="project-header font-mono">
                <span className="project-id text-accent">{project.id}</span>
                <span className="project-date text-muted">{project.date}</span>
              </div>
              
              {/* Body */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category font-mono text-muted">
                {project.category.replace(/\|/g, '•')}
              </p>
              
              <p className="project-description text-muted">{project.description}</p>
              
              {/* Tags */}
              <div className="project-tags font-mono">
                {project.cardTags.map((tag, index) => (
                  <span key={index} className="tag-pill">{tag.toUpperCase()}</span>
                ))}
              </div>
              
              {/* Footer */}
              <div className="project-footer">
                <button className="view-details" onClick={() => openModal(project)}>
                  View Details <ArrowRight size={16} />
                </button>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="github-link font-mono"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default Projects;
