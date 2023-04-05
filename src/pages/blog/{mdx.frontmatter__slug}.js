import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import { Box, Typography } from "@mui/material";
import { SEO } from "../../components/SEO/SEO";

const BlogPost = ({ data, children }) => {
  const { frontmatter: fm } = data.mdx;
  const image = getImage(fm.hero_image);

  console.log("blog stuff");
  console.log(fm);

  return (
    <>
      <CssBaseline />
      <Layout pageTitle={fm.title}>
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
              <a href={fm.hero_image_credit_link}>
                {fm.hero_image_credit_text}
              </a>
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
      </Layout>
    </>
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
