import React from 'react'
import { Link } from 'gatsby'
import './VideoThumb.css'

import youTubeIcon from '../../images/youtube_color.svg'

const VideoThumb = ({thumb, big, red, link}) => {
    if(link){
        return (
            <a href="#" className={`videothumb ${big ? 'videothumb--big':""}`}>
                {thumb ? <img src={thumb} alt=""></img>: ''}
                <div className="videothumb__over">
                    { red ? <img src={youTubeIcon} alt=""/>: <i className="fab fa-youtube"></i>}
                </div>
            </a>
        )
    }

    return (
        <div className={`videothumb ${big ? 'videothumb--big':""}`}>
            {thumb ? <img src={thumb} alt=""></img>: ''}
            <div className="videothumb__over">
                { red ? <img src={youTubeIcon} alt=""/>: <i className="fab fa-youtube"></i>}
            </div>
        </div>
    )

};

VideoThumb.defaultProps = {
    big: "",
    red: "",
    thumb: false,
    link: true,
}

export default VideoThumb