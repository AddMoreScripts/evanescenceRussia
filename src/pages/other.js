import React from "react"
import { Link, graphql } from "gatsby"

import './css/others.css'

import Layout from "../components/layout"
import Breadcrumbs from '../components/Breadcrumbs'

import other1 from '../images/content/other1.jpg'
import other2 from '../images/content/other2.jpg'
import other3 from '../images/content/other3.jpg'
import other4 from '../images/content/other4.jpg'



const Other = ({ data }) => {

    return (
        <Layout inner={true}>
            <Breadcrumbs data={[
                {
                    title: "Разное",
                    path: "/",
                }
            ]} />
            <div className="pagehtml">
                <h1 className="page__title pagehtml__title--centred">Разное</h1>
                <div className="row no-gutters pagehtml__content">
                    <div className="col-12 col-lg-6">
                        <Link to="/other/minus/" className="imglinkblock">
                            <img src={other1} alt=""/>
                            <span className="imglinkblock__abs">Скачать фонограммы (Минусовки)</span>
                        </Link>
                    </div>
                    <div className="col-12 col-lg-6">
                        <Link to="/other/piano-sheets/" className="imglinkblock">
                            <img src={other2} alt=""/>
                            <span className="imglinkblock__abs">Ноты и сборники нот EVANESCENCE</span>
                        </Link>
                    </div>
                    <div className="col-12 col-lg-6">
                        <Link to="/media/audio/" className="imglinkblock">
                            <img src={other3} alt=""/>
                            <span className="imglinkblock__abs">Скачать демо альбомы EVANESCENCE</span>
                        </Link>
                    </div>
                    <div className="col-12 col-lg-6">
                        <Link to="/" className="imglinkblock">
                            <img src={other4} alt=""/>
                            <span className="imglinkblock__abs">Ссылки</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Other

