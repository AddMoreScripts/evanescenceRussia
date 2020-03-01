import React, { useState, useRef } from 'react'

import './Discalbum.css'

const Discalbum = ({albumData}) => {


    const albumInfo = albumData.frontmatter;




    //state and ui
    let [descriptionIsOpen, setDescriptionVisible] = useState('');

    let [descriptionHeight, descriptionHeightChange] = useState('0');

    const descriptionEl = useRef(null);


    let toggleDescription = (e) => {
        if(descriptionIsOpen === 'active'){
            setDescriptionVisible('');
            descriptionHeightChange('0');
        } else {
            setDescriptionVisible('active');
            console.log(descriptionEl.current.scrollHeight);
            descriptionHeightChange(descriptionEl.current.scrollHeight);
        }
    }

    return (
        <div className="discalbum">
            <div className="discalbum__top">
                <div className="discalbum__left">
                    <img src={albumInfo.image.publicURL} alt=""></img>
                    <div className="discalbum__buytext">Послушать / Скачать</div>
                    <div className="discalbum__buyblock">
                        <a href="#"><i className="fab fa-apple"></i>Apple Music</a>
                        <a href="#"><i className="fab fa-google-play"></i>Google Play</a>
                        <a href="#"><i className="fab fa-yandex"></i>Яндекс музыка</a>
                    </div>
                </div>
                <div className="discalbum__right">
                    <div className="discalbum__title">{albumInfo.title} <small>{albumInfo.yearof}</small></div>
                    <div className="discalbum__tracklist">
                        <ol>
                            {
                                albumInfo.list.map( (item) => (
                                  <li key={item}><a>{item}</a></li>  
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
            <div className="discalbum__bottom">
                <div
                    ref={descriptionEl}
                    className={"discalbum__info " + descriptionIsOpen}
                    dangerouslySetInnerHTML={{__html: albumData.html}}
                    style={{height: descriptionHeight}}>
                </div>
                <button onClick={toggleDescription} className="discalbum__show">
                    <i className="fas fa-chevron-down"></i>
                    подробнее об альбоме
                </button>
            </div>
        </div>    

    );
};


export default Discalbum
