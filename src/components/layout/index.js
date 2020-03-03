/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
// import { useStaticQuery, graphql } from "gatsby"
import './layout.css'

import Header from "../header"
import Breadcrumbs from "../Breadcrumbs"
import Footer from "../Footer"


const Layout = ({ children, inner }) => {

  let [headerFixed, setheaderFixed] = useState(false);

  useEffect(() => {

    //fixed of the menu
    let trigger = false;

    function resetTrigger(){
      trigger = true;
    }
    window.addEventListener('scroll', resetTrigger);
    let scrollInterval = setInterval(function () {
      if (trigger) {
        trigger = false;
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled >= 200) {
          setheaderFixed(true);
        }
        else {
          setheaderFixed(false);
        }
      }
    }, 250);

    return function cleanAll(){
      clearInterval(scrollInterval);
      window.removeEventListener('scroll', resetTrigger);
    }

  });



  if (inner) {
    return (
      <div className="wrap">
        <Header isFixed={headerFixed} />
        <div className="page container">
          {children}
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="wrap">
      <Header isFixed={headerFixed} />
      {children}
      <Footer />
    </div>
  )
}


export default Layout
