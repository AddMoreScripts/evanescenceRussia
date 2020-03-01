import React from 'react'
import { Link } from 'gatsby'
import './FrontNewsItem.css'
import ShareBlock from '../ShareBlock'

import defaultThumb from '../../images/content/g4.png';


const FrontNewsItem = ({thumb, date, color}) => {
    return (
        <div className={`newsitem flexi newsitem--${color}`}>
            <div className="newsitem__img">
                <img src={thumb} alt=""></img>
            </div>
            <div className="newsitem__right">
                <div className="newsitem__line flexi">
                    <div className="newsitem__date">{date}</div>
                    <a href="#" className="newsitem__commcount">
                    <span>0</span>
                        <i className="fas fa-comment"></i>
                    </a>
                </div>
                <a href="#" className="newsitem__text flexi">
                    <p>Evanescence выпускает эксклюзивный бокссет на новом виниле. Evanescence выпускает эксклюзивный </p>
                </a>
                <div className="newsitem__bottom">
                    <div className="newsitem__like">
                        <i className="fas fa-heart"></i>
                        <div className="newsitem__likeadd">12</div>
                    </div>
                    <ShareBlock></ShareBlock>
                </div>
            </div>
        </div>
    )
};

FrontNewsItem.defaultProps = {
    color: "",
    thumb: defaultThumb,
}

export default FrontNewsItem