import React from 'react';

function FilterSort() {
    return (
        <section className="contener">
        <div className="filter-sort second__container">
            <div className="filter__details">
                <details className="filter">
                    <summary className="filter__text"><span className="filter__heading filter__hidden">FILTER</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
                            <path
                                d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                                fill="black" />
                        </svg>
                    </summary>
                    <div className="filter__content">
                        <details className="filter__item">
                            <summary className="filter__head">CATEGORY</summary>
                            <div className="filter__link-box">
                                <a href="#" className="filter__link">Accessories</a>
                                <a href="#" className="filter__link">Bags</a>
                                <a href="#" className="filter__link">Denim</a>
                                <a href="#" className="filter__link">Hoodies & Sweats</a>
                                <a href="#" className="filter__link">Jackets & Coats</a>
                                <a href="#" className="filter__link">Polos</a>
                                <a href="#" className="filter__link">Shirts</a>
                                <a href="#" className="filter__link">Shoes</a>
                                <a href="#" className="filter__link">Sweaters & Knits</a>
                                <a href="#" className="filter__link">T-Shirts</a>
                                <a href="#" className="filter__link">Tanks</a>
                            </div>
                        </details>
                    </div>
                    <div className="filter__content">
                        <details className="filter__item">
                            <summary className="filter__head">BRAND</summary>
                            <div className="filter__link-box">
                                <a href="#" className="filter__link">Accessories</a>
                                <a href="#" className="filter__link">Bags</a>
                                <a href="#" className="filter__link">Denim</a>
                                <a href="#" className="filter__link">Hoodies & Sweats</a>
                                <a href="#" className="filter__link">Jackets & Coats</a>
                                <a href="#" className="filter__link">Polos</a>
                                <a href="#" className="filter__link">Shirts</a>
                                <a href="#" className="filter__link">Shoes</a>
                                <a href="#" className="filter__link">Sweaters & Knits</a>
                                <a href="#" className="filter__link">T-Shirts</a>
                                <a href="#" className="filter__link">Tanks</a>
                            </div>
                        </details>
                    </div>
                    <div className="filter__content">
                        <details className="filter__item">
                            <summary className="filter__head">DESIGNER</summary>
                            <div className="filter__link-box">
                                <a href="#" className="filter__link">Accessories</a>
                                <a href="#" className="filter__link">Bags</a>
                                <a href="#" className="filter__link">Denim</a>
                                <a href="#" className="filter__link">Hoodies & Sweats</a>
                                <a href="#" className="filter__link">Jackets & Coats</a>
                                <a href="#" className="filter__link">Polos</a>
                                <a href="#" className="filter__link">Shirts</a>
                                <a href="#" className="filter__link">Shoes</a>
                                <a href="#" className="filter__link">Sweaters & Knits</a>
                                <a href="#" className="filter__link">T-Shirts</a>
                                <a href="#" className="filter__link">Tanks</a>
                            </div>
                        </details>
                    </div>
                </details>
            </div>
            <div className="sort">
                <details className="sort__details">
                    <summary className="sort__content">TRENDING NOW
                        <img className="sort__img" src={require("../img/down.png")} alt="down"/>
                    </summary>
                    <div className="sort__box">
                    </div>
                </details>
                <details className="sort__details">
                    <summary className="sort__content">SIZE
                        <img className="sort__img" src={require("../img/down.png")}alt="down" />
                    </summary>
                    <div className="sort__box">
                        <div className="sort__check">
                            <input id="sort__check1" type="checkbox" />
                            <label for="#">XS</label>
                        </div>
                        <div className="sort__check">
                            <input id="sort__check2" type="checkbox" />
                            <label for="#">S</label>
                        </div>
                        <div className="sort__check">
                            <input id="sort__check3" type="checkbox" />
                            <label for="#">M</label>
                        </div>
                        <div className="sort__check">
                            <input id="sort__check4" type="checkbox" />
                            <label for="#">L</label>
                        </div>
                    </div>
                </details>
                <details className="sort__details">
                    <summary className="sort__content">PRICE
                        <img className="sort__img" src={require("../img/down.png")} alt="down" />
                    </summary>
                    <div className="sort__box">
                    </div>
                </details>
            </div>
        </div>
    </section>
    )
}

export default FilterSort;