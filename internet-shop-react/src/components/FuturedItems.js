import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedItems(props) {
  return (
    <section className="contener">
      <section className="second__container column">
        <div className="heading">
          <h3>Fetured Items</h3>
          <p>Shop for items based on what we featured in this week</p>
        </div>
        <div className="second__container">
          <div className="card">
            <div className="img__Card">
              <img src={require("../img/card1.jpg")} alt="card1" />
            </div>
            <Link to={`/product`}>
              <div className="text__Card">
                <h4>ELLERY X M'O CAPSULE</h4>
                <h3>
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </h3>
                <p>$52.00</p>
              </div>
            </Link>
            <div className="card__hover">
              <img src={require("../img/hover.png")} alt="hover" />
              <button className="button-hover" onClick={ props.addToCart }>
                <img src={require("../img/basket.png")} alt="basket" />
                Add to Cart
              </button>
            </div>
          </div>
          <div className="card">
            <div className="img__Card">
              <img src={require("../img/card2.png")} alt="card2" />
            </div>
            <Link to={`/product`}>
              <div className="text__Card">
                <h4>ELLERY X M'O CAPSULE</h4>
                <h3>
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </h3>
                <p>$52.00</p>
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
          <div className="card">
            <div className="img__Card">
              <img src={require("../img/card3.png")} alt="card3" />
            </div>
            <Link to={`/product`}>
              <div className="text__Card">
                <h4>ELLERY X M'O CAPSULE</h4>
                <h3>
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </h3>
                <p>$52.00</p>
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
          <div className="card">
            <div className="img__Card">
              <img src={require("../img/card4.png")} alt="card4" />
            </div>
            <Link to={`/product`}>
              <div className="text__Card">
                <h4>ELLERY X M'O CAPSULE</h4>
                <h3>
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </h3>
                <p>$52.00</p>
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
          <div className="card">
            <div className="img__Card">
              <img src={require("../img/card5.png")} alt="card5" />
            </div>
            <Link to={`/product`}>
              <div className="text__Card">
                <h4>ELLERY X M'O CAPSULE</h4>
                <h3>
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </h3>
                <p>$52.00</p>
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
          <div className="card">
            <div className="img__Card">
              <img src={require("../img/card6.png")} alt="card6" />
            </div>
            <Link to={`/product`}>
              <div className="text__Card">
                <h4>ELLERY X M'O CAPSULE</h4>
                <h3>
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </h3>
                <p>$52.00</p>
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
        </div>
        <Link to={`/catalog`}><button className="btn">Browse All Product</button></Link>
      </section>
    </section>
  );
}

export default FeaturedItems;