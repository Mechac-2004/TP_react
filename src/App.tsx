import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './pages/nav';
import Contact from './pages/Contact/Contact';  

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;