'use client'

import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../lib/StateProvider";
import Link from "next/link";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <Link href="/green">
          <img className="checkout__ad" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=200&fit=crop" alt="EcoMart Ad" />
        </Link>
        <div>
          <h2 className="checkout__title">Your shopping Cart</h2>
          {basket.map((item: any, index: number) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              price={item.price}
              rating={item.rating}
              image={item.image}
              title={item.title}
              badge_id={item.badge_id}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;