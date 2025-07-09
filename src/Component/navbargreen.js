import React from 'react';
import './navbargreen.css';
import { Link } from 'react-router-dom';
//import Popover from './Popover';

const AmazonNavigationBarg = () => {
  return (
    <div className="amazon-nav">
      <div className="amazon-nav-section">
        <ul className="amazon-nav-list">
          <Link style={{textDecoration: 'none'}} to="/green">
            <li><a href="#" style={{ color: '#ffc220' }}>EcoMart Home</a></li>
          </Link>
          <li><a href="#">Sustainable Products</a></li>
          <li><a href="#">Eco-Friendly Home</a></li>
          <li><a href="#">Green Living</a></li>
          <li><a href="#">Organic Food</a></li>
          <li><a href="#">Renewable Energy</a></li>
          <li><a href="#">Zero Waste</a></li>
          <Link style={{textDecoration: 'none'}} to="/seller">
            <li><a href="#" style={{ color: '#ffc220' }}>Eco Seller</a></li>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/education">
            <li><a href="#" style={{ color: '#ffc220' }}>Learn More</a></li>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/sustainability">
            <li><a href="#" style={{ color: '#ffc220' }}>Impact Reports</a></li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default AmazonNavigationBarg;