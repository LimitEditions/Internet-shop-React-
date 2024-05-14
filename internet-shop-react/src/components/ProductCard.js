import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function ProductCard(props) {
    const products = [
        { id: uuidv4(), img: require("../img/card4.png"), name: "ELLERY X M'O CAPSULE", desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00 },
        { id: uuidv4(), img: require("../img/card3.png"), name: "ELLERY X M'O CAPSULE", desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00 },
        { id: uuidv4(), img: require("../img/card6.png"), name: "ELLERY X M'O CAPSULE", desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00 },
    ]
    return (
        <section className="contener">
            <div className="second__container product-card">
                {products.map(product => (
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
                            <button className="button-hover" onClick={props.addToCart(product)}>
                                <img src={require("../img/basket.png")} alt="basket" />
                                Add to Cart
                            </button>
                        </div>
                    </div>))}
            </div>
        </section>
    )
}

export default ProductCard;