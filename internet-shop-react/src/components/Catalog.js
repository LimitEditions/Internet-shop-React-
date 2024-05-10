import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Navigations from './Navigations';
import FilterSort from './FilterSort.js';
import CardCatalog from './CardCatalog.js';
import Rounder from './Rounder.js';
import Order from './Order.js';
import Subscribe from './Subscribe.js';

function Catalog() {
    return (
        <>
            <Header />
            <Navigations/>
            <FilterSort/>
            <CardCatalog/>
            <Rounder/>
            <Order/>
            <Subscribe/>
            <Footer />
        </>

    )
}

export default Catalog;