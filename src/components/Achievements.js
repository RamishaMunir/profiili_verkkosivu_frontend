import React from 'react';

const Achievements = ({ achievements }) => {
  if (!achievements || !Array.isArray(achievements.honors)) return null;

  return (
    <section id="achievements" className="section">
      <div className="achievements-content">
        {achievements.honors.map((item, index) => (
          <div key={index} className="achievement-item">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
