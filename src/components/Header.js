import React from 'react';

function Header({ personal }) {
  return (
    <header className="header">
      <div className="container">
        <div className="profile-picture-container">
          <img 
            src="http://192.168.0.102:5000/static/student_card.jpg" 
            alt="Profile" 
            className="profile-picture"
          />
        </div>
        <h1>{personal.name}</h1>
        <h2>{personal.title}</h2>
        <p className="location">{personal.location}</p>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

