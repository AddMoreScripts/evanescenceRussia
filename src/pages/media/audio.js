import React from "react"
// import { Link, graphql } from "gatsby"

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
            <div className="page__content page__content--simple">
                <h1 className="page__title">Скачать альбомы Evanescence</h1>
                <div className="page__text">
                    <p>На сайт добавлены два сборника нот песен группы. В этих книгах содержатся ноты, лирика и аккорды для гитары, всех песен Evanescence из альбомов «Fallen» и «The Open Door». Обе книги (в формате PDF),</p>

                </div>
            </div>
        </Layout>
    )
}

export default Page