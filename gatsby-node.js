/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)



exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // if (node.internal.type === `MarkdownRemark`) {
  //   const slug = createFilePath({ node, getNode, basePath: `pages` })
  //   createNodeField({
  //     node,
  //     name: `slug`,
  //     value: slug,
  //   });
  // }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
      query MyQuery {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "song"}}}) {
          edges {
            node {
              frontmatter {
                path
                title
              }
            }
          }
        }
      }         
    `);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/songs/${node.frontmatter.path}`,
        component: path.resolve(`./src/templates/song/song.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          title: node.frontmatter.title,
        },
      });
    });

}