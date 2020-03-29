import React, { useState } from 'react'
// import { Link } from 'gatsby'
import Layout from '../../components/layout'
import Breadcrumbs from '../../components/Breadcrumbs'
import './newsPage.css'
import { graphql } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from '@contentful/rich-text-types';

import ShareBlock from '../../components/ShareBlock/ShareBlock';
import VideoInteractive from '../../components/VideoInteractive'



export default ({ data }) => {
    const crumbs = [
        {
            title: "Новости",
            path: '/allnews/',
        },
        {
            title: data.contentfulNews.newstitle,
            path: '',
        },
    ]
    
    const options = {
        renderNode: {
            [INLINES.HYPERLINK]: (node) => {
                if((node.data.uri).includes("youtube.com/watch")) {
                    return <VideoInteractive urlOrId={node.data.uri} />
                }
            }
        }
    }
    // console.log(data.contentfulNews.body.json);
    return (
        <Layout inner={true}>
            <div className="row no-gutters">
                <div className="col-12">
                    <Breadcrumbs data={crumbs}/>
                </div>
                <div className="page__content col-12 col-xl order-2 order-xl-1" style={{paddingRight:50 + "px"}}>
                    <h1 className="page__title">{data.contentfulNews.newstitle}</h1>
                    <div className="page__text">
                        {documentToReactComponents(data.contentfulNews.body.json, options)}
                    </div>
                </div>

                <div className="page__right col-12 col-xl-auto order-1 order-xl-2">
                    <div className="page__meta">
                        <div className="page__meta__l">
                            <div className="page__date">
                                <i className="fas fa-calendar-plus"></i>
                                <span>{data.contentfulNews.newsdate}</span>
                            </div>
                            <div className="page__comments_count">
                                <i className="fas fa-comment"></i>
                                <span>2</span>
                            </div>
                        </div>
                        <div className="page__meta__r">
                            <div className="page__likes">
                                <i className="fas fa-heart"></i>
                                <span>12</span>
                            </div>
                            <ShareBlock></ShareBlock>
                        </div>
                    </div>
                    <div className="page__gallery">
                        <div className="page__single-img">
                            {
                                data.contentfulNews.thumbnail && 
                                    <img src={data.contentfulNews.thumbnail.file.url} alt=""/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};


export const query = graphql`
query($id: String!) {
    contentfulNews(id: {eq: $id}) {
        slug
        thumbnail {
          file {
            url
          }
        }
        newstitle
        newsdate(formatString: "DD MMMM YYYY", locale: "ru")
        body {
          json
        }
    }
  }
`