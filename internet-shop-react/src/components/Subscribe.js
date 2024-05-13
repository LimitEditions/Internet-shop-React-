import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Subscribe() {
  const [email, setEmail] = useState('Enter your email');
  return (
    <section className="contener subscribe-style">
      <div className="second__container subscribe order-column">
        <div className="second__container subscribe order-column">
          <div className="subscribe__photo">
            <img src={require("../img/photo.png")} alt="photoFace" />
            <h4>"Vestibulum quis porttitor dui! Quisque viverra nunc mi, <i>a pulvinar purus condimentum</i>"</h4>
          </div>
          <div className="submit">
            <h3>SUBSCRIBE </h3>
            <h4>FOR OUR NEWLETTER AND PROMOTION</h4>
            <Link to={`/registration`}>          <form action="#" className="form">
              <div className="input">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <button className="submit-button" >Subscribe</button>
            </form>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Subscribe;