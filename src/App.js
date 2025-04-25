import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import References from './components/References';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';
import { fetchFullCV } from './api';
import './styles.css';

function App() {
  const [cvData, setCvData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchFullCV();
        setCvData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load CV data. Please try again later.');
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="app">
      <Header personal={cvData.personal} />
      <Navigation />
      <main className="main-content">
        <div className="container">
          <h2>About</h2>
          <About personal={cvData.personal} />
          
          <h2>Experience</h2>
          <Experience experience={cvData.experience} />
          
          <h2>Recommendations</h2>
          <Recommendations recommendations={cvData.recommendations} />
          
          <h2>Education</h2>
          <Education education={cvData.education} />
          
          <h2>Skills</h2>
          <Skills skills={cvData.skills} />
          
          <h2>Achievements</h2>
          <Achievements achievements={cvData.achievements} />
          
          <h2>Hobbies</h2>
          <Hobbies hobbies={cvData.hobbies} />
          
          <h2>References</h2>
          <References references={cvData.references} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
