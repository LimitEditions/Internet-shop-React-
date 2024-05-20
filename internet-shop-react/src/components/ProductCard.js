import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cartReducer';
import { selectProducts } from '../reducers/productReducer';

function ProductCard() {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    const handleAddToCart = (product) => {
        dispatch(addToCart({ product, quantity: 1 }));
    };

    const productChoose = [products[3], products[2], products[5]];

    return (
        <section className="contener">
            <div className="second__container product-card">
                {productChoose.map(product => (
                    <div className="card" key={product.id}>
                        <div className="img__Card">
                            <img src={product.img} alt={`card ${product.id}`} />
                        </div>
                        <div className="text__Card">
                            <h4>{product.name}</h4>
                            <h3>{product.desc}</h3>
                            <p>${product.price}</p>
                        </div>
                        <div className="card__hover">
                            <img src={require("../img/hover.png")} alt="hover" />
                            <button className="button-hover" onClick={() => handleAddToCart(product)}>
                                <img src={require("../img/basket.png")} alt="basket" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductCard;
