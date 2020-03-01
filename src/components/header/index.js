import React from "react"
import { Link } from "gatsby"
import './header.css'
import logo from '../../images/logo2.png'



const Header = () => {


  return (
    <>
      <div className="header">
        <div className="container">
          <span className="mobmenu-link" id="jsMobMenuLink"><i className="fas fa-bars"></i> <small>Меню</small></span>
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
                <Link to='/'>Медиа</Link>
            </li>
            <li>
                <Link to='/lyric/'>Песни</Link>
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
