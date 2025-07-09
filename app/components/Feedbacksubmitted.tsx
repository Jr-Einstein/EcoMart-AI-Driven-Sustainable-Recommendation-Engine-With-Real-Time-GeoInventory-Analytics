'use client'

import React from 'react';
import './Feedbacksubmitted.css';

function FSubmitted() {
  return (
    <div className="center-images">
      <div className="feedback-submitted-container">
        <div className="success-icon">🙏</div>
        <h1>Thank You for Your Feedback!</h1>
        <p>Your feedback has been successfully submitted and is very valuable to us.</p>
        <div className="feedback-details">
          <p>We appreciate you taking the time to help us improve EcoMart.</p>
        </div>
      </div>
    </div>
  );
}

export default FSubmitted;