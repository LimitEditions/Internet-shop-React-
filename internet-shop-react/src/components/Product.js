import React from 'react';
import Navigations from './Navigations';
import ProductImg from './ProductImg';
import Choose from './Choose';
import ProductCard from './ProductCard';

function Product(props) {
    return (
        <>
            <Navigations/>
            <ProductImg/>
            <Choose addToCart={props.addToCart}/>
            <ProductCard addToCart={props.addToCart}/>
        </>
    );
}

export default Product;