'use client'

import React from 'react';
import './Submitted.css';

function Submitted() {
  return (
    <div className="center-images">
      <div className="submitted-container">
        <div className="success-icon">✅</div>
        <h1>Form Submitted Successfully!</h1>
        <p>Thank you for your submission. We will review your eco-friendly product information and get back to you soon.</p>
        <div className="submitted-details">
          <p>Your application is now being processed by our EcoMart team.</p>
        </div>
      </div>
    </div>
  );
}

export default Submitted;