import React from "react"
// import { Link, graphql } from "gatsby"

import '../css/media.css'

import Layout from "../../components/layout"
import Breadcrumbs from '../../components/Breadcrumbs'





const Page = ({ data }) => {

    return (
        <Layout inner={true}>
            <Breadcrumbs data={[
                {
                    title: "Медиа",
                    path: "/media/",
                },
                {
                    title: "Аудио",
                    path: "/",
                },
            ]} />
            <div className="pagehtml">
                <h1 className="pagehtml__title">Скачать альбомы Evanescence</h1>
                <div className="page__content page__content--simple page__text">
                    <p>На этой странице вы сможете скачать первые альбомы Evanescence, Demo записи и EP. Это абсолютно бесплатно, т.к. на все эти записи не распространяются авторские права, и найти в магазинах старые диски невозможно. В интервью радио DC101, Эми Ли и Бен Муди, советовали фанатам скачивать старые песни группы, нежели покупать с рук за большие деньги.</p>
                    <p>Все файлы Flac ~ 1000 Kbps, все Mp3 - 320 Kbps. </p>
                </div>


                <div className="media">
                    <div className="media__col">


                        <div className="media-block">
                            <div className="media-block__row">
                                <div className="media-block__title"><i className="fas fa-compact-disc"></i> EVANESCENCE EP (1998)</div>
                            </div>
                            <div className="media-block__content">
                                <ol className="media-block__textlist">
                                    <li>Where Will You Go</li>
                                    <li>Solitude</li>
                                    <li>Imaginary</li>
                                    <li>Exodus</li>
                                    <li>So close</li>
                                    <li>Understanding</li>
                                    <li>The End</li>
                                </ol>
                                <div className="media-block__downs flexi">
                                    <a href="https://yadi.sk/d/7GyWa2Teh7JIuw" className="button" target="_blank" rel="noopener noreferrer">
                                        Скачать Evanescence EP<small>MP3 - 69.4 MB (Yandex Disc)</small></a>
                                </div>
                            </div>
                        </div>


                        <div className="media-block">
                            <div className="media-block__row">
                                <div className="media-block__title"><i className="fas fa-compact-disc"></i> SOUND ASLEEP EP (1999)</div>
                            </div>
                            <div className="media-block__content">
                                <ol className="media-block__textlist">
                                    <li>Give Unto Me</li>
                                    <li>Whisper</li>
                                    <li>Understanding</li>
                                    <li>Forgive Me</li>
                                    <li>Understanding</li>
                                    <li>Ascension Of The Spirit</li>
                                </ol>
                                <div className="media-block__downs flexi">
                                </div>
                            </div>
                        </div>

                        <div className="media-block">
                            <div className="media-block__row">
                                <div className="media-block__title"><i className="fas fa-compact-disc"></i> ORIGIN (2000)</div>
                            </div>
                            <div className="media-block__content">
                                <ol className="media-block__textlist">
                                    <li>Origin</li>
                                    <li>Whisper</li>
                                    <li>Imaginary</li>
                                    <li>My Immortal</li>
                                    <li>Where Will You Go</li>
                                    <li>Field of Innocence</li>
                                    <li>Even in Death</li>
                                    <li>Anywhere</li>
                                    <li>Lies</li>
                                    <li>Away from Me</li>
                                    <li>Eternal</li>
                                </ol>
                                <div className="media-block__downs flexi">
                                    <a href="https://yadi.sk/d/Kyghnq85KnDDoA" className="button" target="_blank" rel="noopener noreferrer">
                                        Скачать Origin <small>MP3 - 104 MB (Yandex Disc)</small></a>
                                </div>
                            </div>
                        </div>

                        <div className="media-block">
                            <div className="media-block__row">
                                <div className="media-block__title"><i className="fas fa-compact-disc"></i> MYSTARY EP (2003)</div>
                            </div>
                            <div className="media-block__content">
                                <ol className="media-block__textlist">
                                    <li>My Last Breath</li>
                                    <li>My Immortal</li>
                                    <li>Farther Away</li>
                                    <li>Everybody's Fool</li>
                                    <li>Imaginary</li>
                                </ol>
                                <div className="media-block__downs flexi">
                                    <a href="https://yadi.sk/d/tM66Wx0gID_o8w" className="button" target="_blank" rel="noopener noreferrer">
                                        Скачать Mystary EP <small>FLAC - 136 MB (Yandex Disc)</small></a>
                                    <a href="https://yadi.sk/d/rTdz0C8qeDv5-g" className="button" target="_blank" rel="noopener noreferrer">
                                        Скачать Mystary EP <small>MP3 - 45.7 MB (Yandex Disc)</small></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="media__col">

                        <div className="media-block">
                            <div className="media-block__row">
                                <div className="media-block__title"><i className="fas fa-compact-disc"></i> СКАЧАТЬ ДЕМО ЗАПИСИ</div>
                            </div>
                            <div className="media-block__content">
                                <ol className="media-block__textlist">
                                    <li>Demo - Whisper2002</li>
                                    <li>Demo - Everybody's Fool</li>
                                    <li>Demo - Anything For You</li>
                                    <li>Demo - Even In Death</li>
                                    <li>Demo - Farther Away</li>
                                    <li>Demo - Imaginary</li>
                                    <li>Demo - My Tourniquet</li>
                                    <li>Demo - Taking Over Me</li>
                                    <li>Demo - Haunted</li>
                                    <li>Demo - Before The Dawn</li>
                                    <li>Demo - Bleed</li>
                                    <li>Demo - Hello</li>
                                    <li>Demo - Taking Over Me (long)</li>
                                    <li>Demo - Missing</li>
                                    <li>Demo - Surrender</li>
                                    <li>Demo - Bring Me To Life (original)</li>
                                    <li>Demo - Breathe No More</li>
                                    <li>Demo - Forgive Me</li>
                                    <li>Demo - Bring Me To Life (Demo V.2)</li>
                                    <li>Demo - Everybody's Fool (Demo V.1)</li>
                                    <li>Demo - Forever You</li>
                                    <li>Demo - Haunted (Radio Edit)</li>
                                    <li>Demo - Imaginary (Demo V.2)</li>
                                    <li>Demo - Lies (Remixed)</li>
                                    <li>Demo - My Last Breath</li>
                                    <li>Demo - My Tourniquet (Demo V.1)</li>
                                </ol>
                                <div className="media-block__downs flexi">
                                    <a href="https://yadi.sk/d/O7fGGw2smQuZAA" className="button" target="_blank" rel="noopener noreferrer">
                                        Скачать Демо-записи <small>MP3 - 189 MB (Yandex Disc)</small></a>
                                </div>
                            </div>
                        </div>


                        <div className="media-block">
                            <div className="media-block__row">
                                <div className="media-block__title"><i className="fas fa-compact-disc"></i> Другие песни</div>
                            </div>
                            <div className="media-block__content">
                                <ol className="media-block__textlist">
                                    <li>Demise</li>
                                    <li>Going Under - Demo</li>
                                    <li>Haunted - Demo Version #3</li>
                                    <li>Imaginary (Mystary)</li>
                                    <li>My Tourniquet - Demo Version #3</li>
                                    <li>Whisper - Demo Version #1</li>
                                    <li>Whisper - Demo Version #2</li>
                                    <li>Goodnight</li>
                                    <li>Listen To The Rain</li>
                                </ol>
                                <div className="media-block__downs flexi">
                                    <a href="https://yadi.sk/d/wno3xr75HyznEw" className="button" target="_blank" rel="noopener noreferrer">
                                        Скачать Другие песни <small>MP3 - 42.8 MB (Yandex Disc)</small></a>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>


            </div>
        </Layout>
    )
}

export default Page