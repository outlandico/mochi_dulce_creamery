// Loyalty.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logoImage from './images/mochi_dulce_creamery_logo.png'; // Import the image file
import './css/loyalty.css'; // Import the CSS file

function Loyalty() {
  useEffect(() => {
    window.addEventListener('scroll', function() {
      var logoContainer = document.querySelector('.logo-container');
      var container = document.querySelector('.container');
      var scrollPosition = window.scrollY;

      if (scrollPosition > logoContainer.offsetHeight) {
        container.style.opacity = '0'; // Hide the text when scroll position is below the logo container
      } else {
        container.style.opacity = '1'; // Show the text when scroll position is above the logo container
      }
    });
  }, []); // Empty dependency array ensures the effect is only applied once

  return (
    <div>
      {/* Menu links */}
      <div className="menu-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/loyalty">Loyalty</Link>
      </div>
      {/* Logo placeholder */}
      <div className="logo-container">
        <img src={logoImage} alt="Mochi & Dulce Creamery Logo" className="logo-size" />
      </div>
      {/* Rest of the Loyalty component content */}
      <div className="container">
        <h1>Loyalty Program</h1>
        <p>Join our loyalty program today and start earning rewards with every purchase! At Mochi & Dulce Creamery, we value our loyal customers and want to show our appreciation by offering exclusive benefits.
        With our loyalty program, you'll earn points for every dollar spent. These points can be redeemed for discounts, free treats, and special promotions. Plus, as a member, you'll receive access to exclusive events and offers.</p>
      
        
         </div>
    </div>
  );
}


export default Loyalty;
