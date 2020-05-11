import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import Breadcrumbs from '../../components/Breadcrumbs'
import FrontNewsItem from '../../components/FrontNewsItem'




const Biography = ({ data, pageContext }) => {



  let paginator = [];
  let prevLink = <Link className="prev page-numbers" to={`/news/${pageContext.currentPage - 1}`}><i className="fas fa-chevron-left"></i></Link>;
  let nextLink = <Link className="next page-numbers" to={`/news/${pageContext.currentPage + 1}`}><i className="fas fa-chevron-right"></i></Link>;

  //Show-hide arrows
  switch (pageContext.currentPage) {
    case 1:
      prevLink = "";
      break;
    case 2:
      prevLink = <Link className="prev page-numbers" to={`/news/`}><i className="fas fa-chevron-left"></i></Link>;
      break;
    case pageContext.numPages:
      nextLink = "";
      break;
    default:
      break;
  }

  //generate paginator
  for (let index = 0; index < pageContext.numPages; index++) {
    switch (index) {
      case pageContext.currentPage - 1:
        paginator.push(<span key={index + 1} className="page-numbers current">{index + 1}</span>);
        break;
      case 0:
        paginator.push(<Link key={index + 1} className="page-numbers" to={`/news/`}>{index + 1}</Link>);
        break;
      default:
        paginator.push(<Link key={index + 1} className="page-numbers" to={`/news/${index + 1}`}>{index + 1}</Link>);
        break;
    }
  }


  //reduction of pagination, add dots.
  let newPaginator = paginator.map((item, index) => {
    if(index === 0 || index === pageContext.numPages - 1){
      return item;
    }
    if(index === pageContext.currentPage + 1 || index === pageContext.currentPage - 3){
      return <span key={index} className="page-numbers dots">…</span>;
    }
    if(index > pageContext.currentPage + 1 || index < pageContext.currentPage - 3){
      return "";
    }
    return item;
  });





  return (
    <Layout inner={true}>
      <Breadcrumbs data={[
        {
          title: "Новости",
          path: "/",
        }
      ]} />
      <div className="page__content page__content--simple">
        <h1 className="page__title">Все новости</h1>
    <p className="mb-5 mt-2">Страница {pageContext.currentPage} из {pageContext.numPages}</p>

        {
          data.allContentfulNews.edges.map((item) => (
            <FrontNewsItem
              link={"/news/" + item.node.slug}
              key={item.node.id}
              date={item.node.newsdate}
              thumb={item.node.thumbnail ? item.node.thumbnail.file.url : undefined}
              color="black"
              text={item.node.newstitle} />
          ))
        }

      </div>


      {console.log(pageContext)}
      <nav className="navigation pagination" role="navigation">
        <div className="nav-links">
          {prevLink}
          {newPaginator}
          {nextLink}
        </div>
      </nav>


    </Layout>
  )
}

export default Biography


export const query = graphql`
query ($skip: Int!, $limit: Int!){
  allContentfulNews(
      limit: $limit
      skip: $skip
      sort: {fields: newsdate, order: DESC}
    ) {
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