import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Subscribe from './Subscribe';
import Navigations from './Navigations';
import ProductImg from './ProductImg';
import Choose from './Choose';
import ProductCard from './ProductCard';

function Product() {
    return (
        <>
            <Header />
            <Navigations/>
            <ProductImg/>
            <Choose/>
            <ProductCard/>
            <Subscribe />
            <Footer />
        </>
    );
}

export default Product;