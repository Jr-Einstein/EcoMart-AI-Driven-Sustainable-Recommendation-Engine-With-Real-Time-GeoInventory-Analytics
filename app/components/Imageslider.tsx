'use client'

import React, { useEffect, useState } from 'react';
import './ImageSlider.css';

function ImageSlider() {
  const imgs = [
    { id: 0, value: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop' },
    { id: 1, value: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=400&fit=crop' },
    { id: 2, value: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=400&fit=crop' },
    { id: 3, value: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop' },
    { id: 4, value: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=1200&h=400&fit=crop' },
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
    const interval = setInterval(handleNext, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [val]);

  return (
    <div className="main">
      <img className="slideimg" src={imgs[val].value} alt="Slider Image" />
      <div className="slider-controls">
        <button onClick={handlePrev} className="prev-button">
          ‹
        </button>
        <button onClick={handleNext} className="next-button">
          ›
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;