import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        
        <div className="modal-header">
          <div className="modal-meta">
            <span className="font-mono text-accent">{project.category}</span>
            <span className="modal-date">{project.date}</span>
          </div>
          <h2>{project.title}</h2>
          <div className="modal-keywords">
            {project.keywords.map((kw, i) => (
              <span key={i} className="keyword-tag">{kw}</span>
            ))}
          </div>
        </div>
        
        <div className="modal-body">
          <div className="modal-section">
            <h3 className="font-mono text-muted">OVERVIEW</h3>
            <p>{project.modal.overview}</p>
          </div>
          
          <div className="modal-section">
            <h3 className="font-mono text-muted">PROBLEM</h3>
            <p>{project.modal.problem}</p>
          </div>
          
          <div className="modal-section">
            <h3 className="font-mono text-muted">APPROACH</h3>
            <p>{project.modal.approach}</p>
          </div>
          
          <div className="modal-section">
            <h3 className="font-mono text-muted">ARCHITECTURE</h3>
            <ul className="modal-list">
              {project.modal.architecture.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="modal-section">
            <h3 className="font-mono text-muted">IMPLEMENTATION & RESULTS</h3>
            <p>{project.modal.implementation}</p>
            <p style={{marginTop: '1rem'}}><strong>Results:</strong> {project.modal.results}</p>
          </div>
          
          <div className="modal-section">
            <h3 className="font-mono text-muted">TECHNOLOGIES</h3>
            <div className="modal-tech">
              {project.modal.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
          <div className="modal-section">
            <h3 className="font-mono text-muted">LINKS</h3>
            <a href={project.github} target="_blank" rel="noreferrer" className="modal-github-link">
              GitHub <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
