import React from 'react';
import { BASE_URL } from '../api';

const Experience = ({ experience }) => {
  const experienceList = Array.isArray(experience) ? experience : [];

  const getCompanyLogo = (company) => {
    if (!company) return null;
    
    const companyLower = company.toLowerCase().trim();
    console.log('Company to match:', company, companyLower);
    
    if (companyLower.includes('aitek')) {
      return `${BASE_URL}/static/aitek.png`;
    } else if (companyLower.includes('biome')) {
      return `${BASE_URL}/static/biome.png`;
    } else if (companyLower.includes('telenor')) {
      return `${BASE_URL}/static/telenor.jpg`;
    } else if (companyLower.includes('university of oulu') || companyLower.includes('oulu')) {
      return `${BASE_URL}/static/University-of-Oulu.png`;
    }
    return null;
  };

  const getLogoClassName = (company) => {
    if (!company) return '';
    
    const companyLower = company.toLowerCase().trim();
    if (companyLower.includes('aitek')) {
      return 'aitek-logo';
    } else if (companyLower.includes('biome')) {
      return 'biome-logo';
    } else if (companyLower.includes('telenor')) {
      return 'telenor-logo';
    } else if (companyLower.includes('university of oulu') || companyLower.includes('oulu')) {
      return 'university-logo';
    }
    return '';
  };

  return (
    <section id="experience" className="section">
      <div className="experience-content">
        {experienceList.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="company-logo">
                <img 
                  src={getCompanyLogo(exp.company)} 
                  alt={`${exp.company} logo`}
                  className={getLogoClassName(exp.company)}
                  onError={(e) => {
                    console.log('Error loading image:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="experience-info">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="location">{exp.location}</p>
                <p className="date">{exp.period}</p>
              </div>
            </div>

            {exp.responsibilities && (
              <div className="responsibilities">
                <p><strong>Responsibilities:</strong></p>
                <ul>
                  {exp.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            )}

            {exp.achievement && (
              <p className="achievement"><strong>Achievement:</strong> {exp.achievement}</p>
            )}

            {exp.skills && (
              <div className="skills">
                <p><strong>Skills:</strong> {exp.skills.join(', ')}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
