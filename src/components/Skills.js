import React from 'react';

const Skills = ({ skills }) => {
  if (!skills || typeof skills !== 'object') return null;

  const renderCategory = (title, items) => (
    <div className="skill-item" key={title}>
      <h3>{title}</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="section">
      <div className="skills-content">
        {/* Technical Skills */}
        {skills.technical &&
          Object.entries(skills.technical).map(([key, items]) =>
            renderCategory(key.charAt(0).toUpperCase() + key.slice(1), items)
          )}

        {/* Interpersonal Skills */}
        {skills.interpersonal &&
          renderCategory('Interpersonal', skills.interpersonal)}
      </div>
    </section>
  );
};

export default Skills;
