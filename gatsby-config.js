require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Evanescence Russia`,
    description: `Русскоязычный сайт о Amy Lee и группе Enanescence`,
    author: `AddMoreScripts`,
  },


  plugins: [
    
    `gatsby-plugin-react-helmet`,
    

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: 'sources',
      },
    },
    

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              backgroundColor: "transparent ",
            },
          },
        ],
      },
    },

    
    `gatsby-transformer-sharp`,
    

    `gatsby-plugin-sharp`,


    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },


    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pbqi6x09zzww`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `${process.env.GATSBY_CONTENTFULL_KEY}`,
      },
    },


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}