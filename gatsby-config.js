module.exports = {
  siteMetadata: {
    title: 'Gatsby playground',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-playground',
        short_name: 'playground',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#00a9e3',
        display: 'minimal-ui'
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `cms`,
        url: `https://api-euwest.graphcms.com/v1/cjn5q26x73go701gllem4j73j/master`,
        typeName: `GraphCMS`,
        refetchInterval: 60,
      },
    },
    'gatsby-plugin-offline',
  ],
}
