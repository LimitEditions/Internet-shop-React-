import React from 'react';

function ProductImg() {
  return (
    <section className="contener product">
    <div className="product__pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
        <path
          d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z"
          fill="black" />
      </svg>
    </div>
    <div className="product__img">
      <img src={require("../img/productPage.png" )}alt="product" />
    </div>
    <div className="product__pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
        <path
          d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z"
          fill="black" />
      </svg>
    </div>
  </section>
  );
}

export default ProductImg;