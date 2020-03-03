import React from 'react'
import {Link} from 'gatsby'
import './MediaItem.css'
import VideoThumb from '../VideoThumb'


const MediaItem = ({thumb, href, title, text, children}) => {
    return (
        <Link to={href} className="mediaitem">
            <div className="mediaitem__img">
                <VideoThumb thumb={thumb} link={false}></VideoThumb>
            </div>
            <div className="mediaitem__text">
                {title}
                <small>{children}</small>
            </div>
        </Link>
    )
};

MediaItem.defaultProps = {
    thumb: '',
    href: '/',
    title: 'Нет названия',
    text: 'Нет описания'
}

export default MediaItem