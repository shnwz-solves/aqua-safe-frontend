// src/components/Home/Home.js
import React from "react";
import "./Home.css"; // Link to your Home-specific CSS file
import { Link } from "react-router-dom"; // Link for internal navigation

function Home() {
  return (
    <>
      {/* The Navbar component is now rendered in App.js */}

      {/* Main Section */}
      <section className="home-section">
        <div className="left-content">
          {/* --- HTML for "YOUR LOGO" (using the image you saved) --- */}
          <div className="top-logo-text">
            {/* Make sure 'aqua-safe-logo.png' is in your public folder */}
            
          </div>
          {/* --- END HTML for "YOUR LOGO" --- */}

          <h1>
            WATER QUALITY <br />
            <span>PREDICTION USING MACHINE LEARNING</span>
          </h1>
          <p>
            Aqua Safe is your trusted partner for clear water insights. Simply input key parameters, and our intelligent system uses machine learning to predict if your water is safe to drink. Know your water, instantly.
          </p>
          <Link to="/predict" className="btn predict-btn">
            PREDICT
          </Link>

          
        </div>

        <div className="right-content">
          <div className="image-container">
            {/* Correct path for public folder image */}
            <img
              src={process.env.PUBLIC_URL + "/imgHome.jpg"}
              alt="Drinking Water"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
