import React from 'react';

const Hobbies = ({ hobbies = [] }) => {
  if (!Array.isArray(hobbies) || hobbies.length === 0) {
    return null;
  }

  return (
    <section id="hobbies" className="section">
      <div className="hobbies-content">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-item">
            <h4>{hobby}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
