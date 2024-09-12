import React, { useState } from 'react';
import {BrowserRouter as Router ,Route ,Routes ,useNavigate} from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import About from './components/About';
import Contact from './components/Contact';
import Comments from './components/Comments';
import Footer from './components/Footer';
import Owner from './components/Owner';
import WelcomeSection from './components/WelcomeSection';
import AsSeenIn from './components/AsSeenIn';
import ProductsPage from './components/ProductsPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import './assets/styles.css';

const App = () => {

  const [products, setProducts] = useState([
    { id: 1, name: 'Shea Butter', description: 'Pure, unrefined shea butter to moisturize and nourish your skin.', price: 'R100', rating: 4.5 },
    { id: 2, name: 'African Black Soap', description: 'Handmade African black soap for deep cleansing and exfoliation.', price: 'R80', rating: 4.7 },
    { id: 3, name: 'Baobab Oil', description: 'Organic baobab oil to hydrate and rejuvenate your hair and skin.', price: 'R150', rating: 4.8 },
  ]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem){
        return prevItems.map(item =>
          item.id === product.id ? {...item, quantity:item.quantity + 1}

        );
      }else{
        return [...prevItems , {...product, quantity: 1}];
      }
    });
  };

  const calculatedTotal = () =>{
    return cartItems.reduce((sum ,item) => sum + item.price* item.quantity ,0)
  };
    console.log(`Added ${product.name} to cart.`);
    
  };

  return ( 
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"
        element={
          <>
            <WelcomeSection />
            <Hero />
            <BestSellers products={products} addToCart={addToCart} />
            <AsSeenIn />
            <About />
            <Owner />
            <Contact />
            <Comments />
          </>
        }
    />
        <Route path ="/products" element={<ProductsPage products={products} addToCart={addToCart}/>} />

        </Routes>
      <Footer />
    </div>
  </Router>
  );
};

export default App;
