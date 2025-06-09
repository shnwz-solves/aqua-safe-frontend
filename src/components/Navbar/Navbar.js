// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Link to the Navbar's dedicated CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Using Link for the logo to navigate to home */}
        <Link to="/" className="nav-logo">Aqua Safe</Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className="btn">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/predict" className="btn">
              PREDICT
            </Link>
          </li>
          <li>
            <Link to="/about" className="btn">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
