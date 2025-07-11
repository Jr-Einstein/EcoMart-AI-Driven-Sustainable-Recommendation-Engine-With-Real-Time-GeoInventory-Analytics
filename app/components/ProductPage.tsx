'use client';

import React from 'react';
import Product from './Product';
import './ProductPage.css';

const products = [
  { id: '1', title: 'Refrigerator', image: '/products/fridge.png', price: 899.99, rating: 4, badge_id: 1 },
  { id: '2', title: 'Milk Bone Treats', image: '/products/dogsnacks.png', price: 9.96, rating: 5, badge_id: 2 },
  { id: '3', title: 'Embroidery Machine', image: '/products/sewing.png', price: 1082.99, rating: 3, badge_id: 1 },
  { id: '4', title: 'Ice Maker', image: '/products/icemaker.png', price: 179.99, rating: 4, badge_id: 3 },
  { id: '5', title: 'Coffee Pack', image: '/products/coffee.png', price: 44.72, rating: 4, badge_id: 5 },
  { id: '6', title: 'Ratchet Straps', image: '/products/ratchet.png', price: 34.5, rating: 5, badge_id: 2 },
  { id: '7', title: 'Jansport Backpack', image: '/products/backpack.png', price: 49.99, rating: 4, badge_id: 3 },
  { id: '8', title: 'Bluetooth Speaker', image: '/products/speaker.png', price: 19.99, rating: 3, badge_id: 4 },
  { id: '9', title: 'Vacuum Cleaner', image: '/products/vacuum.png', price: 129.99, rating: 4, badge_id: 1 },
  { id: '10', title: 'Paddleboard Set', image: '/products/paddleboard.png', price: 199.99, rating: 5, badge_id: 2 },
];

export default function ProductsPage() {
  return (
    <div className="deals-wrapper">
      {/* Walmart-style Ad Layout */}
      <div className="ads-layout">
        {/* Left 2 stacked ads */}
        <div className="ad-stack">
          <div className="ad-card">
            <p className="ad-title">Up to 50% off school supplies</p>
            <img src="/ads/crayola.png" alt="Ad" />
          </div>
          <div className="ad-card">
            <p className="ad-title">Cooking & dining up to 40% off</p>
            <img src="/ads/cookware.png" alt="Ad" />
          </div>
        </div>

        {/* Center banner ad */}
        <div className="ad-banner">
          <p>Get Walmart+ for only $49</p>
          <img src="/ads/walmartplus.png" alt="Ad" />
        </div>

        {/* Right 2 stacked ads */}
        <div className="ad-stack">
          <div className="ad-card">
            <p className="ad-title">Big Deals on sports—score!</p>
            <img src="/ads/sports.png" alt="Ad" />
          </div>
          <div className="ad-card">
            <p className="ad-title">Epic food Deals—up to 30% off</p>
            <img src="/ads/pistachios.png" alt="Ad" />
          </div>
        </div>
      </div>

      {/* Product Rows */}
      <h2 className="product-header">Shop Deals</h2>

      <div className="products-row">
        {products.slice(0, 5).map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>

      <div className="products-row">
        {products.slice(5, 10).map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
