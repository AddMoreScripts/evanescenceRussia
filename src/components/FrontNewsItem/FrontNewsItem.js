import React from 'react'
import { Link, useStaticQuery, graphql} from 'gatsby'
import './FrontNewsItem.css'
import ShareBlock from '../ShareBlock'

import defaultThumb from '../../images/content/g4.png';


const FrontNewsItem = ({thumb, date, color, text, link}) => {

    return (
        <div className={`newsitem flexi newsitem--${color}`}>
            <Link to={link} className="newsitem__img">
                <img src={thumb} alt=""></img>
            </Link>
            <div className="newsitem__right">
                <div className="newsitem__line flexi">
                    <div className="newsitem__date">{date}</div>
                    <Link to={link} className="newsitem__commcount">
                    <span>0</span>
                        <i className="fas fa-comment"></i>
                    </Link>
                </div>
                <Link to={link} className="newsitem__text flexi">
                    <p>{text}</p>
                </Link>
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
    text: "",
    date: "",
    link: "/",
}

export default FrontNewsItem