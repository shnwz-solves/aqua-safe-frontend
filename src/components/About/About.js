// src/components/About/About.js
import React from 'react';
import './About.css'; // Import the CSS for the About component

function About() {
  return (
    <div className="about-page-container">
      <div className="about-content-box">
        <h2 className="about-heading">About Aqua Safe</h2>
        <p className="about-paragraph">
          Aqua Safe is a machine learning-powered tool designed to predict water potability. By analyzing various water parameters, it provides quick and reliable insights into whether water is safe for consumption. Our mission is to promote healthier living and environmental sustainability through accessible data.
        </p>
        <p className="about-paragraph">
          This project is built using React for the frontend and integrates machine learning models to deliver accurate predictions.
        </p>
        <a
          href="https://github.com/your-github-username/aqua-safe-repo" // Replace with your actual GitHub repo link
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Learn More on GitHub
        </a>
      </div>
    </div>
  );
}

export default About;
