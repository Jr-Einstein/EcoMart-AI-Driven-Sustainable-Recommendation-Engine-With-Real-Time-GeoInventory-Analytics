'use client'

import React from "react";
import "./Homegreen.css";
import Product from "./Productgreen";
import ImageSliderGreen from "./Imageslidegreen";
import Link from "next/link";

function Homegreen() {
  return (
    <>
      <div className="homeg">
        <div className="home__containerg">
          <ImageSliderGreen />
        </div>
      </div>
      
      <div className="ecomart-banner">
        <h1>Welcome to EcoMart</h1>
        <p>Shop sustainably with our eco-friendly products that make a positive impact on the environment</p>
      </div>

      <div className="ecomart-section-title">
        <h2>Featured Eco-Friendly Products</h2>
        <p>Discover products that reduce your carbon footprint and promote sustainable living</p>
      </div>

      <div className="home__rowg">
        <Product
          id="843800"
          title="Beco Bamboo Kitchen Towels, 20 sheets Reusable upto 2000 times, 100% Natural and Ecofriendly Alternative to Tissue Papers"
          price={6.35}
          carbon_red={65}
          rating={5}
          image="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400"
          badge_id={5}
        />
        <Product
          id="875615"
          title="Jutify Eco-Friendly Printed Unisex Canvas Shopping Bag, Women's Tote Bag | Spacious, Stylish, Sturdy Handbag"
          price={15.35}
          carbon_red={60}
          rating={4}
          image="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
          badge_id={4}
        />
        <Product
          id="875617"
          title="Qudrat Natural Straw | Coconut Leaf | Biodegradable, Eco-Friendly & Sustainable Drinking Straws (Pack of 100)"
          price={8.99}
          carbon_red={75}
          rating={4}
          image="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400"
          badge_id={5}
        />
        <Product
          id="958745"
          title="Sow and Grow Plantable Pencils (Pack Of 10 Single Pencils) Made With 100% Recycled Paper|Eco Friendly|Return Gift|Corporate Gifting|Green"
          price={14.00}
          carbon_red={80}
          rating={4}
          image="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400"
          badge_id={3}
        />
      </div>

      <div className="badge-banner">
        <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=300&fit=crop" alt="EcoMart Badge System" width="100%" />
      </div>

      <div className="home__rowg">
        <Product
          id="9513254"
          title="Wooden Eyewear Holder | Made With Sheesham Wood | Eyewear Showcase | 6-Inch Height | Decoration | Gift Material"
          price={37.99}
          carbon_red={50}
          rating={3}
          image="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400"
          badge_id={2}
        />
        <Product
          id="1001002"
          title="Terracotta Clay Water Bottle | Capacity of 1 Litres | Purely Biodegradable | Plastic Alternative"
          price={25.78}
          carbon_red={65}
          rating={5}
          image="https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400"
          badge_id={4}
        />
        <Product
          id="1657495"
          title="Bamboo Hot Dish Mats / Table Coasters | 30cm x 30cm | Bamboo Product | Strong and Durable"
          price={21}
          carbon_red={70}
          rating={4}
          image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400"
          badge_id={3}
        />
      </div>

      <div className="home__rowg">
        <Product
          id="1625854"
          title="Hand Made Jute Hanging Chair | Durable Jute Product | Stylish | Comfortable | Elegant Design"
          price={599.99}
          carbon_red={50}
          rating={4}
          image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400"
          badge_id={1}
        />
        <Product
          id="1625957"
          title="HomeStorie Eco-Friendly Foldable Bamboo Laundry Basket Hamper with Lid, Large - 57 Liter (Light Brown)"
          price={20.99}
          carbon_red={85}
          rating={4}
          image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400"
          badge_id={5}
        />
      </div>
    </>
  );
}

export default Homegreen;