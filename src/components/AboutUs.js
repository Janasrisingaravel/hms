// AboutUs.js
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-page">
      <h1>About Us</h1>
      <p>
        We are dedicated to providing excellent healthcare services through our 
        innovative Hospital Management System. Our goal is to enhance patient care 
        and streamline hospital operations for better efficiency and service delivery.
      </p>
      <p>
        Our team consists of professionals from various fields, including healthcare, 
        technology, and management, all working together to improve the patient experience.
      </p>
      <div className="about-us-button-container">
        <button className="about-us-button">Learn More</button>
      </div>
    </div>
  );
}

export default AboutUs;
