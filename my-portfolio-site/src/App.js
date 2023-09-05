import React from 'react';
import './App.css';
import { Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
          <Router>
              <Routes path="" element={<Layout />} />
              
         </Router>
    </div>
  );
}

export default App;
