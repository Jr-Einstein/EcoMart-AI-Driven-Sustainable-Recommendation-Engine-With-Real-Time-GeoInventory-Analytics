'use client'

import React, { useState } from "react";
import "./orderedProduct.css";
import { useStateValue } from "../lib/StateProvider";
import Link from "next/link";

interface OrderedProductProps {
  id: string;
  image: string;
  title: string;
  price: number;
  rating: number;
  badge_id: number;
}

function OrderedProduct({ id, image, title, price, rating, badge_id }: OrderedProductProps) {
  const [{ basket }] = useStateValue();
  const [showOkText, setShowOkText] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  let eco_friendly = "";
  if (badge_id > 0) {
    eco_friendly = "Eco-Friendly";
  }

  const handleReturnButtonClick = () => {
    setShowOkText(true);
    setButtonDisabled(true);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="orderedProduct">
      <img src={image} alt={title} className="orderedProduct__image" />
      <div className="orderedProduct__info">
        <p className="orderedProduct__title">{title}</p>
        <p className="orderedProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="orderedProduct__rating">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </p>
        <p className="ecofriendly">{eco_friendly}</p>
      </div>
      <div className="orderedProduct__buttons">
        <button className="nor">Return or Replace items</button>
        <button className="nor">Write a product review</button>
        {badge_id > 0 && (
          <Link href="/feedback">
            <button className="grn_feedback">Feedback</button>
          </Link>
        )}
        <button
          className={`grn ${isButtonDisabled ? "disabled" : ""}`}
          onClick={handleReturnButtonClick}
          disabled={isButtonDisabled}
        >
          Return the Box
        </button>
        {showOkText && (
          <div className="threshold_text">
            <p className="ok-text">
              *We will let you know when the threshold of your area is reached.
            </p>
            <Link href="/education" onClick={handleLinkClick}>
              <p className="learn_more">Learn more.</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderedProduct;