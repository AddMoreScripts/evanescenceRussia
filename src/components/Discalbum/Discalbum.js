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

    console.log(albumInfo);
    return (
        <div className="discalbum">
            <div className="discalbum__top">
                <div className="discalbum__left">
                    <img src={albumInfo.image.publicURL} alt=""></img>
                    {
                        (albumInfo.appleLink || albumInfo.googleLink || albumInfo.yandexLink) &&
                            <div className="discalbum__buytext">Послушать / Скачать</div>
                    }
                    <div className="discalbum__buyblock">

                        { albumInfo.appleLink &&
                            <a href={albumInfo.appleLink} target="_blank"  rel="noopener noreferrer">
                                <i className="fab fa-apple"></i>Apple Music</a>
                        }
                        { albumInfo.googleLink &&
                            <a href={albumInfo.googleLink} target="_blank"  rel="noopener noreferrer">
                                <i className="fab fa-google-play"></i>Google Play</a>
                        }
                        { albumInfo.yandexLink &&
                            <a href={albumInfo.yandexLink} target="_blank"  rel="noopener noreferrer">
                                <i className="fab fa-yandex"></i>Яндекс музыка</a>
                        }

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
