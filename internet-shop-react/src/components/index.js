import React from 'react';
import Main from '../components/Main';
import Nav from '../components/Nav';
import FuturedItems from '../components/FuturedItems';
import Order from './Order';
import { addToCart } from '../actions/cartActions';
function Index(props) {
    return (
        <div>
            <Main />
            <Nav />
            <FuturedItems addToCart={addToCart}/>
            <Order/>
        </div>)
}

export default Index;