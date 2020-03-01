/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import './layout.css'

import Header from "../header"
import Breadcrumbs from "../Breadcrumbs"
import Footer from "../Footer"


const Layout = ({ children, inner }) => {


  if(inner){
    return (
      <div className="wrap">
        <Header />
        <div className="page container">
          {children}
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="wrap">
      <Header />
      {children}
      <Footer />
    </div>
  )
}


export default Layout
