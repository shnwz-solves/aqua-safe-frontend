// src/App.js - This is your main routing file
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/Navbar/Navbar'; // Import Navbar from its new location
import Home from './components/Home/Home'; // Import Home from its new location
import PredictPage from './components/PredictPage/PredictPage'; // Import PredictPage from its new location
import About from './components/About/About'; // IMPORT NEW About component

function App() {
  return (
    <div className="App">
      {/* Navbar is rendered outside Routes so it appears on all pages and is fixed */}
      <Navbar />

      {/* This div adds padding to push content below the fixed Navbar */}
      {/* Adjust padding-top based on your Navbar's actual height (e.g., 80px based on Navbar's padding) */}
      <div style={{ paddingTop: '80px', flexGrow: 1, position: 'relative', zIndex: 1 }}>
        {/* Routes define which component to render based on the URL path */}
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />
          {/* Predict page route */}
          <Route path="/predict" element={<PredictPage />} />
          {/* About page route - now uses the separate About component */}
          <Route path="/about" element={<About />} />
          {/* Add more routes for other pages as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
