import React from 'react';

function Rounder() {
    return (
        <div className="second__container rounder">
            <div><svg className="rounder__svg" xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"
                fill="none">
                <path d="M7.99512 2L2.99512 7L7.99512 12L6.99512 14L-0.00488281 7L6.99512 0L7.99512 2Z" fill="black" />
            </svg></div>
            <div className="rounder__box">
                <a href="#" className="rounder__number">1</a>
                <a href="#" className="rounder__number">2</a>
                <a href="#" className="rounder__number">3</a>
                <a href="#" className="rounder__number">4</a>
                <a href="#" className="rounder__number">5</a>
                <a href="#" className="rounder__number">6</a>
                <span>.....</span>
                <a href="#" className="rounder__number">20</a>
            </div>
            <div> <svg className="rounder__svg" xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"
                fill="none">
                <path d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z"
                    fill="black" />
            </svg></div>
        </div>
    )
}

export default Rounder;