import React from 'react';
import { BASE_URL } from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Header = ({ personal }) => {
  // Default profile picture path
  const profilePicture = personal?.profilePicture || `${BASE_URL}/static/ramisha.jpg`;

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-info">
            <h1>{personal?.name || 'Ramisha Munir'}</h1>
            <h2>{personal?.title || 'Data Engineer | Software Engineer'}</h2>
            <p className="location">
              <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
              {personal?.location || 'Oulu, Finland'}
            </p>
          </div>
          <div className="profile-picture-container">
            <img 
              src={profilePicture} 
              alt={personal?.name || 'Profile Picture'} 
              className="profile-picture"
              onError={(e) => {
                e.target.src = `${BASE_URL}/static/ramisha.jpg`;
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

