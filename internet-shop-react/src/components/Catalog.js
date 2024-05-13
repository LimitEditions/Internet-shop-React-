import React, {useState} from 'react';
import Navigations from './Navigations';
import FilterSort from './FilterSort.js';
import CardCatalog from './CardCatalog.js';
import Rounder from './Rounder.js';
import Order from './Order.js';

function Catalog(props) {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };
    return (
        <>
            <Navigations/>
            <FilterSort onSizeChange={handleSizeChange}/>
            <CardCatalog selectSize={selectedSize} addToCart={props.addToCart}/>
            <Rounder/>
            <Order/>
        </>

    )
}

export default Catalog;