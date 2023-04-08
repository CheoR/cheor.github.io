import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import { Box, Link, Typography } from "@mui/material";
import { SEO } from "../../components/SEO/SEO";

const BlogPost = ({ data, children }) => {
  const { frontmatter: fm } = data.mdx;
  const image = getImage(fm.hero_image);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GatsbyImage image={image} alt={fm.hero_image_alt} />
      </Box>
      <Box component="p" align="center">
        <Typography variant="caption">
          Photo Credit:{" "}
          <Link
            aria-label={fm.hero_image_credit_text}
            color="inherit"
            href={fm.hero_image_credit_link}
            rel="noreferrer"
            target="_blank"
            underline="hover"
          >
            {fm.hero_image_credit_text}
          </Link>
        </Typography>
      </Box>
      <Typography variant="subtitle2">{fm.datePublished}</Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        {fm.tags.map((tag) => (
          <Typography key={tag} variant="subtitle1">
            #{tag}
          </Typography>
        ))}
      </Box>
      {children}
    </Box>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        datePublished(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        tags
        hero_image {
          childImageSharp {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;

export const Head = ({ data }) => (
  // eslint-disable-next-line
  <SEO
    title={data.mdx.frontmatter.title}
    description={`Blog about ${data.mdx.frontmatter.title}`}
    image={data.mdx.frontmatter.hero_image}
  />
);
