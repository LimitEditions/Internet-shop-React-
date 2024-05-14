import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function FeaturedItems(props) {
  const products = [
    { id: uuidv4(), img: require("../img/card1.jpg"), name: "ELLERY X M'O CAPSULE", desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00 },
    { id: uuidv4(), img: require("../img/card2.png"), name: "ELLERY X M'O CAPSULE", desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00 },
    { id: uuidv4(), img: require("../img/card3.png"), name: "ELLERY X M'O CAPSULE", desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00 },
    { id: uuidv4(), img: require("../img/card4.png"), name: "ELLERY X M'O CAPSULE", desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00 },
    { id: uuidv4(), img: require("../img/card5.png"), name: "ELLERY X M'O CAPSULE", desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00 },
    { id: uuidv4(), img: require("../img/card6.png"), name: "ELLERY X M'O CAPSULE", desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00 }
  ]
  return (
    <section className="contener">
      <section className="second__container column">
        <div className="heading">
          <h3>Fetured Items</h3>
          <p>Shop for items based on what we featured in this week</p>
        </div>
        <div className="second__container">
          {products.map(product => (
            <div className="card" key={product.id}>
              <div className="img__Card">
                <img src={product.img} alt={`card ${product.id}`} />
              </div>
              <Link to={`/product`}>
                <div className="text__Card">
                  <h4>{product.name}</h4>
                  <h3>{product.desc}</h3>
                  <p>${product.price}</p>
                </div>
              </Link>
              <div className="card__hover">
                <img src={require("../img/hover.png")} alt="hover" />
                <button className="button-hover" onClick={props.addToCart}>
                  <img src={require("../img/basket.png")} alt="basket" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <Link to={`/catalog`}><button className="btn">Browse All Product</button></Link>
      </section>
    </section >
  )
}

export default FeaturedItems;