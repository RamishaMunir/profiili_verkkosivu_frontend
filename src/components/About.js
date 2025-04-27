import React from 'react';

const About = ({ personal }) => {
  return (
    <section className="section">
      <div className="about-content">
        <p>{personal.summary}</p>
      </div>
    </section>
  );
};

export default About; 