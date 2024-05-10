import React from 'react';

function Nav() {
    return (
      <nav className="contener">
        <section className="second__container">
        <div className="nav__Img">
          <img src={require("../img/menu1.png")} alt="menu1" />
          <div className="background__Img">
            <img src={require("../img/backgraundMenuSmall.png")} alt="" />
            <div className="nav__Text">
              <p>30% OFF</p>
              <p className="span__Color">FOR WOMEN</p>
            </div>
          </div>
        </div>
        <div className="nav__Img">
          <img src={require("../img/menu2.png")} alt="menu2" />
          <div className="background__Img">
            <img src={require("../img/backgraundMenuSmall.png")} alt="" />
            <div className="nav__Text">
              <p>HOT DEAL</p>
              <p className="span__Color">FOR MEN</p>
            </div>
          </div>
        </div>
        <div className="nav__Img">
          <img src={require("../img/menu3.png")} alt="menu3" />
          <div className="background__Img">
            <img src={require("../img/backgraundMenuSmall.png")} alt="" />
            <div className="nav__Text">
              <p>NEW ARRIVALS</p>
              <p className="span__Color">FOR KIDS</p>
            </div>
          </div>
        </div>
        <div className="nav__ImgLarge">
          <img src={require("../img/menu4.png")} alt="menu4" />
          <div className="background__Img">
            <img src={require("../img/backgroundMenuLarge.png")} alt="" />
            <div className="nav__Text large">
              <p>LUXIROUS & TRENDY</p>
              <p className="span__Color">ACCESORIES</p>
            </div>
          </div>
        </div>
        </section>
      </nav>
    );
  }

  export default Nav;