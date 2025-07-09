'use client'

import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../lib/StateProvider";

interface CheckoutProductProps {
  id: string;
  image: string;
  title: string;
  price: number;
  rating: number;
  badge_id: number;
}

function CheckoutProduct({ id, image, title, price, rating, badge_id }: CheckoutProductProps) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  let eco_friendly = "";
  if (badge_id > 0) {
    eco_friendly = "Eco-Friendly";
  }

  return (
    <div className="checkoutProduct">
      <img src={image} alt={title} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </p>
        <p className="ecofriendly">{eco_friendly}</p>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;