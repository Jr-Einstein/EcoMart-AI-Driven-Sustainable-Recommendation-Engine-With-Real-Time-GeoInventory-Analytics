'use client';

import './copperbottle.css';
import React, { useState } from 'react';
import Headergreen from '../../components/Headergreen';
import NavBarg from '../../components/navbargreen';
import Footer from '../../components/Footer';
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Truck,
  Factory,
  Package,
  Leaf,
  QrCode
} from 'lucide-react';

export default function CopperBottleDetail() {
  const productImages = [
    'https://m.media-amazon.com/images/I/81QgmBG4H4L._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71COBajacmL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71PETlR1wlL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/61H3EhqGM0L._AC_SL1500_.jpg'
    
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % productImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);

  return (
    <>
      <Headergreen />
      <NavBarg />

      <div className="copper-page-container">
        <div className="copper-product-card">
          <div className="image-slider">
            <button onClick={prevImage}><ChevronLeft /></button>
            <img
              src={productImages[currentImage]}
              alt="Copper Bottle View"
              className="product-main-img"
            />
            <button onClick={nextImage}><ChevronRight /></button>
          </div>

          <div className="info-section">
            <h2 className="product-name">
              PARAS Copper Bottle 100% Pure Copper | BPA Free Water Bottle | Copper Infused Water | Leak Proof | Office Bottle
            </h2>
            <p className="product-description">
  Crafted from 100% pure copper, this bottle promotes healthy living while being sustainable. Ideal for office and home use.
</p>
            <p className="product-price">$13.99</p>
            <p className="product-rating">⭐⭐⭐⭐</p>
            <p className="product-carbon">Carbon Reduction: 55%</p>

            <button className="buy-now-btn">Add to cart</button>

            <div className="qr-section">
              <a href="/dashboard" target="_blank" rel="noopener noreferrer">
                <QrCode className="icon" />
              </a>
              <span>Scan for Full Product Lifecycle</span>
            </div>
          </div>
        </div>

        <section className="about-section">
          <h2>About this item</h2>
          <ul>
            <li>✅ Made from 99.9% Pure Copper</li>
            <li>✅ Leak-proof & BPA Free</li>
            <li>✅ Infuses water with health benefits</li>
            <li>✅ Handmade using eco-friendly processes</li>
          </ul>
        </section>

        <div className="eco-process">
          <div className="process-card animate-factory">
            <Factory className="icon" />
            <p>Made in solar-powered factories</p>
          </div>
          <div className="process-card animate-packaging">
            <Package className="icon" />
            <p>Packaged using recycled, biodegradable material</p>
          </div>
          <div className="process-card animate-transport">
            <Truck className="icon" />
            <p>Delivered with electric vehicle transport</p>
          </div>
        </div>

        <div className="product-video">
          <video controls width="100%">
            <source src="/products/copper-story.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="charts-section">
          <div className="chart-card">
            <h3>Carbon Footprint</h3>
            <img src="/badges/carbon-chart.png" alt="Carbon Chart" />
          </div>
          <div className="chart-card">
            <h3>Water Usage</h3>
            <img src="/badges/water-chart.png" alt="Water Chart" />
          </div>
        </div>

        <div className="recommended-products">
          <h3>Recommended Products</h3>
          <div className="rec-list">
            {[1, 2, 3].map(id => (
              <div key={id} className="rec-item">
                <img src={`/products/bottle${id}.png`} alt={`Bottle ${id}`} />
                <p>Eco Copper Bottle {id}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <div className="badge-row">
            {[1, 2, 3].map(id => (
              <img key={id} src={`/badges/badge${id}.png`} alt={`Badge ${id}`} className="badge" />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
