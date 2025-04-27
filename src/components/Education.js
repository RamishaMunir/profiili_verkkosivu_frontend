import React from 'react';
import { BASE_URL } from '../api';

const Education = ({ education }) => {
  // Ensure education is an array before mapping
  const educationList = Array.isArray(education) ? education : [];

  const getInstitutionLogo = (institution) => {
    if (!institution) return null;
    
    const institutionLower = institution.toLowerCase().trim();
    console.log('Institution to match:', institution, institutionLower);
    
    if (institutionLower.includes('oulu')) {
      return `${BASE_URL}/static/University-of-Oulu.png`;
    } else if (institutionLower.includes('comsats')) {
      return `${BASE_URL}/static/COMSATS.jpg`;
    } else if (institutionLower.includes('integration') || institutionLower.includes('osao')) {
      return `${BASE_URL}/static/osao.jpg`;
    }
    return null;
  };

  const getLogoClassName = (institution) => {
    if (!institution) return '';
    
    const institutionLower = institution.toLowerCase().trim();
    if (institutionLower.includes('oulu')) {
      return 'university-logo';
    } else if (institutionLower.includes('comsats')) {
      return 'comsats-logo';
    }
    return '';
  };

  return (
    <section className="section">
      <div className="education-content">
        {educationList.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <div className="institution-logo">
                <img 
                  src={getInstitutionLogo(edu.institution)} 
                  alt={`${edu.institution} logo`}
                  className={getLogoClassName(edu.institution)}
                  onError={(e) => {
                    console.log('Error loading image:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="education-info">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p className="date">{edu.period}</p>
              </div>
            </div>

            {edu.gpa && (
              <p className="gpa"><strong>GPA:</strong> {edu.gpa}</p>
            )}

            {edu.courses && Array.isArray(edu.courses) && (
              <div className="courses">
                <p><strong>Key Courses:</strong></p>
                <ul>
                  {edu.courses.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 