import React from 'react';
import './CheckoutPage.css';

const CheckoutPage =({ cartItems ,total}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Checkout form submitted");
    };

return (
    <section className="checkout-page">
        <h2>Checkout</h2>
        <div className="order-summary">
            <h3>Order Summary</h3>
                {cartItems.map((item,index) =>(
                    <div key={index} className="checkout-item">
                        <h4>{item.name}</h4>
                        <p>Price: {item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))}
                <h3>Total: {total}</h3>
            </div>
            <form className="checkout-form" onSubmit={handleSubmit}>
                <h3>Billing Information</h3>
                <label>
                    Name:
                    <input type ="text" name="name" required />
                </label>
                <label>
                    Payment Method:
                    <select name="paymentMethod" required>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bankTransfer">Bank Transfer</option>
                    </select>

                </label>
                <button type="submit">Submit order</button>
            </form>
    </section>
   );
};


export default CheckoutPage;