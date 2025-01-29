import React from 'react';
import { BrowserRouter as Router,Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './components/pages/navbar';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Skills from './components/pages/skills';
import Projects from './components/pages/projects';
import Education from './components/pages/education';

function App() {
  return (
    <div className='hero'>
    <div className="hero-section-container">
     <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<About />}></Route> 
        <Route exact path="About" element={<About />}></Route> 
        <Route exact path="Projects" element={<Projects />}></Route> 
        <Route exact path="Skills" element={<Skills />}></Route>
        <Route exact path="Education" element={<Education />}></Route>  
        <Route exact path="Contact" element={<Contact />}></Route>
      </Routes>
     </Router>
     </div>
     </div>
  );
}
export default App;