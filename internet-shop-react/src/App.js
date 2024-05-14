import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/style.css'
import Index from './components';
import Catalog from './components/Catalog';
import Product from './components/Product';
import Registration from './components/Registration';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
    console.log("Cart Items:", cartItems);
  };

  return (
    <div className="App">
      <Router>
        <Header count={cartItems.reduce((total, item) => total + item.quantity, 0)} />
        <Routes>
          <Route path='/' element={<Index addToCart={addToCart} />}></Route>
          <Route path='/catalog' element={<Catalog addToCart={addToCart} />}></Route>
          <Route path='/product' element={<Product addToCart={addToCart}/>}></Route>
          <Route path='/registration' element={<Registration />}></Route>
          <Route path='/cart' element={<ShoppingCart cart={cartItems} setCart={setCartItems}/>}></Route>
        </Routes>
        <Subscribe />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
