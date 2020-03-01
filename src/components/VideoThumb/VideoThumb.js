import React from 'react'
import { Link } from 'gatsby'
import './VideoThumb.css'

import youTubeIcon from '../../images/youtube_color.svg'

const VideoThumb = ({thumb, big, red}) => {
    return (
        <a href="#" className={`videothumb ${big ? 'videothumb--big':""}`}>
            {thumb ? <img src={thumb} alt=""></img>: ''}
            <div className="videothumb__over">
                { red ? <img src={youTubeIcon} alt=""/>: <i className="fab fa-youtube"></i>}
            </div>
        </a>
    )
};

VideoThumb.defaultProps = {
    big: "",
    red: "",
    thumb: false,
}

export default VideoThumb