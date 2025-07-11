'use client';

import React from 'react';
import './navbar.css';
import Link from 'next/link';

const WalmartNavigationBar = () => {
  return (
    <nav className="navblue">
      <ul className="navblue__list">
        <li><a href="#">All Departments</a></li>
        <li><a href="#">Grocery & Essentials</a></li>
        <li><a href="#">Fashion</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Electronics</a></li>
        <li><a href="#">Toys</a></li>
        <li><a href="#">Sports & Outdoors</a></li>
        <li><a href="#">Auto & Tires</a></li>
        <li><a href="#">Health & Wellness</a></li>
        <li><a href="#">Pharmacy</a></li>
      </ul>
    </nav>
  );
};

export default WalmartNavigationBar;
