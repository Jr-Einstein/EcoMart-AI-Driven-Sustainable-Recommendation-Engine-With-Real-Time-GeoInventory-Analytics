'use client'

import React, { useEffect, useState } from 'react';
import './Imageslidegreen.css';

function ImageSliderGreen() {
  const imgs = [
    { id: 1, value: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=400&fit=crop' },
    { id: 2, value: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=400&fit=crop' },
    { id: 3, value: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&h=400&fit=crop' },
    { id: 4, value: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop' },
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