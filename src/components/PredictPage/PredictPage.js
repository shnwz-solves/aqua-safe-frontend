// Frontend/src/components/PredictPage/PredictPage.js
// FIX: Changed '=' to 'from' in the import statement for React and useState
import React, { useState } from "react";
import axios from "axios";
import "./PredictPage.css"; // Link to its dedicated CSS
import { FaSpinner } from "react-icons/fa"; // FontAwesome spinner icon

// Define the backend URL.
// In development, it defaults to localhost.
// In production, you'll set REACT_APP_BACKEND_URL in your hosting environment (e.g., Render, Netlify).
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000/predict";


function PredictPage() {
  const [formData, setFormData] = useState({
    pH: "",
    Hardness: "",
    Solids: "",
    Chloramines: "",
    Sulfate: "",
    Conductivity: "",
    Organic_carbon: "",
    Trihalomethanes: "",
    Turbidity: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    const floatValue = value === "" ? "" : parseFloat(value);
    if (!isNaN(floatValue) || value === "") {
      setFormData({ ...formData, [name]: floatValue });
    }
  };

  const validateForm = () => {
    for (const key in formData) {
      if (formData[key] === "" || formData[key] === 0) {
        return false; // Validation fails if any value is null or 0
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setFormError(
        "Please fill in all fields with valid values greater than zero."
      );
      return;
    }

    setFormError("");
    setIsLoading(true);

    try {
      // Log the URL to the console to verify what Axios is trying to hit
      console.log("Attempting to post to BACKEND_URL:", BACKEND_URL);

      // *** IMPORTANT: Use the BACKEND_URL constant here for consistency and deployment ***
      const response = await axios.post(BACKEND_URL, formData);
      setPrediction(response.data.Potability);
    } catch (error) {
      console.error("Error occurred:", error.response?.data || error.message);
      setFormError(
        "Prediction failed. Please ensure all fields are valid and the server is running."
      ); // More user-friendly error message for deployment
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // The main container for the PredictPage, using the global body background
    <div className="predict-page-container">
      {/* Background Image for Predict Page (ensure bg.jpg is in public folder) */}
      {/* REMOVED: Image tag is no longer needed as background is handled by CSS */}
      
      <div className="containerh1">
        <h1>Water Quality Prediction using Machine Learning</h1>
      </div>
      <div className="container">
        <div className="form-container">
          {/* Form Container */}
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              {Object.keys(formData).map((field, index) => (
                <div key={index} className="form-input">
                  <input
                    type="number"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={field.replace("_", " ").toUpperCase()}
                    step="any"
                    required
                  />
                </div>
              ))}
            </div>

            {/* Form error message */}
            {formError && <div className="form-error">{formError}</div>}

            {/* Predict Button with Animation */}
            <button type="submit" disabled={isLoading}>
              {isLoading ? <FaSpinner className="spinner" /> : "Predict"}
            </button>
          </form>

          {/* Prediction Result Output */}
          {prediction !== null && (
            <div className="prediction-result">
              <h2>Prediction by Machine Learning Algorithm</h2>
              <div className={`result ${prediction === 1 ? "safe" : "unsafe"}`}>
                {prediction === 1
                  ? "Water is Safe to Drink "
                  : "Water is Not Safe to Drink"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PredictPage; // Export as PredictPage
