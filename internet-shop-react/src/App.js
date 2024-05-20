import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/style.css';
import Index from './components/index';
import Catalog from './components/Catalog';
import Product from './components/Product';
import Registration from './components/Registration';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  const cart = useSelector(state => state.cart);

  return (
      <div className="App">
        <Router>
          <Header cart={cart}/>
          <Routes>
            <Route path='/' element={<Index />}></Route>
            <Route path='/catalog' element={<Catalog />}></Route>
            <Route path='/product' element={<Product />}></Route>
            <Route path='/registration' element={<Registration />}></Route>
            <Route path='/cart' element={<ShoppingCart cart={cart} />}></Route>
          </Routes>
          <Subscribe />
          <Footer />
        </Router>
      </div>
  );
}

export default App;
