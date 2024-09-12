import React from 'react';
import './CartPage.css';

const CartPage = ({cartItems ,total ,checkout}) => {
    return (
        <section className ="cart-page">
            <h2>Your Cart</h2>
            <div className ="cart-items-container">
                {cartItems.map((item,index) => (
                    <div key={index} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))}
            </div>
            <h3>Total: {total}</h3>
            <button className ="checkout-button" onClick={checkout}>Proceed to Checkout</button>
        </section>
    );
};

export default CartPage;