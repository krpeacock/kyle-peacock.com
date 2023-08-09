require("dotenv").config();

const rehypePrism = require("@mapbox/rehype-prism");

module.exports = {
  siteMetadata: {
    title: `Kyle Peacock's website`,
    description: `For all your Kyle Peacock related needs`,
    siteUrl: `https://kyle-peacock.com`,
    author: `Kyle Peacock`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/layouts/layout.js"),
        },
        rehypePlugins: [
          rehypePrism,
          require("rehype-slug"),
          // To pass options, use a 2-element array with the
          // configuration in an object in the second element
          [require("rehype-autolink-headings"), { behavior: "wrap" }],
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              wrapperStyle: "margin-bottom: 1rem;",
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kyle-peacock.com`,
        short_name: `website`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/peacock-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: "pages",

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: "flexsearch",

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: "speed",

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    tags
                    path
                    date
                    description
                  }
                  rawBody
                }
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: "id",

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ["title", "body"],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        // store: ['id', 'path', 'title'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) => {
          return data.allMdx.edges.map((edge) => ({
            id: edge.node.id,
            path: edge.node.frontmatter.path,
            title: edge.node.frontmatter.title,
            body: edge.node.rawBody,
            frontmatter: edge.node.frontmatter,
          }));
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                });
              });
            },
            query: `
            {
              allMdx(sort: {order: DESC, fields: frontmatter___date}) {
                edges {
                  node {
                    slug
                    frontmatter {
                      date
                      description
                      title
                      tags
                    }
                    excerpt
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: "Kyle Peacock's RSS Feed",
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
