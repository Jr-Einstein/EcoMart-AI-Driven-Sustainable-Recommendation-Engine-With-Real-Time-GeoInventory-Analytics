'use client';

import './copperbottle.css';
import React from 'react';
import Headergreen from '../../components/Headergreen';
import NavBarg from '../../components/navbargreen';
import Footer from '../../components/Footer';

export default function CopperBottleDetail() {
  return (
    <>
      <Headergreen />
      <NavBarg />

      <div className="copper-page-container">
        <div className="copper-product-card">
          <div className="badge-section">
            <img src="/badges/badge1.png" alt="Eco Badge" className="badge-img" />
            <img src="/badges/badge1-info.png" alt="Badge Info" className="badge-info-img" />
          </div>

          <div className="image-section">
            <img
              src="/products/copperbot.png"
              alt="Copper Bottle"
              className="product-main-img"
            />
          </div>

          <div className="info-section">
            <h2 className="product-name">
              PARAS Copper Bottle 100% Pure Copper | BPA Free Water Bottle | Copper Infused Water | Leak Proof | Office Bottle
            </h2>
            <p className="product-price">$13.99</p>
            <p className="product-rating">⭐⭐⭐⭐</p>
            <p className="product-carbon">Carbon Reduction: 55%</p>

            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
