'use client'

import React from "react";
import "./Headergreen.css";
import Link from "next/link";
import { useStateValue } from "../lib/StateProvider";

function Headergreen() {
  const [{ basket }] = useStateValue();

  return (
    <div className="headerg">
      <Link href="/">
        <div className="header__logo">
          <span className="walmart-logo">Walmart</span>
        </div>
      </Link>

      <div className="header__search">
        <input 
          className="header__searchInput" 
          type="text" 
          placeholder="Search everything at Walmart online and in store"
        />
        <button className="header__searchButton">
          <svg className="header__searchIcon" viewBox="0 0 24 24" fill="none">
            <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="header__nav">
        <Link href="/login" className="header__option">
          <div>
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        
        <Link href="/orders" className="header__option">
          <div>
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link href="/dashboard" className="header__option">
          <div>
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Account</span>
          </div>
        </Link>

        <Link href="/checkout" className="header__optionBasket">
          <div className="cart-container">
            <svg className="header__cartIcong" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
            </svg>
            <span className="header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Headergreen;