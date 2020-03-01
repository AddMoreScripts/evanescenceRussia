import React, { useEffect } from 'react'
import './GalleryWidget.css'
import './swiper.min.css'
import Swiper from 'swiper';


const GalleryWidget = ({sources}) => {

    useEffect(() => {
        let GallerySlider = new Swiper('.jsGalleySlider', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            freeMode: true,
        });
    });

    return(
        <div className="galleryWidget">
            <div className="swiper-container jsGalleySlider">
                <div className="swiper-wrapper">
                    {sources.map((item, index) => (
                        <div key={index} className="swiper-slide">
                            <div className="galleryWidget__item">
                                <img src={item} alt=""></img>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="galleryWidget__more">
                <a href="#" className="morebutton">Все фотографии</a>
            </div>
        </div>
    );
};

GalleryWidget.defaultProps = {
    sources: [],
}

export default GalleryWidget