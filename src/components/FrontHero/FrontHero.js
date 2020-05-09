import React from 'react'
import {Link} from 'gatsby'
import './frontHero.css'

import front1 from '../../images/front1.jpg'
import front2 from '../../images/front2.jpg'
import front3 from '../../images/front3.jpg'
import front4 from '../../images/front4.jpg'


const frontHero = () => {
    return(
        <div className="fronthero container">
            <Link to="/biography" className="fronthero__item fronthero__item--big">
                <img src={front1} alt=""/>
                <div className="fronthero__overlay">
                    <span>Band <small>О группе</small></span>
                </div>
            </Link>
            <Link to="/discography" className="fronthero__item">
                <img src={front2} alt=""/>
                <div className="fronthero__overlay">
                    <span>Music <small>Дискография</small></span>
                </div>
            </Link>
            <a href="https://gallery.evanescence-rus.ru/" className="fronthero__item">
                <img src={front3} alt=""/>
                <div className="fronthero__overlay">
                    <span>Photos <small>Фото</small></span>
                </div>
            </a>
            <Link to="/" className="fronthero__item fronthero__concert">
            <img src={front4} alt=""/>
                <div className="fronthero__overlay">
                    <span>Концерты в России</span>
                </div>
            </Link>
        </div>
    )
};

export default frontHero