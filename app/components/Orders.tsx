'use client';

import React from 'react';
import './Orders.css';
import Navbar from '../components/navbar';
import { useStateValue } from '../lib/StateProvider';
import OrderedProduct from './orderedProduct';

function Orders() {
  const [{ history }] = useStateValue();
  const reversedHistory = [...history].reverse();

  return (
    <>
      <Navbar />
      <div className="orders">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="/ads/banner.png"
            alt="Walmart Orders Banner"
          />
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
    </>
  );
}

export default Orders;
