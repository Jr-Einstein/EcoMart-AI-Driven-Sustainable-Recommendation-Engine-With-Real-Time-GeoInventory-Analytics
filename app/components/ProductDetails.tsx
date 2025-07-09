'use client'

import React, { useState } from "react";
import "./ProductDetails.css";
import { useStateValue } from "../lib/StateProvider";

function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState("https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400");
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
    "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400",
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
          Qudrat Natural Straw | Coconut Leaf | Biodegradable, Eco-Friendly &
          Sustainable Drinking Straws (Pack of 100)
        </h2>
        <p>⭐⭐⭐⭐ (23 reviews)</p>
        <br />
        <p className="price">
          <span className="discounted-price">$8.99</span>
          <span className="original-price">$12.99</span>
        </p>
        <br />

        <div className="eco_details">
          <div className="carbon_details">
            <div className="eco-icon">🌱</div>
            <p className="eco_text">75% Less Carbon Emission</p>
          </div>
          <div className="badge_details">
            <div className="popover_trigger">
              <img
                id="badgeToTrack"
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=50&h=50&fit=crop"
                alt="Eco Badge"
                className="eco_image"
              />
            </div>
            <p className="eco_text">Eco-Friendly Badge</p>
          </div>
        </div>
        <br />
        <p>
          Our innovative Quadrat straws offer an exceptional eco-friendly
          solution for all your beverage needs. Made from fallen coconut leaves,
          these straws are not only biodegradable but also act as a natural
          fertilizer when buried in garden soil, enhancing its quality in just
          30 days. They are not only kind to the environment but also
          long-lasting, capable of withstanding both hot and cold beverages
          without breaking or getting soggy. Their temperature range spans from
          a minimum of 32°F / 0°C to a maximum of 302°F / 150°C. Quadrat straws
          are a sustainable alternative to paper or plastic straws, working like
          plastic but feeling entirely natural.
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
            Available: <span style={{ color: "green" }}>In Stock</span>
          </p>
        </div>
        <button
          className="addtocart"
          onClick={() =>
            addToBasket(
              "875617",
              "Qudrat Natural Straw | Coconut Leaf | Biodegradable, Eco-Friendly & Sustainable Drinking Straws (Pack of 100)",
              "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
              8.99,
              4,
              5
            )
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;