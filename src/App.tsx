import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './pages/nav';
import Outdoors from './pages/outdoors';  
import './tags.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/outdoors" element={<Outdoors />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
