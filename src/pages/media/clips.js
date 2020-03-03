import React from "react"
import { Link, graphql } from "gatsby"

import '../css/media.css'

import Layout from "../../components/layout"
import Breadcrumbs from '../../components/Breadcrumbs'
import MediaItem from '../../components/MediaItem'


export default ({ data }) => {

    return (
        <Layout inner={true}>
            <Breadcrumbs data={[
                {
                    title: "Медиа",
                    path: "/media/",
                },
                {
                    title: "Видеоклипы",
                },
            ]} />
            <div className="pagehtml">
                <h1 className="pagehtml__title">Видеоклипы Evanescence</h1>
                <div className="page__content page__content--simple">
                    <p>Здесь представлены официальные видеоклипы группы Evanesence. Под каждым видео можно узнать интересные факты о съёмках и сюжетах клипов, прочитать рецензии.</p>
                </div>
                <div className="media media--full">
                    <div className="media-block">
                        <div className="media-block__content">
                            {data.allMarkdownRemark.edges.map((item) => {
                                return (
                                    <MediaItem
                                        key={item.node.frontmatter.title}
                                        href={"/video/" + item.node.frontmatter.path}
                                        thumb={"https://i.ytimg.com/vi/" + item.node.frontmatter.youtubeID + "/hqdefault.jpg"}
                                        title={item.node.frontmatter.title}>
                                        Клип Evanescence на песню <br/>{item.node.frontmatter.title}. <br/>Дата выхода: {item.node.frontmatter.date}
                                    </MediaItem>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}


export const query = graphql`
query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "video"}}}, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
            node {
                frontmatter {
                title
                path
                videotype
                youtubeID
                date(formatString: "MMMM Y", locale: "ru")
                }
                html
            }
        }
    }
}
`;
