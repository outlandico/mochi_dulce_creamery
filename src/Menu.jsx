import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './images/mochi_dulce_creamery_logo.png';
import './css/menu.css';

function Menu() {
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
      {/* Ice cream lists */}
      <div className="side-container">
        <div className="ice-cream-column">
          <h2 className="bold">Asian Flavors</h2>
          <ul>
            <li>Green Tea Ice Cream</li>
            <li>Black Sesame Ice Cream</li>
            <li>Lychee Ice Cream</li>
            <li>Red Bean Ice Cream</li>
            <li>Coconut Pandan Ice Cream</li>
            <li>Thai Tea Ice Cream</li>
            <li>Mochi Ice Cream</li>
            <li>Taro Ice Cream</li>
            <li>Yuzu Sorbet</li>
            <li>Matcha Soft Serve</li>
          </ul>
        </div>
        <div className="ice-cream-column">
          <h2 className="bold">Latin Flavors</h2>
          <ul>
            <li>Dulce de Leche Ice Cream</li>
            <li>Mango Passion Fruit Sorbet</li>
            <li>Guava Ice Cream</li>
            <li>Coconut Lime Ice Cream</li>
            <li>Acai Berry Sorbet</li>
            <li>Papaya Pineapple Ice Cream</li>
            <li>Lucuma Ice Cream</li>
            <li>Horchata Soft Serve</li>
            <li>Passion Fruit Soft Serve</li>
            <li>Chocolate Avocado Ice Cream</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
