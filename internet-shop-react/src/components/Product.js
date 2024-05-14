import React from 'react';
import Navigations from './Navigations';
import ProductImg from './ProductImg';
import Choose from './Choose';
import ProductCard from './ProductCard';
import { addToCart } from '../actions/cartActions';

function Product() {
    return (
        <>
            <Navigations/>
            <ProductImg/>
            <Choose addToCart={addToCart} />
            <ProductCard addToCart={addToCart}/>
        </>
    );
}

export default Product;