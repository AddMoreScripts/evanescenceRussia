import React from "react"
import { Link, graphql } from "gatsby"

import './css/lyric.css'

import Layout from "../components/layout"
import Breadcrumbs from '../components/Breadcrumbs'



const Lyric = ({ data }) => {

    const songsList = data.allMarkdownRemark.edges;

    function filterLetter(array, letter){
        let outArray = [];
        array.map((item)=>{
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
                <div key={i}>
                    <h3>{String.fromCodePoint(i)}</h3>
                    {result.map((item)=>(
                        <Link key={item.title} to={'/songs/' + item.path}>{item.title}</Link>
                    ))}
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
        <div className="page__content page__content--simple">
            <h1 className="page__title">Тексты и переводы песен Evanescence</h1>
            {letterCicle()}
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
