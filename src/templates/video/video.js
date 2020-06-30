import React from 'react'
import Layout from '../../components/layout'
import Breadcrumbs from '../../components/Breadcrumbs'
import './video.css'
import VideoInteractive from '../../components/VideoInteractive'
import { Link, graphql } from 'gatsby';



export default ({ data }) => {

    const crumbs = [
        {
            title: "Медиа",
            path: '/media/',
        },
        {
            title: "Клипы",
            path: '/media/clips/',
        },
        {
            title: data.markdownRemark.frontmatter.title,
            path: '',
        },
    ]
    return (
        <Layout inner={true}>
            <Breadcrumbs data={crumbs}/>
            <h1 className="page__title">Видео: {data.markdownRemark.frontmatter.title}</h1>
            <div className="page__leadvideo">
                <VideoInteractive urlOrId={data.markdownRemark.frontmatter.youtubeID} />
            </div>
            <div className="page__content page__content--simple">
                <div className="page__text">
                    <h2><i className="fas fa-feather-alt"></i> Информация о Видео</h2>
                    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html }}></div>
                </div>
                <Link to="/media/clips/" className="button page__button"><i className="fas fa-arrow-left"></i> Назад</Link>
            </div>
        </Layout>
    )
};


export const query = graphql`
query($id: String!) {
    markdownRemark(id: {eq: $id}) {
        html
        frontmatter {
            title
            path
            youtubeID
            videotype
        }
    }
}
`