'use client';

import React from 'react';
import './ProductDetail.css';
import { useParams } from 'next/navigation';

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
  // Add more products if needed
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id?.toString(); // ✅ safely get the ID

  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>Rating: {'⭐'.repeat(product.rating)}</p>
      <p>Carbon Reduction: {product.carbon_red}%</p>
      <p>Badge ID: {product.badge_id}</p>
    </div>
  );
}
