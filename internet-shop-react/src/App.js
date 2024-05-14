import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from './actions/productActions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/style.css';
import Index from './components';
import Catalog from './components/Catalog';
import Product from './components/Product';
import Registration from './components/Registration';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(loadProducts());
  }, [dispatch]);

  const cart = useSelector(state => state.cart);
  
  return (
      <div className="App">
        <Router>
          <Header />
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
