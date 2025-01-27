// LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to Our Website!</h1>
      <div className="landing-buttons">
        <Link to="/login">
          <button className="landing-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="landing-button">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
