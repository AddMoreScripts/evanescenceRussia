import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Breadcrumbs from '../../components/Breadcrumbs'

import '../css/others.css'




const Minus = ({ data }) => {

    return (
        <Layout inner={true}>
            <Breadcrumbs data={[
                {
                    title: "Разное",
                    path: "/other/",
                },
                {
                    title: "Скачать ноты",
                    path: "/",
                },
            ]} />
            <div className="page__content page__content--simple">
                <h1 className="page__title">Скачать ноты и сборники нот Evanescence</h1>
                <div className="page__text">
                    <p>На сайт добавлены два сборника нот песен группы. В этих книгах содержатся ноты, лирика и аккорды для гитары, всех песен Evanescence из альбомов «Fallen» и «The Open Door». Обе книги (в формате PDF),</p>
                    <div className="pianosheetscovers flexi">
                        <img src="http://evanescence-rus.ru/images/Raznoe/F_book.jpg" alt="" />
                        <img src="http://evanescence-rus.ru/images/Raznoe/TOD_book.jpg" alt="" />
                    </div>
                    <p>Список песен в каждом сборнике:</p>
                    <h3>Fallen</h3>
                    <ol>
                        <li>Going Under</li>
                        <li>Bring Me to Life</li>
                        <li>Everybody's Fool</li>
                        <li>My Immortal</li>
                        <li>Haunted</li>
                        <li>Tourniquet</li>
                        <li>Imaginary</li>
                        <li>Taking Over Me</li>
                        <li>Hello</li>
                        <li>My Last Breath</li>
                        <li>Whisper</li>
                    </ol>
                    <h3><strong>The open door </strong></h3>
                    <ol>
                        <li>Sweet Sacrifice</li>
                        <li>Call Me When You're Sober</li>
                        <li>Weight of the World</li>
                        <li>Lithium</li>
                        <li>Cloud Nine</li>
                        <li>Snow White Queen</li>
                        <li>Lacrymosa</li>
                        <li>Like You</li>
                        <li>Lose Control</li>
                        <li>The Only One</li>
                        <li>Your Star</li>
                        <li>All That I'm Living For</li>
                        <li>Good Enough</li>
                    </ol>
                    <h3>Другие ноты.</h3>
                    <ul>
                        <li>Anywhere.</li>
                        <li>Away From Me.</li>
                        <li>Breathe No More.</li>
                        <li>Broken.</li>
                        <li>Ethernal.</li>
                        <li>Even In Death.</li>
                        <li>Exodus.</li>
                        <li>Field of Innocence.</li>
                        <li>Forgive Me.</li>
                        <li>Give Unto Me.</li>
                        <li>Goodnight.</li>
                        <li>Heart Shaped Box.</li>
                        <li>Lies.</li>
                        <li>Missing.</li>
                        <li>So Close.</li>
                        <li>Solitude.</li>
                        <li>The Last Song Im Wasting On You.</li>
                        <li>Where Will You Go.</li>
                    </ul>
                    <p>Посмотреть/Скачать:&nbsp;<br/>
                        <strong>
                            <a href="https://files.evanescence-rus.ru/files/Fallen_book.pdf">Fallen (PDF 16.7mb)</a>.<br/>
                            <a href="https://files.evanescence-rus.ru/files/The_Open_Door_book.pdf">The Open Door (PDF 15.8mb)</a>.<br/>
                            <a href="https://files.evanescence-rus.ru/files/Evanescence_Other_Songs.rar">Другие ноты (PDF -&gt; RAR 9.35mb).</a>
                        </strong>
                    </p>
                    <p>
                        <em>Если у вас проблемы с просмотром, нажмите на ссылку правой кнопкой мыши и выберете «сохранить по ссылке как»</em>
                    </p>
                    <Link to="/other/" className="button page__button"><i className="fas fa-arrow-left"></i> Назад</Link>
                </div>
            </div>
        </Layout>
    )
}

export default Minus