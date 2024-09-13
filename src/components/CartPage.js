import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = ({ cartItems, total }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <section className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items-container">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <h3>Total: {total}</h3>
      <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
    </section>
  );
};

export default CartPage;
