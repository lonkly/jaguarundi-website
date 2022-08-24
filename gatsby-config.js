require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Julia Kosinskaya - Children's illustrator`,
    siteTitleAlt: `Julia Kosinskaya`,
    siteHeadline: `Julia Kosinskaya`,
    siteUrl: `https://kosinskaya.com/`,
    siteDescription: `Illustrations for Children`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Vivienne Fosh`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: `Julia Kosinskaya`,
        location: `Mykolayiv, Ukraine`,
        showThemeAuthor: `false`,
        mdx: true,
        socialMedia: [
          {
            title: `Instagram`,
            href: `https://www.instagram.com/gardegraphics`
          }
        ],
        sharp: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: `Julia Kosinskaya`,
        description: `Illustrations for kids`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
       // theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
