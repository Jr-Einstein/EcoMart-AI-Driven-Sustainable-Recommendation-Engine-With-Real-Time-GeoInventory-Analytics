'use client'

import React, { useEffect, useState } from 'react';
import './navbar.css';
import Link from "next/link";

const AmazonNavigationBar = () => {
  return (
    <div className="amazon-nav">
      <div className="amazon-nav-section">
        <ul className="amazon-nav-list">
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
      </div>
    </div>
  );
};

export default AmazonNavigationBar;
