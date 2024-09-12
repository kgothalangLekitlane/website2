import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleShopNowNavigation = () => {
navigate('/products');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Beauty</h1>
        <p>Experience the best in natural beauty with GreatAfrica Cosmetics.</p>
        <button className="shop-now-button" onClick={handleShopNowNavigation}>Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;
