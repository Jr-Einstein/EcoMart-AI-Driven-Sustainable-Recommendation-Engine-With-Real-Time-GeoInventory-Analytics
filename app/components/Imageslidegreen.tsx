'use client'

import React, { useEffect, useState } from 'react';
import './Imageslidegreen.css';

function ImageSliderGreen() {
  const imgs = [
    { id: 1, value: '/slide/slide1.png' },
    { id: 2, value: '/slide/slide2.png' },
    { id: 3, value: '/slide/slide3.png' },
  ];

  //updated the file
  const [val, setVal] = useState(0);

  const handleNext = () => {
    setVal((prev) => (prev + 1) % imgs.length);
  };

  const handlePrev = () => {
    setVal((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [val]);

  return (
    <div className="main">
      <img className="slideimg" src={imgs[val].value} alt={`Slide ${val + 1}`} />
      <div className="slider-controls">
        <button onClick={handlePrev} className="prev-buttong">‹</button>
        <button onClick={handleNext} className="next-buttong">›</button>
      </div>
    </div>
  );
}

export default ImageSliderGreen;
