'use client'

import React from "react";
import "./Productbutton.css";
import { useStateValue } from "../lib/StateProvider";
import Link from "next/link";

interface Productbutton1Props {
  title: string;
  image: string;
  id: string;
  price: number;
  rating: number;
  badge_id: number;
}

function Productbutton1({ title, image, id, price, rating, badge_id }: Productbutton1Props) {
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
    <div className="productb">
      <div className="product__infob">
        <p>{title}</p>
        <div className="product__priceb">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__ratingb">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button className="normal" onClick={addToBasket}>
        Add to Cart
      </button>
      <Link href="/product1">
        <button className="greenovation">Available on EcoMart</button>
      </Link>
    </div>
  );
}

export default Productbutton1;