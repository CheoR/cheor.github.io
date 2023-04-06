require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Cheo Roman Portfolio`,
    siteUrl: `https://cheor.github.io/`,
    author: "CheoR",
    description: "CheoR Web Dev Portfolio",
    image: "/assets/images/self.png",
    keywords: "CheoR Web Dev Portfolio",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        background_color: `red`,
        crossOrigin: `use-credentials`,
        display: `standalone`,
        icon: "src/images/icon.png",
        name: `CheoR`,
        short_name: `CheoR`,
        start_url: `/`,
        theme_color: `green`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
      __key: "blog",
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
