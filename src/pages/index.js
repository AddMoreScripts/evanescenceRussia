import React from "react"
//import { Link, graphql } from "gatsby"

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
            <FrontNewsItem date="21 ЯНВ 2020" thumb={newsthumb1} color="violet"></FrontNewsItem>
            <FrontNewsItem date="21 ЯНВ 2020" thumb={newsthumb2} color="red"></FrontNewsItem>
            <FrontNewsItem date="1 окт 2020"></FrontNewsItem>
            <FrontNewsItem date="21 ЯНВ 2020" thumb={newsthumb1} color="black"></FrontNewsItem>
            <FrontNewsItem date="21 ЯНВ 2020" thumb={newsthumb2} color="black"></FrontNewsItem>
            <FrontNewsItem date="1 окт 2020" thumb={newsthumb4} color="black"></FrontNewsItem>
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


// export const query = graphql`
// query {
//   allSitePage {
//     edges {
//       node {
//         id
//         path
//         component
//       }
//     }
//   }
// }
// `;
