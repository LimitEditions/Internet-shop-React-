import React from 'react';

function ProductCard(props) {
    return (
        <section className="contener">
            <div className="second__container product-card">
                <div className="card">
                    <div className="img__Card">
                        <img src={require("../img/card4.png")} alt="card4" />
                    </div>
                    <div className="text__Card">
                        <h4>ELLERY X M'O CAPSULE</h4>
                        <h3>
                            Known for her sculptural takes on traditional tailoring,
                            Australian arbiter of cool Kym Ellery teams up with Moda
                            Operandi.
                        </h3>
                        <p>$52.00</p>
                    </div>
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
                    <div className="text__Card">
                        <h4>ELLERY X M'O CAPSULE</h4>
                        <h3>
                            Known for her sculptural takes on traditional tailoring,
                            Australian arbiter of cool Kym Ellery teams up with Moda
                            Operandi.
                        </h3>
                        <p>$52.00</p>
                    </div>
                    <div className="card__hover">
                        <img src={require("../img/hover.png")} alt="hover" />
                        <button className="button-hover">
                            <img src={require("../img/basket.png")} alt="basket" />
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="card card__hidden">
                    <div className="img__Card">
                        <img src={require("../img/card6.png")} alt="card6" />
                    </div>
                    <div className="text__Card">
                        <h4>ELLERY X M'O CAPSULE</h4>
                        <h3>
                            Known for her sculptural takes on traditional tailoring,
                            Australian arbiter of cool Kym Ellery teams up with Moda
                            Operandi.
                        </h3>
                        <p>$52.00</p>
                    </div>
                    <div className="card__hover">
                        <img src={require("../img/hover.png")} alt="hover" />
                        <button className="button-hover">
                            <img src={require("../img/basket.png")} alt="basket" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCard;