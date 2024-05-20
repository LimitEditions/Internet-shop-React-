import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../reducers/cartReducer';
import { selectProducts } from '../reducers/productReducer';

function FeaturedItems() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };
  const productSlice = products.slice(0, 6);
  console.log(products);
  return (
    <section className="contener">
      <section className="second__container column">
        <div className="heading">
          <h3>Fetured Items</h3>
          <p>Shop for items based on what we featured in this week</p>
        </div>
        <div className="second__container">
          {productSlice.map(product => (
            <div className="card" key={product.id}>
              <div className="img__Card">
                <img src={product.img} alt={`card ${product.id}`} />
              </div>
              <Link to={`/product/`}>
                <div className="text__Card">
                  <h4>{product.name}</h4>
                  <h3>{product.desc}</h3>
                  <p>${product.price}</p>
                </div>
              </Link>
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
        <Link to={`/catalog`}><button className="btn">Browse All Product</button></Link>
      </section>
    </section >
  )
}

export default FeaturedItems;
