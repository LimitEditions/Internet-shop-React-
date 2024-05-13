import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/style.css'
import Index from './components';
import Catalog from './components/Catalog';
import Product from './components/Product';
import Registration from './components/Registration';
import ShoppingCart from './components/ShoppingCard';
import Header from './components/Header';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Router>
        <Header count={count} />
        <Routes>
          <Route path='/' element={<Index addToCart={addToCart} />}></Route>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/registration' element={<Registration />}></Route>
          <Route path='/cart' element={<ShoppingCart />}></Route>
        </Routes>
        <Subscribe />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
