import React from 'react';

const Contact = ({ personal }) => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p><strong>Email:</strong> {personal.email}</p>
          <p><strong>Phone:</strong> {personal.phone}</p>
          <p><strong>Location:</strong> {personal.location}</p>
        </div>
        <div className="social-links">
          {personal.socialLinks && Object.entries(personal.socialLinks).map(([platform, url]) => (
            <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
              {platform}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact; 