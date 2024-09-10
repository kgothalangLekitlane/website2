import React from 'react';
import './BestSellers.css';

const BestSellers = ({ products, addToCart }) => {
  return (
    <section className="best-sellers">
      <h2>Best Sellers</h2>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating} / 5</p>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
