import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Loyalty from './Loyalty';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loyalty" element={<Loyalty />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
