import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../../components/layout'
import Breadcrumbs from '../../components/Breadcrumbs'
import './song.css'
import { graphql } from 'gatsby';



export default ({ data }) => {
    const crumbs = [
        {
            title: "Песни",
            path: '/lyric/',
        },
        {
            title: data.markdownRemark.frontmatter.title,
            path: '',
        },
    ]
    return (
        <Layout inner={true}>
            <Breadcrumbs data={crumbs}/>
            <div className="page__content page__content--simple">
                <h1 className="page__title">{data.markdownRemark.frontmatter.title}</h1>
                <div className="page__text">
                    <h2><i className="fas fa-feather-alt"></i> Информация о песне</h2>
                    <ul>
                        {data.markdownRemark.frontmatter.list.map((item) => (
                         <li key={item}>{item}</li>   
                        ))}
                    </ul>
                    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html }}></div>
                </div>
            </div>
        </Layout>
    )
};


export const query = graphql`
query($id: String!) {
    markdownRemark(id: {eq: $id}) {
        html
        frontmatter {
            path
            title
            type
            list
        }
    }
}
`