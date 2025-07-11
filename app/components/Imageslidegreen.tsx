'use client'

import React, { useEffect, useState } from 'react';
import './Imageslidegreen.css';

function ImageSliderGreen() {
  const imgs = [
    { id: 1, value: 'https://coolerinsights.com/wp-content/uploads/2023/11/Green-Marketing-Sustainable-Packaging.jpg' },
    { id: 2, value: 'https://www.go-green.ae/wp-content/uploads/2024/10/Market-size-for-eco-friendly-products7.jpg' },
    { id: 3, value: 'https://d2fryjlmubyuuh.cloudfront.net/wp-content/uploads/2025/06/11115223/Gemini_Generated_Ima._imresizer.webp' },
    { id: 4, value: 'https://img.freepik.com/premium-photo/flat-lay-sustainable-products-green-background-ecofriendly-lifestyle-concept_14117-652897.jpg' },
  ];
  const [val, setVal] = useState(0);

  const handleNext = () => {
    const index = val < imgs.length - 1 ? val + 1 : 0;
    setVal(index);
  };

  const handlePrev = () => {
    const index = val > 0 ? val - 1 : imgs.length - 1;
    setVal(index);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [val]);

  return (
    <div className="main">
      <img className="slideimg" src={imgs[val].value} alt="EcoMart Slider" />
      <div className="slider-controls">
        <button onClick={handlePrev} className="prev-buttong">
          ‹
        </button>
        <button onClick={handleNext} className="next-buttong">
          ›
        </button>
      </div>
    </div>
  );
}

export default ImageSliderGreen;