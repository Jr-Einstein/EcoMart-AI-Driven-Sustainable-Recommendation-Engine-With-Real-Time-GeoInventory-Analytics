'use client';

import React from 'react';
import './navbargreen.css';
import Link from 'next/link';

const WalmartNavigationBarg = () => {
  return (
    <nav className="navgreen">
      <ul className="navgreen__list">
        <Link href="/green"><li><a>EcoMart Home</a></li></Link>
        <li><a href="#">Sustainable Products</a></li>
        <li><a href="#">Eco-Friendly Home</a></li>
        <li><a href="#">Green Living</a></li>
        <li><a href="#">Organic Food</a></li>
        <li><a href="#">Renewable Energy</a></li>
        <li><a href="#">Zero Waste</a></li>
        <Link href="/seller"><li><a>Eco Seller</a></li></Link>
        <Link href="/education"><li><a>Learn More</a></li></Link>
        <Link href="/sustainability"><li><a>Impact Reports</a></li></Link>
      </ul>
    </nav>
  );
};

export default WalmartNavigationBarg;
