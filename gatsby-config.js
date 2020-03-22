module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        accessToken: `MW-I0ORcmYFz1_gD5WnICZIZP0jxmVYj-kInJEyPV6w`,
      },
    },


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}