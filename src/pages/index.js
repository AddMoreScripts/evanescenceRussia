import React from "react"
import { graphql } from "gatsby"

import './css/index.css'

import Layout from "../components/layout"
import FrontHero from '../components/FrontHero'
import FrontNewsItem from '../components/FrontNewsItem'
import VideoThumb from '../components/VideoThumb'
import FactsBlock from '../components/FactsBlock'
import GalleryWidget from '../components/GalleryWidget'

import newsthumb1 from '../images/content/news1.jpg'
import newsthumb2 from '../images/content/news2.jpg'
import newsthumb4 from '../images/content/news4.jpg'

import videoThumb1 from '../images/content/video1.jpg'
import videoThumb2 from '../images/content/video2.jpg'
import videoThumb3 from '../images/content/video3.jpg'


const IndexPage = ({ data }) => {

  const galleryImgs = [
    newsthumb1,
    newsthumb2,
    newsthumb4,
    videoThumb1,
    videoThumb2,
    videoThumb3,
    newsthumb1,
    newsthumb2,
    newsthumb4,
    videoThumb1,
    videoThumb2,
    videoThumb3,
    videoThumb3,
    newsthumb1,
    newsthumb2,
    newsthumb4,
    videoThumb1,
    videoThumb2,
    videoThumb3
  ];

  return (
    <Layout>
      <FrontHero></FrontHero>

      <div className="frontwrap container">
        <div className="front__l">
          <div className="frnews">
            <div className="frtitle">News <small>новости</small></div>

            {
              data.allContentfulNews.edges.map((item) => (
                <FrontNewsItem
                  link={"/news/" + item.node.slug}
                  key={item.node.id}
                  date={item.node.newsdate}
                  thumb={item.node.thumbnail ? item.node.thumbnail.file.url: undefined}
                  color="black"
                  text={item.node.newstitle} />
              ))
            }

            <a href="#" className="morebutton">Все новости</a>
          </div>
        </div>

        <div className="front__r">
          <div className="frtitle">Video <small>клипы</small></div>
          <div className="frvideos">
            <VideoThumb thumb={videoThumb1} red={true} big={true}></VideoThumb>
            <VideoThumb thumb={videoThumb2}></VideoThumb>
            <VideoThumb thumb={videoThumb3}></VideoThumb>
            <VideoThumb thumb={newsthumb1}></VideoThumb>
            <VideoThumb thumb={videoThumb2}></VideoThumb>
          </div>
          <a href="#" className="morebutton">смотреть все</a>

          <FactsBlock></FactsBlock>
        </div>
      </div>
      <GalleryWidget sources={galleryImgs}></GalleryWidget>
    </Layout>
  )
}

export default IndexPage


export const query = graphql`
query NewsItem {
  allContentfulNews(limit: 5, sort: {fields: newsdate, order: DESC}) {
    edges {
      node {
        id
        slug
        thumbnail {
          file {
            url
          }
        }
        newstitle
        newsdate(formatString: "DD MMMM YYYY", locale: "ru")
      }
    }
  }
}
`;
