import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from './images/mochi_dulce_creamery_logo.png';
import frescaImage from './images/fresca.png';
import pinaImage from './images/pina.png';
import './css/home.css';

function Home() {
  useEffect(() => {
    window.addEventListener('scroll', function() {
      var logoContainer = document.querySelector('.logo-container');
      var container = document.querySelector('.container');
      var scrollPosition = window.scrollY;

      if (scrollPosition > logoContainer.offsetHeight) {
        container.style.opacity = '0';
      } else {
        container.style.opacity = '1';
      }
    });
  }, []);

  return (
    <div>
      <div className="menu-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/loyalty">Loyalty</Link>
      </div>
      <div className="logo-container">
        <img src={logoImage} alt="Mochi & Dulce Creamery Logo" className="logo-size" />
      </div>
      <div className="container">
        <h1>Welcome Back!</h1>
        <div className="image-container">
          <img src={frescaImage} alt="Fresca Image" className="left-image img-size" />
          <img src={pinaImage} alt="Pina Image" className="right-image img-size" />
        </div>
      </div>
    </div>
  );
}

export default Home;
