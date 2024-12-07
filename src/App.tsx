import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './pages/nav';
import AboutUs from './pages/aboutUs';  
import Kitchen from './pages/kitchen';
import Contact from './pages/Contact';
import Livingroom from './pages/Livingroom';
import Outdoors from './pages/outdoors'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Nav/>} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/Livingroom" element={<Livingroom />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/outdoors" element={<Outdoors />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

