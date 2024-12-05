import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './pages/nav';
import Kitchen from './pages/kitchen';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Nav/>} />
          <Route path="/kitchen" element={<Kitchen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
