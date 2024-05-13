import React from 'react';

function FilterSort({ onSizeChange }) {
    const categories = [
        'Accessories',
        'Bags',
        'Denim',
        'Hoodies & Sweats',
        'Jackets & Coats',
        'Polos',
        'Shirts',
        'Shoes',
        'Sweaters & Knits',
        'T-Shirts',
        'Tranks',
    ];
    
    const handleSizeChange = (e) => {
        const size = e.target.value;
        onSizeChange(size);
    };
    return (
        <section className="contener">
            <div className="filter-sort second__container">
                <div className="filter__details">
                    <details className="filter">
                        <summary className="filter__text"><span className="filter__heading filter__hidden">FILTER</span>
                            <svg xmlns="http//www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
                                <path
                                    d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                                    fill="black" />
                            </svg>
                        </summary>
                        <div className="filter__content">
                            <details className="filter__item">
                                <summary className="filter__head">CATEGORY</summary>
                                {categories.map((category, index) => (
                                    <div key={index} className="filter__link-box">
                                        <a href="#" className="filter__link">{category}</a>
                                    </div>
                                ))}
                            </details>
                        </div>
                        <div className="filter__content">
                            <details className="filter__item">
                                <summary className="filter__head">BRAND</summary>
                                {categories.map((category, index) => ( 
                                    <div key={index} className="filter__link-box">
                                        <a href="#" className="filter__link">{category}</a>
                                    </div>
                                ))}
                            </details>
                        </div>
                        <div className="filter__content">
                            <details className="filter__item">
                                <summary className="filter__head">DESIGNER</summary>
                                {categories.map((category, index) => (
                                    <div key={index} className="filter__link-box">
                                        <a href="#" className="filter__link">{category}</a>
                                    </div>
                                ))}
                            </details>
                        </div>
                    </details>
                </div>
                <div className="sort">
                    <details className="sort__details">
                        <summary className="sort__content">TRENDING NOW
                            <img className="sort__img" src={require("../img/down.png")} alt="down" />
                        </summary>
                        <div className="sort__box">
                        </div>
                    </details>
                    <details className="sort__details">
                        <summary className="sort__content">SIZE
                            <img className="sort__img" src={require("../img/down.png")} alt="down" />
                        </summary>
                        <select className="sort__box" onChange={handleSizeChange}>
                            <option className="sort__check" value="XS">XS</option>
                            <option className="sort__check" value="S">S</option>
                            <option className="sort__check" value="M">M</option>
                            <option className="sort__check" value="L">L</option>
                        </select>
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