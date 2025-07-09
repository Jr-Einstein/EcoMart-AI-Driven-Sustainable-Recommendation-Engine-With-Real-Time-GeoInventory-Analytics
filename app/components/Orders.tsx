'use client'

import React from "react";
import "./Orders.css";
import { useStateValue } from "../lib/StateProvider";
import OrderedProduct from "./orderedProduct";

function Orders() {
  const [{ history }] = useStateValue();

  const reversedHistory = [...history].reverse();

  return (
    <div className="orders">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=200&fit=crop" alt="EcoMart Ad" />
        <div>
          <h2 className="checkout__title">Your Orders</h2>
          {reversedHistory.map((item: any, index: number) => (
            <OrderedProduct
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
    </div>
  );
}

export default Orders;