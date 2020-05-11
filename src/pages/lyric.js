import React from "react"
import { Link, graphql } from "gatsby"

import './css/lyric.css'

import Layout from "../components/layout"
import Breadcrumbs from '../components/Breadcrumbs'



const Lyric = ({ data }) => {

    const songsList = data.allMarkdownRemark.edges;

    function filterLetter(array, letter){
        let outArray = [];
        array.forEach((item)=>{
            if(item.node.frontmatter.title.charAt(0).toLowerCase() === letter){
                outArray.push(item.node.frontmatter)
            }
            return;
        });
        return outArray;
    }

    function letterCicle(){
        let out = [];
        for (let i = 97; i < 122; i++) {
            
            let result = filterLetter(songsList, String.fromCodePoint(i));
            if(result.length === 0) continue;

            out.push(
                <div key={i} className="lyric-letter flexi">
                    <h3 className="lyric-letter__title">{String.fromCodePoint(i)}</h3>
                    <div className="lyric-letter__content">
                    {result.map((item)=>(
                        <Link key={item.title} to={'/songs/' + item.path}>{item.title}</Link>
                    ))}
                    </div>
                </div>
            );         
        }
        return out;
    }


    return (
    <Layout inner={true}>
        <Breadcrumbs data={[
            {
                title: "Песни", 
                path:"/",
            }
        ]}/>
        <div className="page__content">
            <h1 className="page__title">Тексты и переводы песен Evanescence</h1>
            <div className="page__text">
                <p>Здесь вы можете найти все доступные тексты и переводы песен группы Evanescence. Если вы хотите предложить лучший перевод какой-либо песни или добавть переводы других песен, оставляйте предложения в разедле контакты, материалы будут опубликованы со ссылкой на автора.</p>
                <h6>*При подготовке материалов, некоторые переводы песен взяты с lyrsense.com</h6>
            </div>
            <div className="lyric-wrapper">
                {letterCicle()}
            </div>
            
        </div>
    </Layout>
    )
}

export default Lyric


export const query = graphql`
query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "song"}}}, sort: {fields: frontmatter___title}) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
  
`;
