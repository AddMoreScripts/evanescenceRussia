import React from "react"
import { Link, graphql } from "gatsby"

import './css/biography.css'

import Layout from "../components/layout"
import Breadcrumbs from '../components/Breadcrumbs'

import amy from '../images/bio/Amy.jpg'
import tim from '../images/bio/tim.jpg'
import troy from '../images/bio/Troy.jpg'
import jen from '../images/bio/jen.jpg'
import will from '../images/bio/Will.jpg'



const Biography = ({ data }) => {

    return (
        <Layout inner={true}>
            <Breadcrumbs data={[
                {
                    title: "О группе",
                    path: "/",
                }
            ]} />
            <div className="page__content page__content--simple">
                <h1 className="page__title">ИСТОРИЯ ГРУППЫ</h1>
                <div className="page__text">
                    <p><strong>Evanescence</strong> — всемирно известная американская рок-группа с женским вокалом.
                        Коллектив получил огромную популярность после выхода дебютного альбома «Fallen» в 2003 году. В настоящее время,
                        группа находится в отпуске, отыграв в 2012 году последний концерт мирового тура, в поддержку третьего студийного альбома.
                    </p>

                    <h2>Действующий состав</h2>
                </div>
                

                <div className="bio">
                    <div className="bio__item">
                        <a href="#" className="bio__img">
                            <img src={amy} alt=""></img>
                        </a>
                        <div className="bio__content">
                            <a href="#" className="bio__name">Эми Ли <small>Amy Lee</small></a>
                            <div className="bio__social">
                                <a href="https://twitter.com/AmyLeeEV" target="_blank" className="bio__link"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/AmyLeeOfficial" target="_blank" className="bio__link"><i className="fab fa-facebook-square"></i></a>
                                <a href="https://www.instagram.com/amylee/" target="_blank" className="bio__link"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.youtube.com/channel/UCxdWaWTIj-AFycTmuAPm62A" target="_blank" className="bio__link"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="bio__item">
                        <a href="#" className="bio__img">
                            <img src={tim} alt=""></img>
                        </a>
                        <div className="bio__content">
                            <a href="#" className="bio__name">Тим МакКорд <small>TIM MCCORD</small></a>
                            <div className="bio__social">
                                <a href="https://twitter.com/tim_mccord" target="_blank" className="bio__link"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/ttmccord/" target="_blank" className="bio__link"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="bio__item">
                        <a href="#" className="bio__img">
                            <img src={troy} alt=""></img>
                        </a>
                        <div className="bio__content">
                            <a href="#" className="bio__name">Трой МакЛоухорн <small>Troy McLawhorn </small></a>
                            <div className="bio__social">
                                <a href="https://twitter.com/troy__mclawhorn" target="_blank" className="bio__link"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/troy.mclawhorn" target="_blank" className="bio__link"><i className="fab fa-facebook-square"></i></a>
                                <a href="https://www.instagram.com/troymclawhorn1/" target="_blank" className="bio__link"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="bio__item">
                        <a href="#" className="bio__img">
                            <img src={jen} alt=""></img>
                        </a>
                        <div className="bio__content">
                            <a href="#" className="bio__name">Джен Маджура <small>Jen Majura</small></a>
                            <div className="bio__social">
                                <a href="https://twitter.com/jenmajura" target="_blank" className="bio__link"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/jenmajuraofficial" target="_blank" className="bio__link"><i className="fab fa-facebook-square"></i></a>
                                <a href="https://www.instagram.com/jen_majura/" target="_blank" className="bio__link"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="bio__item">
                        <a href="#" className="bio__img">
                            <img src={will} alt=""></img>
                        </a>
                        <div className="bio__content">
                            <a href="#" className="bio__name">Уилл Хант <small>Will Hunt</small></a>
                            <div className="bio__social">
                                <a href="https://twitter.com/willfnhunt" target="_blank" className="bio__link"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/Will-Hunt-287898684562943/" target="_blank" className="bio__link"><i className="fab fa-facebook-square"></i></a>
                                <a href="https://www.instagram.com/willhuntinc/" target="_blank" className="bio__link"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page__text">

                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>

                </div>
            </div>
        </Layout>
    )
}

export default Biography


export const query = graphql`
query MyQuery {
    markdownRemark(frontmatter: {title: {eq: "Biography"}}) {
      html
    }
  }
`;
