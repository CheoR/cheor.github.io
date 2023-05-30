import React from "react";
import { graphql } from "gatsby";

import Gallery from "../../components/Gallery/Gallery";
import Layout from "../../components/Layout";
import { SEO } from "../../components/SEO";

const Blog = ({ data: _data }) => {
  const BLOGS = _data.allMdx.nodes;
  const filters = {
    search: (searchTerm) =>
      BLOGS.filter((obj) =>
        obj.body.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    select: (tag) =>
      BLOGS.filter((blog) => blog.frontmatter.tags.includes(tag)),
    tags: ["All", ...new Set(BLOGS.flatMap((blog) => blog.frontmatter.tags))],
  };

  return <Gallery data={BLOGS} filters={filters} />;
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___datePublished, order: DESC }) {
      nodes {
        id
        body
        frontmatter {
          author
          datePublished(formatString: "MMMM D, YYYY")
          title
          slug
          tags
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;

export default Blog;

// eslint-disable-next-line
export const Head = () => <SEO title="My Ramblings" description="Blogs Page" />;
