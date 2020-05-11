import React from "react"
// import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Breadcrumbs from '../components/Breadcrumbs'




const TextPage = ({ data }) => {

    return (
        <Layout inner={true}>
            <Breadcrumbs data={[
                {
                    title: "Концерты в России",
                    path: "/",
                }
            ]} />
            <div className="page__content page__content--simple">
                <h1 className="page__title">Концерты в России</h1>
                <div className="page__text">
                    <p>Страница в разработке</p>
                </div>
            </div>
        </Layout>
    )
}

export default TextPage