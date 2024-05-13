import React from 'react';
import Navigations from './Navigations';
import FilterSort from './FilterSort.js';
import CardCatalog from './CardCatalog.js';
import Rounder from './Rounder.js';
import Order from './Order.js';

function Catalog() {
    return (
        <>
            <Navigations/>
            <FilterSort/>
            <CardCatalog/>
            <Rounder/>
            <Order/>
        </>

    )
}

export default Catalog;