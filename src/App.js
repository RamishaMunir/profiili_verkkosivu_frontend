import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
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
      <div className="container">
        <About personal={cvData.personal} />
        <Experience experience={cvData.experience} />
        <Education education={cvData.education} />
        <Skills skills={cvData.skills} />
        <Achievements achievements={cvData.achievements} />
        <Contact personal={cvData.personal} />
      </div>
    </div>
  );
}

export default App;
