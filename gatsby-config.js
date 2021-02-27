module.exports = {
  siteMetadata: {
    title: `HobbyistCS`,
    description: `Reviewing basic CS (Site under construction)`,
    author: `lemontea`,
    authorprofile: "https://github.com/lemonteaa",
    menu: [
      { text: "Home", icon: "HomeIcon", link: "/" },
      { text: "Theory", icon: "FunctionsIcon", link: "/theory" },
      { text: "Language", icon: "ChatIcon", link: "/language" },
      { text: "Platform", icon: "MemoryIcon", link: "/platform" }
    ],
    linkedsites: [
      { text: "wtfwebdev", type: "external_url", link: "http://todo.local" }
    ],
    githubrepo: "https://github.com/hkitsmallpotato/HobbyistCS",
    siteUrl: "https://hobbyistcs.lemontea.letz.dev"
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-theme-material-ui`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages`,
      }
    },
    /*{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },*/
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
