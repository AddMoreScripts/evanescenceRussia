import React from 'react'
import { Link } from "gatsby"
import './mobmenu.css'



const Mobmenu = ({ isOpen, closeHandler }) => {

  let wrapClasses = "mobmenu";
  let bgClasses = "mobmenu-bg";
  if (isOpen) {
    wrapClasses = "mobmenu opened";
    bgClasses = "mobmenu-bg opened";
  }

  return (
    <>
      <div className={`mobmenu ${wrapClasses}`}>
        <button className="mobmenu__close" onClick={closeHandler}>
          <i className="fas fa-times"></i>
        </button>
        <div className="mobmenu__title">Меню</div>
        <ul>
          <li>
            <Link to='/' activeClassName="current">Главная</Link>
          </li>
          <li>
            <Link to='/biography/' activeClassName="current">О группе</Link>
          </li>
          <li>
            <Link to='/discography/' activeClassName="current">Дискография</Link>
          </li>
          <li>
            <Link to='/media/' activeClassName="current">Медиа</Link>
          </li>
          <li>
            <Link to='/lyric/' activeClassName="current">Песни</Link>
          </li>
          <li>
            <Link to='/other/' activeClassName="current">Разное</Link>
          </li>
          <li>
            <a href="https://gallery.evanescence-rus.ru/">Фотографии</a>
          </li>
        </ul>
      </div>
      <div className={bgClasses} onClick={closeHandler}></div>
    </>
  )
};

Mobmenu.defaultProps = {
  isOpen: "",
}


export default Mobmenu;
