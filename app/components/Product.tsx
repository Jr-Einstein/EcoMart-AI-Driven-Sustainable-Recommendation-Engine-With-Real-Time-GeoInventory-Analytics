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
        <span className="product__badge">ECO-FRIENDLY</span>
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

      {/* ✅ Badge + Hover Popup */}
      <div className="popover_trigger">
        <div className="badge-wrapper">
          <img
            src={`/badges/badge-${badge_id}.png`}
            alt="Eco-Friendly Badge"
            className="eco_image"
          />
          <div className="popover_content">
            <h4 className="badge_title">5 - LEAF BADGE</h4>
            <p className="badge_subtitle">
              This badge certifies the product's eco-friendly and sustainable attributes, verified by Amazon.
            </p>
            <hr />
            <div className="badge_metrics">
              <p>
                Plastic Reduced <span className="bar"><span style={{ width: '84%' }} className="fill"></span></span> 84%
              </p>
              <p>
                Chemical Used <span className="bar"><span style={{ width: '19%' }} className="fill light"></span></span> 19%
              </p>
              <p>Recyclable ✅</p>
            </div>
            <hr />
            <p className="badge_subtitle">CERTIFICATES</p>
            <div className="certs">
              <img src="/certs/fairtrade.png" />
              <img src="/certs/organic.png" />
              <img src="/certs/eu.png" />
              <img src="/certs/leafseal.png" />
            </div>
          </div>
        </div>
      </div>

      {/* Cart Button */}
      <button className="product__button" onClick={addToBasket}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
