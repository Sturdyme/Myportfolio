import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeIn from './component/WelcomeIn';
import Home from './component/Home';
import Resume from './pages/Resume';

function App() {
  return (
    <Routes>
      {/* Route for the initial welcome page */}
      <Route path="/" element={<WelcomeIn />} />

      {/* Route for the main portfolio content after login */}
      <Route path="/home" element={<Home />} />

      {/* Route for the resume page */}
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;