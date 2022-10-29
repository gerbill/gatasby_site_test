module.exports = {
  siteMetadata: {
    title: `My first Gatsby site`,
    description: `This is my first Gatsby site to test this framework!`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    },
    "gatsby-plugin-mdx",
  ],
}
