import React from 'react';
import './ProductsPage.css'

const ProductsPage = ({products ,addToCart}) => {
    return (
        <section className ="products-page">
            <h2>All Products </h2>
            <div className="products-container">
                {products.map((product) =>(
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </section>
    );

};

export default ProductsPage;