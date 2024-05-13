import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logoImage from './images/mochi_dulce_creamery_logo.png'; // Import the image file
import './css/about.css'; // Import the CSS file

function About() {
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
      {/* Rest of the About component content */}
      <div className="container">
        <h1>About Page</h1>
        <p>At Mochi & Dulce Creamery, nestled in the heart of the bustling city, a young entrepreneur named Emily discovered her passion for ice cream. Enchanted by the whimsical flavors concocted by Mochi and Dulce, she found herself drawn to their vibrant personalities and delectable treats. With a twinkle in her eye and a sprinkle of determination, Emily embarked on her own journey, joining forces with Mochi and Dulce to elevate the ice cream experience to new heights.</p>
        <p>As Emily poured her heart and soul into the business, she brought her own flair to the table, infusing the menu with her creative twists and innovative ideas. With each scoop of ice cream, she shared her story, inviting customers to be part of her delicious adventure. Together with Mochi and Dulce, Emily transformed Mochi & Dulce Creamery into more than just a place to satisfy sweet cravings—it became a vibrant community where friends gathered, laughter echoed, and dreams blossomed.</p>
        <p>With every swirl of creamy goodness and every burst of flavor, Emily's passion for entrepreneurship soared. Through her dedication and unwavering spirit, she inspired others to chase their dreams and embrace their unique flavors. At Mochi & Dulce Creamery, Emily found not only success but also a home—a place where her dreams took flight, one scoop at a time.</p>
      </div>
    </div>
  );
}

export default About;
