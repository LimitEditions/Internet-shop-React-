import React from 'react';
import Main from '../components/Main';
import Nav from '../components/Nav';
import FuturedItems from '../components/FuturedItems';
import Order from './Order';

function Index(props) {
    return (
        <div>
            <Main />
            <Nav />
            <FuturedItems addToCart={props.addToCart}/>
            <Order/>
        </div>)
}

export default Index;