import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logoImage from './images/mochi_dulce_creamery_logo.png'; // Import the image file
import './css/contact.css'; // Import the CSS file

function Contact() {
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
      {/* Rest of the Contact component content */}
      <div className="container">
        <h1>Contact Us</h1>
        <p>For business inquiries, please contact us at:</p>
        <p><strong>Phone:</strong> 123-456-7890</p>
        <p><strong>Email:</strong> info@mochidulce.com</p>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
      </div>
    </div>
  );
}

export default Contact;
