import React from 'react'
import './VideoThumb.css'

import youTubeIcon from '../../images/youtube_color.svg'

const VideoThumb = ({thumb, big, red, link, onClick}) => {
    if(link){
        return (
            <a href={link} className={`videothumb ${big ? 'videothumb--big':""}`} onClick={onClick}>
                {thumb ? <img src={thumb} alt=""></img>: ''}
                <div className="videothumb__over">
                    { red ? <img src={youTubeIcon} alt=""/>: <i className="fab fa-youtube"></i>}
                </div>
            </a>
        )
    }

    return (
        <span className={`videothumb ${big ? 'videothumb--big':""}`} onClick={onClick}>
            {thumb ? <img src={thumb} alt=""></img>: ''}
            <span className="videothumb__over">
                { red ? <img src={youTubeIcon} alt=""/>: <i className="fab fa-youtube"></i>}
            </span>
        </span>
    )

};

VideoThumb.defaultProps = {
    big: "",
    red: "",
    thumb: false,
    link: '#',
}

export default VideoThumb