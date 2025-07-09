'use client'

import React from "react";
import "./Product.css";
import { useStateValue } from "../lib/StateProvider";

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
      type: "ADD_TO_BASKET",
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
      <div className="product__bestseller">BESTSELLER</div>
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;