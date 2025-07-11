'use client'

import React, { useEffect, useState } from "react";
import "./Productgreen.css";
import { useStateValue } from "../lib/StateProvider";

interface ProductProps {
  title: string;
  image: string;
  id: string;
  price: number;
  rating: number;
  carbon_red: number;
  badge_id: number;
}

function Product({ title, image, id, price, rating, carbon_red, badge_id }: ProductProps) {
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

  let badge_photo = "";
  let badge_popover = "";

  if (badge_id === 1) {
    badge_photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-2R3Km-U4SekGvP5WYJaWJV7LcbIadMgGA&s";
    badge_popover = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-2R3Km-U4SekGvP5WYJaWJV7LcbIadMgGA&s";
  } else if (badge_id === 2) {
    badge_photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-2R3Km-U4SekGvP5WYJaWJV7LcbIadMgGA&s";
    badge_popover = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-2R3Km-U4SekGvP5WYJaWJV7LcbIadMgGA&s";
  } else if (badge_id === 3) {
    badge_photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-2R3Km-U4SekGvP5WYJaWJV7LcbIadMgGA&s";
    badge_popover = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-2R3Km-U4SekGvP5WYJaWJV7LcbIadMgGA&s";
  } else if (badge_id === 4) {
    badge_photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-2R3Km-U4SekGvP5WYJaWJV7LcbIadMgGA&s";
    badge_popover = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-2R3Km-U4SekGvP5WYJaWJV7LcbIadMgGA&s";
  } else if (badge_id === 5) {
    badge_photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-2R3Km-U4SekGvP5WYJaWJV7LcbIadMgGA&s";
    badge_popover = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-2R3Km-U4SekGvP5WYJaWJV7LcbIadMgGA&s";
  }

  const [isBadgePopoverVisible, setBadgePopoverVisible] = useState(false);
  const [showInfoPopover, setInfoShowPopover] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const showBadgePopover = () => {
    setBadgePopoverVisible(true);
  };

  const hideBadgePopover = () => {
    setBadgePopoverVisible(false);
  };

  const closeInfoPopover = () => {
    setDontShowAgain(true);
    setInfoShowPopover(false);
  };

  return (
    <div className="productg">
      <div className="product__bestseller">ECO-FRIENDLY</div>
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
      <div className="eco_details">
        <div className="carbon_details">
          <div className="eco-icon">🌱</div>
          <p className="eco_text">{carbon_red}% Less Carbon Emission</p>
        </div>
        <div className="badge_details">
          <div className="popover_trigger">
            <img
              id="badgeToTrack"
              src={badge_photo}
              alt="Eco Badge"
              className="eco_image"
              onMouseEnter={showBadgePopover}
              onMouseLeave={hideBadgePopover}
            />
            {isBadgePopoverVisible && (
              <div className="popover_content">
                <div className="content">
                  <img
                    src={badge_popover}
                    className="popover_content_image"
                    alt="Badge Details"
                  />
                </div>
              </div>
            )}
          </div>
          <p className="eco_text">Eco-Friendly Badge</p>
        </div>
      </div>
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;