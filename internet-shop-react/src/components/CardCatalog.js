import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function CardCatalog({ selectSize, addToCart }) {
    const products = [
        { id: uuidv4(), img: require("../img/card1.jpg"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'XS' },
        { id: uuidv4(), img: require("../img/card2.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'S' },
        { id: uuidv4(), img: require("../img/card3.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'M' },
        { id: uuidv4(), img: require("../img/card4.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'L' },
        { id: uuidv4(), img: require("../img/card5.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'XS' },
        { id: uuidv4(), img: require("../img/card6.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'S' },
        { id: uuidv4(), img: require("../img/card7.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'M' },
        { id: uuidv4(), img: require("../img/card8.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'XS' },
        { id: uuidv4(), img: require("../img/card9.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'L' }
    ];

    const filteredSize = selectSize ? products.filter(product => product.size === selectSize) : products;
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
                        <button className="button-hover" onClick={addToCart(product)}>
                            <img src={require("../img/basket.png")} alt="basket" /> Add to Cart </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardCatalog;