import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </div>
      <h1 className="site-name">GreatAfrica Cosmetics</h1>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Owner</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
      </div>
    </header>
  );
};

export default Header;

