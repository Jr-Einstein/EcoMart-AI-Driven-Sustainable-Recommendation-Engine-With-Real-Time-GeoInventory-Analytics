'use client';

import React from 'react';
import './Checkout.css';
import Navbar from '../components/navbar';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../lib/StateProvider';
import Link from 'next/link';

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <>
      <Navbar />
      <div className="checkout">
        {/* LEFT SIDE */}
        <div className="checkout__left">
          <Link href="/green">
            <img
              className="checkout__ad"
              src="/ads/banner1.png"
              alt="Walmart Checkout Banner"
            />
          </Link>

          <div className="checkout__items">
            <h2 className="checkout__title">Your Shopping Cart</h2>
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

        {/* RIGHT SIDE */}
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
