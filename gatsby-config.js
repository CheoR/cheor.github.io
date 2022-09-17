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
    image: "./src/images/icon.png", // "/assets/images/self.png",
    keywords: "CheoR Web Dev Portfolio",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: `CheoR`,
        short_name: `CheoR`,
        start_url: `/`,
        background_color: `red`,
        theme_color: `green`,
        display: `standalone`,
        crossOrigin: `use-credentials`,
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
