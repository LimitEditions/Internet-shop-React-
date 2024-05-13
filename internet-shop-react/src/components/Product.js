import React from 'react';
import Navigations from './Navigations';
import ProductImg from './ProductImg';
import Choose from './Choose';
import ProductCard from './ProductCard';

function Product() {
    return (
        <>
            <Navigations/>
            <ProductImg/>
            <Choose/>
            <ProductCard/>
        </>
    );
}

export default Product;