import React from 'react';

const Recommendations = ({ recommendations = [] }) => {
  if (!recommendations || recommendations.length === 0) {
    return null;
  }

  return (
    <section id="recommendations" className="section">
      <div className="recommendations-content">
        {recommendations.map((recommendation, index) => (
          <div key={index} className="recommendation-item">
            <div className="recommendation-header">
              <div className="recommender-info">
                <h3>{recommendation.name}</h3>
                <p className="position">{recommendation.position}</p>
                <p className="company">{recommendation.company}</p>
              </div>
            </div>
            <div className="recommendation-body">
              <p className="quote">"{recommendation.text}"</p>
            </div>
            <div className="recommendation-footer">
              <p className="date">{recommendation.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations; 