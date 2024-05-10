import React from 'react';

function Main() {
    return (
      <main className="contener main__style">
        <div className="main__Image hiden">
          <img src={require("../img/title.png")} alt="title" />
        </div>
        <div className="main__Div">
          <div className="main__Text">
            <h2>THE BRAND</h2>
            <h3>OF LUXERIOUS <span className="span-ColorTop">FASHION</span></h3>
          </div>
        </div>
        <div className="menu hidden">
        <button className="close">
            <img src={require("../img/close.svg")} alt="close" />
          </button>
          <div className="menu-active">
          <h4 className="menu-heading">MENU</h4>
          <div className="menu-g">
            <h5 className="menu-text">MAN</h5>
            <ul className="menu-list">
              <li>Accessories</li>
              <li>Bags</li>
              <li>Denim</li>
              <li>T-Shirts</li>
            </ul>
          </div>
          <div className="menu-g">
            <h5 className="menu-text">WOMAN</h5>
            <ul className="menu-list">
              <li>Accessories</li>
              <li>Jackets & Coats</li>
              <li>Polos</li>
              <li>T-Shirts</li>
              <li>Shirts</li>
            </ul>
          </div>
          <div className="menu-g">
            <h5 className="menu-text">KIDS</h5>
            <ul className="menu-list">
              <li>Accessories</li>
              <li>Jackets & Coats</li>
              <li>Polos</li>
              <li>T-Shirts</li>
              <li>Shirts</li>
              <li>Bags</li>
            </ul>
          </div>
        </div>
        </div>
      </main>
    );
  }

  export default Main;
  