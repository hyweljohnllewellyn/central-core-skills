module.exports = {
  siteMetadata: {
    title: 'Central Core Skills',
    description:
      'Eclectic educational training programmes',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    },
    // 9 May 2020 START HYWEL
  // https://www.gatsbyjs.org/packages/gatsby-remark-embed-video/?=video
    {
          resolve: `gatsby-transformer-remark`,
          options: {
            plugins: [
              {
                // Using gatsby-remark-embed-video before gatsby-remark-images & gatsby-remark-responsive-iframe plugins.             
                resolve: `gatsby-remark-embed-video`,             options: {
                  //maxWidth: 800,
                  //ratio: 1.77,
                  //height: 400,
                  related: false,
                 // noIframerder: true,
                 urlOverrides: [
                  {
                    id: 'youtube',
                    embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                  }
                ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
                containerClass: 'lazyload', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              },
              },
              {
                resolve: `gatsby-remark-images`,             options: {
                  //maxWidth: 590,
                },
              },
              {
                resolve: `gatsby-remark-lazy-load`,  
              },
              {
                resolve: `gatsby-remark-responsive-iframe`,
                options: {
                  //wrapperStyle: `margin-bottom: 1.0725rem`,
                },
              },`gatsby-remark-lazy-load`,
              ],
          },
        },
  // 9 May 2020 END HYWEL
    // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
