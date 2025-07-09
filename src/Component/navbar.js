import React, { useEffect, useState } from 'react';
import './navbar.css'; // Import your CSS file for styling
import {Link} from "react-router-dom";

const AmazonNavigationBar = () => {
  const [showPopover, setShowPopover] = useState(true);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const closePopover = () => {
    setDontShowAgain(true);
    setShowPopover(false);
  };

  // useEffect(() => {
  //   if(showPopover) {
  //     const timeout = setTimeout(() => {
  //       setShowPopover(false);
  //     }, 5000);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [showPopover]);

  useEffect(() => {
    const item = document.getElementById('itemToTrack');

    const handleScroll = () => {
      const itemRect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (itemRect.top < windowHeight && itemRect.bottom > 70) {
        setShowPopover(true);
      } else {
        setShowPopover(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
          
          <div className='popover_trigger_nav'>
            <Link style={{textDecoration: 'none'}} to="/green">
              <button id='itemToTrack' className="ecomart-button">EcoMart</button>
            </Link>
            {showPopover && !dontShowAgain && (
              <div className='popover_content_nav'>
                <div className='triangle'></div>
                <p>Introducing our brand new section<br></br>EcoMart - Shop Sustainably</p>
                <button onClick={closePopover} className='got_it'>Got It</button>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default AmazonNavigationBar;