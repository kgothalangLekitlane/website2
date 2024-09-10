import React, { useState } from 'react';
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
import './assets/styles.css';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Shea Butter', description: 'Pure, unrefined shea butter to moisturize and nourish your skin.', price: 'R100', rating: 4.5 },
    { id: 2, name: 'African Black Soap', description: 'Handmade African black soap for deep cleansing and exfoliation.', price: 'R80', rating: 4.7 },
    { id: 3, name: 'Baobab Oil', description: 'Organic baobab oil to hydrate and rejuvenate your hair and skin.', price: 'R150', rating: 4.8 },
  ]);

  const addToCart = (product) => {
    console.log(`Added ${product.name} to cart.`);
    
  };

  return (
    <div className="App">
      <Header />
      <WelcomeSection />
      <Hero />
      <BestSellers products={products} addToCart={addToCart} />
      <AsSeenIn />
      <About />
      <Owner />
      <Contact />
      <Comments />
      <Footer />
    </div>
  );
};

export default App;
