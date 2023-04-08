import React, { useState } from "react";
import { graphql } from "gatsby";

import Gallery from "../../components/Gallery/Gallery";
import Card from "../../components/Card/BlogCard";
import { SEO } from "../../components/SEO/SEO";

const Blog = ({ data: _data }) => {
  const BLOGS = _data.allMdx.nodes;
  const [data, setData] = useState(BLOGS);
  const chips = [
    "All",
    ...new Set(BLOGS.map((blog) => blog.frontmatter.tags).flat(1)),
  ];

  const filterChips = (chip) => {
    if (chip === "All") {
      setData(BLOGS);
    } else {
      setData(() => BLOGS.filter((obj) => obj.frontmatter.tags.includes(chip)));
    }
  };

  const filterSearch = (searchTerm) => {
    if (!searchTerm) setData(BLOGS);
    setData(() =>
      BLOGS.filter((obj) =>
        obj.body.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <Gallery
      data={data}
      chips={chips}
      filterChips={filterChips}
      filterSearch={filterSearch}
      Card={Card}
    />
  );
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
