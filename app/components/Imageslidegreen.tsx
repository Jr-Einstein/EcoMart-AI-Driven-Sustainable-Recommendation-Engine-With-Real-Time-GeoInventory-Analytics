'use client'

import React, { useEffect, useState } from 'react';
import './Imageslidegreen.css';

function ImageSliderGreen() {
  const imgs = [
    { id: 1, value: 'https://cdn.discordapp.com/attachments/1393492522361290865/1393502706316087316/2.png?ex=68736807&is=68721687&hm=fd3fb220d664617f70b8fcb7c427da16bf36d03fce29ed638814efd88f8ff908&' },
    { id: 2, value: 'https://cdn.discordapp.com/attachments/1393492522361290865/1393502707653935104/4.png?ex=68736807&is=68721687&hm=666e4f8ada17314a3452f2be1c22f7e27e514c7c4873ce4137af697fd68a6802&' },
    { id: 3, value: 'https://cdn.discordapp.com/attachments/1393492522361290865/1393502706986913872/3.png?ex=68736807&is=68721687&hm=89e02374fae548a925940fa1b73aae0ba4f268de72456bbad77f599974ac3557&' },
    { id: 4, value: 'https://cdn.discordapp.com/attachments/1393492522361290865/1393503684335505471/image.png?ex=687368f0&is=68721770&hm=1502582e3e5754199307562a7864aa4fa9b39ab300f078df2000ae574381d2c4&' },
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