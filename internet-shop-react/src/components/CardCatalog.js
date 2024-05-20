import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cartReducer';
import { selectProducts } from '../reducers/productReducer';

function CardCatalog({ selectSize }) {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const filteredSize = selectSize ? products.filter(product => product.size === selectSize) : products;

    const handleAddToCart = (product) => {
        dispatch(addToCart({ product, quantity: 1 }));
    };

    return (
        <div className="second__container">
            {filteredSize.map(product => (
                <div key={product.id} className="card card_catalog">
                    <div className="img__Card">
                        <img src={product.img} alt={`card${product.id}`} />
                    </div>
                    <div className="text__Card">
                        <h4>{product.name}</h4>
                        <h3>{product.desc}</h3>
                        <p>$ {product.price}</p>
                    </div>
                    <div className="card__hover">
                        <img src={require("../img/hover.png")} alt="hover" />
                        <button className="button-hover" onClick={() => handleAddToCart(product)}>
                            <img src={require("../img/basket.png")} alt="basket" /> Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardCatalog;
