import React, { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = ['about', 'projects', 'skills', 'education', 'experience', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const pageYOffset = window.scrollY;
      let newActiveSection = 'hero';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          if (pageYOffset >= offsetTop) {
            newActiveSection = section;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          SAYAN GHOSH
        </div>
        
        <nav className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {sections.map((section) => (
            <button
              key={section}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          
          <div className="navbar-actions-mobile">
            <a href="https://github.com/iamsayanghosh" target="_blank" rel="noreferrer" className="nav-icon">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sayan-ghosh-3abba3301/" target="_blank" rel="noreferrer" className="nav-icon">
              <FaLinkedin size={20} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline nav-resume">
              <FileText size={16} /> Resume
            </a>
          </div>
        </nav>

        <div className="navbar-actions-desktop">
          <a href="https://github.com/iamsayanghosh" target="_blank" rel="noreferrer" className="nav-icon">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sayan-ghosh-3abba3301/" target="_blank" rel="noreferrer" className="nav-icon">
            <FaLinkedin size={20} />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline nav-resume">
            <FileText size={16} /> Resume
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
