'use client'

import React, { useState } from "react";
import "./ProductDetails.css";
import { useStateValue } from "../lib/StateProvider";

function ProductDetails1() {
  const [selectedImage, setSelectedImage] = useState("https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400");
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (id: string, title: string, image: string, price: number, rating: number, badge_id: number) => {
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

  const imageArray = [
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="whole">
      <div className="img">
        <div className="image-slider">
          <div className="image-thumbnails">
            {imageArray.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                className={`thumbnail ${
                  selectedImage === image ? "selected" : ""
                }`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="large-image">
          {selectedImage && <img src={selectedImage} alt="Selected Image" />}
        </div>
      </div>

      <div className="img-desc">
        <h2>
          Jutify Eco-Friendly Printed Unisex Canvas Shopping Bag, Women's Tote
          Bag | Spacious, Stylish, Sturdy Handbag
        </h2>
        <p>⭐⭐⭐⭐ ( 63 reviews )</p>
        <br />
        <p className="price">
          <span className="discounted-price">$15.35</span>
          <span className="original-price">$19.95</span>
        </p>
        <br />

        <div className="eco_details">
          <div className="carbon_details">
            <div className="eco-icon">🌱</div>
            <p className="eco_text">60% Less Carbon Emission</p>
          </div>
          <div className="badge_details">
            <div className="popover_trigger">
              <img
                id="badgeToTrack"
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=50&h=50&fit=crop"
                alt="Eco Badge"
                className="eco_image"
              />
            </div>
            <p className="eco_text">Eco-Friendly Badge</p>
          </div>
        </div>
        <br />

        <p>
          Jutify offers versatile cotton tote bags that are perfect for various
          purposes, such as shopping, work, travel, and more. These spacious and
          sturdy bags are made in India, promoting local employment. They are
          made of thick cotton fabric and come with an inner zip pocket for
          small essentials. Regular cleaning is recommended to maintain their
          quality. Jutify is dedicated to producing high-quality jute and cotton
          bags, setting the standard for quality in the industry.
        </p>
        <br />
        <div className="icons">
          <div className="icon">
            <div className="icon-symbol">🚚</div>
            <p>Free Delivery</p>
          </div>

          <div className="icon">
            <div className="icon-symbol">💳</div>
            <p>Accept Walmart Pay</p>
          </div>

          <div className="icon">
            <div className="icon-symbol">🛡️</div>
            <p>2-year warranty</p>
          </div>

          <div className="icon">
            <div className="icon-symbol">🏆</div>
            <p>Top Brand</p>
          </div>
        </div>

        <div className="product-data-info">
          <p>
            Available: <span style={{ color: "green" }}> In Stock</span>
          </p>
        </div>

        <button
          className="addtocart"
          onClick={() =>
            addToBasket(
              "875615",
              "Jutify Eco-Friendly Printed Unisex Canvas Shopping Bag, Women's Tote Bag | Spacious, Stylish, Sturdy Handbag",
              "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
              15.35,
              4,
              4
            )
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails1;