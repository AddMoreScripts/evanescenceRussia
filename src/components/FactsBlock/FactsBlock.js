import React from 'react'
import './FactsBlock.css'


const FactsBlock = () => {
    return (
        <div className="factsblock">
            <div className="frtitle">Интересное</div>
            <div className="factsblock__txt">
                Видео на Lithium снимали в начале ноября 2006 года. Идею для клипа придумала Эми Ли. В
                клипе можно увидеть две Эми. Одна из них, одетая в белое олицетворяет счастье, а другая,
                одетая в чёрное, под водой, - печаль. Они не могут понять как им ужиться вдвоём...
            </div>
            <a href="#" className="factsblock__link">Еще факты</a>
        </div>
    )
};

FactsBlock.defaultProps = {

}

export default FactsBlock