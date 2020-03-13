import React, { useState } from 'react'
// import { Link } from 'gatsby'
import Layout from '../../components/layout'
import Breadcrumbs from '../../components/Breadcrumbs'
import './video.css'
import VideoThumb from '../../components/VideoThumb'
import { graphql } from 'gatsby';



export default ({ data }) => {

    const [videoIsLoad, loadVideo] = useState(false);

    const videoHandler = (e) => {
        e.preventDefault();
        loadVideo(true);
    }

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
                { !videoIsLoad &&
                <VideoThumb
                    thumb={"https://img.youtube.com/vi/" + data.markdownRemark.frontmatter.youtubeID  + "/maxresdefault.jpg"}
                    link={false}
                    big={true}
                    red={true}
                    onClick={videoHandler}
                />}

                { videoIsLoad &&
                    <div className="page__videoframe">
                        <iframe 
                            src={"https://www.youtube.com/embed/" + data.markdownRemark.frontmatter.youtubeID + "?autoplay=1&showinfo=0"}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                }
            </div>
            <div className="page__content page__content--simple">
                <div className="page__text">
                    <h2><i className="fas fa-feather-alt"></i> Информация о Видео</h2>
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
            title
            path
            youtubeID
            videotype
        }
    }
}
`