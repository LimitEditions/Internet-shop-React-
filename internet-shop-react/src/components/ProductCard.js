import React, { useEffect, useState } from 'react';
import products from '../data/products';

function ProductCard(props) {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setProductList(products);
    }, []);

    return (
        <section className="contener">
            <div className="second__container product-card">
                {productList.map(product => (
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
                            <button className="button-hover" onClick={() => props.addToCart(product)}>
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
