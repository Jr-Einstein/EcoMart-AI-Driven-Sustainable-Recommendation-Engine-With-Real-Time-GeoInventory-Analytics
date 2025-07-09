'use client'

import React from 'react';
import './Thanks.css';

function Thanks() {
  return (
    <div className="center-image">
      <div className="thanks-container">
        <h1>Thank You for Your Purchase!</h1>
        <p>Your order has been successfully placed.</p>
        <div className="thanks-icon">🎉</div>
      </div>
    </div>
  );
}

export default Thanks;