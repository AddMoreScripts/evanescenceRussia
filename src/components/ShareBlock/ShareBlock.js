import React from 'react'
import {Link} from 'gatsby'
import './ShareBlock.css'

const ShareBlock = () => {
    return(
        <div className="shareblock">
            <div className="shareblock__plus"><i className="fas fa-plus"></i></div>
            <div className="shareblock__add">
                <a href="#"><i className="fab fa-vk"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
        </div>
    );
};

export default ShareBlock