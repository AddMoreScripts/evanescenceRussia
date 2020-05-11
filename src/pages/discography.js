import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Discalbum from "../components/Discalbum"
import Breadcrumbs from '../components/Breadcrumbs'



const Discography = ({ data }) => {

  return (
    <Layout inner={true}>
      <Breadcrumbs data={[
        {
          title: "Дискография",
          path: "/",
        }
      ]} />
      <div className="page__content">

        <div className="pagehtml__title pagehtml__title--centred">Дискография Evanescence</div>
        <div className="pagehtml__menu">
          <ul>
            <li><a href="/" className="active">Альбомы</a></li>
            <li><a href="/">Сигнлы</a></li>
          </ul>
        </div>
        {
          data.allMarkdownRemark.edges.map((item) => (
            <Discalbum key={item.node.frontmatter.title} albumData={item.node} />
          ))
        }
      </div>
    </Layout>
  )
}

export default Discography


export const query = graphql`
query Discs {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "album"}}}, sort: {fields: frontmatter___yearof, order: DESC}) {
    edges {
      node {
        frontmatter {
          yearof
          title
          list
          yandexLink
          googleLink
          appleLink
          image {
            publicURL
          }
        }
        html
      }
    }
  }
}
`;
