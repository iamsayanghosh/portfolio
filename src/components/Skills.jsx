import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["C", "Java", "Python"]
    },
    {
      title: "Embedded Systems",
      skills: ["Embedded C", "ESP32", "Arduino", "Firmware Development", "Microcontroller Programming", "Sensor Interfacing", "GPIO"]
    },
    {
      title: "IoT & Communication",
      skills: ["IoT", "MQTT", "HTTP", "UART", "I2C", "SPI", "Serial Communication"]
    },
    {
      title: "Signal Processing",
      skills: ["DSP", "Signal Filtering", "Feature Extraction", "Sensor Data Processing", "FFT"]
    },
    {
      title: "Embedded RTOS",
      skills: ["FreeRTOS", "Tasks", "Queues", "Semaphores", "Mutexes", "Watchdog"]
    },
    {
      title: "AI/ML",
      skills: ["Scikit-learn", "Random Forest", "Isolation Forest", "Anomaly Detection", "Fault Classification"]
    },
    {
      title: "Computer Vision",
      skills: ["OpenCV"]
    },
    {
      title: "Tools",
      skills: ["Arduino IDE", "VS Code", "Proteus", "KiCad", "MATLAB/Simulink", "Wokwi", "Git"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title" data-number="03">SKILLS</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category-card">
              <h3 className="skill-category-title font-mono">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, index) => (
                  <li key={index} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
