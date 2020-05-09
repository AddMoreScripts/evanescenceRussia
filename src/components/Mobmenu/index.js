import React from 'react'
import { Link } from "gatsby"
import './mobmenu.css'



const Mobmenu = ({isOpen, closeHandler}) => {

  let wrapClasses = "mobmenu";
  let bgClasses = "mobmenu-bg";
  if(isOpen){
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
                <Link to='/'>Главная</Link>
            </li>
            <li>
                <Link to='/biography/'>О группе</Link>
            </li>
            <li>
                <Link to='/discography/'>Дискография</Link>
            </li>
            <li>
                <Link to='/media/'>Медиа</Link>
            </li>
            <li>
                <Link to='/lyric/'>Песни</Link>
            </li>
          </ul>
      </div>
      <div className={bgClasses}  onClick={closeHandler}></div>
    </>
)};

Mobmenu.defaultProps = {
  isOpen: "",
}


export default Mobmenu;
