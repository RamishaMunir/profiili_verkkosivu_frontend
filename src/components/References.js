import React from 'react';

const References = ({ references = [] }) => {
  if (!references || references.length === 0) {
    return null; // Don't render anything if no references data
  }

  return (
    <section id="references" className="section">
      <div className="references-content">
        {references.map((reference, index) => (
          <div key={index} className="reference-item">
            <h3>{reference.name}</h3>
            <p className="position">{reference.position}</p>
            <p className="company">{reference.company}</p>
            <p className="contact">{reference.contact}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default References; 