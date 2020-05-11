import React, {useState} from "react"
import { Link } from "gatsby"
import './header.css'
import logo from '../../images/logo2.png'
import Mobmenu from '../Mobmenu'



const Header = ({isFixed}) => {

  let [mobmenuIsOpen, setMobmenuIsOpen] = useState(false);

  return (
    <>
      <Mobmenu isOpen={mobmenuIsOpen} closeHandler={() => {setMobmenuIsOpen(false)}} />
      <div className={"header " + (isFixed ? 'header--fixed':'')}>
        <div className="container">
          <button className="mobmenu-link" onClick={() => {setMobmenuIsOpen(true)}}>
            <i className="fas fa-bars"></i> <small>Меню</small>
          </button>
          <ul className="header__menu">
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
            <li>
              <Link to='/other/' activeClassName="current">Разное</Link>
            </li>
            <li>
              <a href="https://gallery.evanescence-rus.ru/">Фотографии</a>
            </li>
          </ul>
          <div className="search">
            <span className="mobmsearch"><i className="fas fa-search"></i></span>
            <form action="#" className="search__form">
              <div className="search__item">
                <input type="text" defaultValue="" placeholder="например, lithium..."></input>
              </div>
              <div className="search__submit">
                <button type="submit"><i className="fas fa-search"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="logowrap">
        <Link to="/" className="logo"><img src={logo} alt=""></img></Link>
      </div>
    </>

)};



export default Header
