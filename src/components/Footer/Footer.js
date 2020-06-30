import React from 'react'
import {Link} from 'gatsby'
import './Footer.css'

import logo from '../../images/logo.png'

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-4">
                        <div className="footer__left">
                            <Link to="/" className="footer__logo"><img src={logo} alt=""/></Link>
                            <div className="footer__descr">© Evanescence Rus. Русскоязычный сайт<br/>
                                о группe Evanescence. В случае копирования<br/>
                                материалов, обратная ссылка (или баннер)<br/>
                                на evanescence-rus.ru обязательна.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4">
                        <div className="footer__social__we">
                            <div className="footer__title">Официальные аккаунты группы</div>
                            <div className="footer__iconwrap footer__iconwrap_first">
                                <a href="https://twitter.com/evanescence" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/Evanescence" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                                <a href="https://www.instagram.com/evanescenceofficial/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.youtube.com/user/evanescencevideo" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                            </div>
                            <div className="footer__title">Мы в социальных сетях</div>
                            <div className="footer__iconwrap">
                                <a href="https://www.youtube.com/user/EvanescenceRussia" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                                <a href="https://twitter.com/EvanescenceRu" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                                <a href="https://vk.com/evanescence" target="_blank" rel="noopener noreferrer"><i className="fab fa-vk"></i></a>
                                <a href="https://vimeo.com/user8476795" target="_blank" rel="noopener noreferrer"><i className="fab fa-vimeo"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4">
                        <div className="footer__nav">
                            <div className="footer__title">Навигация</div>
                            <ul>
                                <li><Link to="/">Главная</Link></li>
                                <li><Link to="/biography">О Группе</Link>
                                    <ul>
                                        <li><Link to="/biography">История группы</Link></li>
                                        <li><a href="/">Биографии</a></li>
                                        <li><a href="/">Интервью</a></li>
                                    </ul>
                                </li>
                                <li><Link to="/discography">Дискография</Link></li>
                                <li><Link to="/media">Медиа</Link>
                                    <ul>
                                        <li><Link to="/media/clips/">Видео</Link></li>
                                        <li><Link to="/media/audio/">Аудио</Link></li>
                                    </ul>
                                </li>
                                <li><Link to='/lyric/'>Песни</Link></li>
                                <li><Link to="/other/">Разное</Link>
                                    <ul>
                                        <li><Link to='/other/minus/'>Скачать фонограммы</Link></li>
                                        <li><Link to='/media/audio/'>Скачать альбомы</Link></li>
                                        <li><Link to='/other/piano-sheets/'>Скачать ноты</Link></li>
                                    </ul>
                                </li>
                                <li><a href="https://gallery.evanescence-rus.ru/">Фотографии</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="botmenu__row row no-gutters justify-content-between align-items-center">
                    <ul className="botmenu">
                        <li><a href="/">О сайте</a></li>
                        <li><a href="/">Контакты</a></li>
                        <li><a href="/">Ссылки</a></li>
                    </ul>
                    <div className="copy">
                        Development by A↑F
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer