import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import PetPortraits from './pages/PetPortraits';
import HomePage from './pages/HomePage'
import About from './pages/About'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App" >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pets" element={<PetPortraits />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
