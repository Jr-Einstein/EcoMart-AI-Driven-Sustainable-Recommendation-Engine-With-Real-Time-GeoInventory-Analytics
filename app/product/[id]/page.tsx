'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Headergreen from '../../components/Headergreen';
import Footer from '../../components/Footer';
import './ProductDetail.css';

const allProducts = [
  {
    id: '1002',
    title: 'Copper Water Bottle | 1000ml | Ayurvedic Benefits | Sustainable & Durable',
    image: '/products/copperbottle.png',
    price: 18.75,
    rating: 5,
    carbon_red: 70,
    badge_id: 2,
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id?.toString();
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <>
        <Headergreen />
        <div className="product-detail-container">
          <div className="not-found">Product not found!</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Headergreen />
      <div className="product-detail-container">
        <div className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-info">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-rating">
              Rating: <span>{'⭐'.repeat(product.rating)}</span>
            </p>
            <p className="product-carbon">Carbon Reduction: {product.carbon_red}%</p>
            <p className="product-badge">Badge ID: {product.badge_id}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
