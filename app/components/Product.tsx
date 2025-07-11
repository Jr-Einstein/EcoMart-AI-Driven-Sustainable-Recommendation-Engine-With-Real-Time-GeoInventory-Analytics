'use client';

import React from 'react';
import './Product.css';
import { useStateValue } from '../lib/StateProvider';

interface ProductProps {
  title: string;
  image: string;
  id: string;
  price: number;
  rating: number;
  badge_id: number;
}

function Product({ title, image, id, price, rating, badge_id }: ProductProps) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
        badge_id,
      },
    });
  };

  return (
    <div className="product">
      {/* Top row: Deal badge + Heart */}
      <div className="product__top">
        <span className="product__badge">Deal</span>
        <span className="product__heart">♡</span>
      </div>

      {/* Image */}
      <img
        src={image}
        alt={title}
        style={{ maxHeight: '150px', objectFit: 'contain', marginBottom: '10px' }}
      />

      {/* Info */}
      <div className="product__info">
        <p className="product__title">{title}</p>
        <div className="product__price">
          <span className="product__price--now">${price.toFixed(2)}</span>{' '}
          <span className="product__price--old">$1,569.00</span>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
      </div>

      <button className="product__button" onClick={addToBasket}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
